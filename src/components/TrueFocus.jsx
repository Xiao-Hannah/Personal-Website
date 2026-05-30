import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "./TrueFocus.css";

export default function TrueFocus({
  sentence = "True Focus",
  separator = " ",
  direction = "row",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  textColor,
  fontSize,
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}) {
  const words = sentence.split(separator).map((w) => w.trim()).filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);
      return () => clearInterval(interval);
    }
  }, [manualMode, words.length, animationDuration, pauseBetweenAnimations]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === undefined) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
    setLastActiveIndex(currentIndex);
  }, [currentIndex]);

  const handleMouseEnter = (index) => {
    if (manualMode) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className={`true-focus-container${direction === "column" ? " true-focus-container--column" : ""}`} ref={containerRef} style={{ ...(textColor ? { "--text-color": textColor } : {}), ...(fontSize ? { "--font-size": fontSize } : {}) }}>
      {words.map((word, index) => (
        <span
          key={index}
          ref={(el) => (wordRefs.current[index] = el)}
          className={`focus-word ${index === currentIndex ? "active" : ""}`}
          style={{
            filter: index === currentIndex ? "blur(0px)" : `blur(${blurAmount}px)`,
            "--border-color": borderColor,
            "--glow-color": glowColor,
          }}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          {word}
        </span>
      ))}

      {lastActiveIndex !== null && (
        <motion.div
          className="focus-frame"
          animate={{
            x: focusRect.x,
            y: focusRect.y,
            width: focusRect.width,
            height: focusRect.height,
            opacity: 1,
          }}
          transition={{ duration: animationDuration }}
          style={{
            "--border-color": borderColor,
            "--glow-color": glowColor,
          }}
        >
          <span className="corner top-left" />
          <span className="corner top-right" />
          <span className="corner bottom-left" />
          <span className="corner bottom-right" />
        </motion.div>
      )}
    </div>
  );
}
