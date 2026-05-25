import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type SpotlightKey = "about" | "experience" | "projects" | null;

interface SpotlightCtx {
  spotlight: SpotlightKey;
  setSpotlight: (key: SpotlightKey) => void;
  toggleSpotlight: (key: Exclude<SpotlightKey, null>) => void;
  clearSpotlight: () => void;
}

const Ctx = createContext<SpotlightCtx>({
  spotlight: null,
  setSpotlight: () => {},
  toggleSpotlight: () => {},
  clearSpotlight: () => {},
});

export const SpotlightProvider = ({ children }: { children: ReactNode }) => {
  const [spotlight, setSpotlight] = useState<SpotlightKey>(null);

  const toggleSpotlight = useCallback(
    (key: Exclude<SpotlightKey, null>) =>
      setSpotlight((curr) => (curr === key ? null : key)),
    []
  );

  const clearSpotlight = useCallback(() => setSpotlight(null), []);

  return (
    <Ctx.Provider value={{ spotlight, setSpotlight, toggleSpotlight, clearSpotlight }}>
      {children}
    </Ctx.Provider>
  );
};

export const useSpotlight = () => useContext(Ctx);
