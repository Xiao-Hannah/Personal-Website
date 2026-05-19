import { useEffect, useRef, useState } from "react";

// Spotify iFrame API type sketch (only the bits we use)
interface SpotifyController {
  loadUri: (uri: string) => void;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  destroy: () => void;
  addListener: (
    event: string,
    cb: (data: { data: { isPaused: boolean; isBuffering: boolean } }) => void
  ) => void;
}

interface SpotifyIFrameAPI {
  createController: (
    element: HTMLElement,
    options: {
      width: string | number;
      height: string | number;
      uri: string;
    },
    callback: (controller: SpotifyController) => void
  ) => void;
}

declare global {
  interface Window {
    SpotifyIframeApi?: SpotifyIFrameAPI;
    onSpotifyIframeApiReady?: (api: SpotifyIFrameAPI) => void;
  }
}

const SCRIPT_SRC = "https://open.spotify.com/embed/iframe-api/v1";
let scriptLoadingPromise: Promise<SpotifyIFrameAPI> | null = null;

/**
 * Lazy-load the Spotify iFrame API exactly once across the page.
 * Returns a promise that resolves to the API factory.
 */
const loadSpotifyApi = (): Promise<SpotifyIFrameAPI> => {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("SSR"));
  }
  if (window.SpotifyIframeApi) {
    return Promise.resolve(window.SpotifyIframeApi);
  }
  if (scriptLoadingPromise) return scriptLoadingPromise;

  scriptLoadingPromise = new Promise<SpotifyIFrameAPI>((resolve, reject) => {
    // Hook before injecting the script — Spotify calls this when ready.
    const prev = window.onSpotifyIframeApiReady;
    window.onSpotifyIframeApiReady = (api) => {
      window.SpotifyIframeApi = api;
      prev?.(api);
      resolve(api);
    };

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`
    );
    if (existing) return; // another component injected it

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onerror = () => reject(new Error("Failed to load Spotify iframe API"));
    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
};

interface SpotifyPreviewProps {
  /** Spotify track ID (e.g. "18c2nsUPffvsYcRI7bnaOq"). */
  trackId: string;
  /** When true, immediately play the track. Toggle to control playback. */
  active: boolean;
  /** Optional callback when user pauses inside the embed. */
  onPauseFromEmbed?: () => void;
}

/**
 * Auto-playing Spotify track preview. When `active` flips to true,
 * lazy-loads the iFrame API, creates a controller, and starts playback
 * inside the same user-gesture chain (so autoplay is allowed).
 */
const SpotifyPreview = ({ trackId, active, onPauseFromEmbed }: SpotifyPreviewProps) => {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const controllerRef = useRef<SpotifyController | null>(null);
  const [ready, setReady] = useState(false);

  // Create / update controller when `active` becomes true the first time.
  useEffect(() => {
    if (!active || !hostRef.current) return;

    let cancelled = false;
    let createdController: SpotifyController | null = null;

    const start = async () => {
      // If we already have a controller, just play.
      if (controllerRef.current) {
        controllerRef.current.play();
        return;
      }
      try {
        const api = await loadSpotifyApi();
        if (cancelled || !hostRef.current) return;
        api.createController(
          hostRef.current,
          {
            width: "100%",
            height: 152,
            uri: `spotify:track:${trackId}`,
          },
          (controller) => {
            if (cancelled) {
              controller.destroy();
              return;
            }
            controllerRef.current = controller;
            createdController = controller;
            setReady(true);
            // Start playing in the same gesture chain
            controller.play();
            controller.addListener("playback_update", (e) => {
              if (e.data.isPaused) onPauseFromEmbed?.();
            });
          }
        );
      } catch {
        /* swallow — the iframe URL fallback still works */
      }
    };

    start();
    return () => {
      cancelled = true;
      // Pause but don't destroy — the user may re-open it
      createdController?.pause();
    };
  }, [active, trackId, onPauseFromEmbed]);

  // Pause when active becomes false
  useEffect(() => {
    if (!active && controllerRef.current) {
      controllerRef.current.pause();
    }
  }, [active]);

  // Tear down on unmount
  useEffect(() => {
    return () => {
      controllerRef.current?.destroy();
      controllerRef.current = null;
    };
  }, []);

  if (!active) return null;

  return (
    <div
      className={`spotify-preview ${ready ? "is-ready" : "is-loading"}`}
      ref={hostRef}
      aria-label="Spotify player"
    />
  );
};

export default SpotifyPreview;
