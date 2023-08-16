import { useEffect, useRef } from "react";

export function useMouseGradient() {
  const gradientRef = useRef();

  useEffect(() => {
    if (!gradientRef.current) return;

    const updateMousePosition = (ev) => {
      const { clientX, clientY } = ev;

      gradientRef.current.style.setProperty("--x", `${clientX}px`);
      gradientRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return gradientRef;
}
