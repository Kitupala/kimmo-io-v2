import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

function HeroImg() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [lines, setLines] = useState([]);
  const timeOutRef = useRef(null);

  const randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function removeLine(id) {
    setLines((prev) => prev.filter((line) => line.id !== id));
  }

  useEffect(() => {
    if (!inView) return;

    const renderLine = (timeOut) => {
      timeOutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? "to bottom" : "to right",
            duration: randomNumberBetween(1300, 3500),
            size: randomNumberBetween(10, 25),
            id: Math.random().toString(36).substring(7),
          },
        ]);
        renderLine(randomNumberBetween(1000, 2500));
      }, timeOut);
    };

    renderLine(randomNumberBetween(800, 1300));

    return () => {
      if (timeOutRef.current) clearTimeout(timeOutRef.current);
    };
  }, [inView, setLines]);

  return (
    <div ref={ref} className="[perspective:2000px]">
      <div
        className={classNames(
          "relative mt-[12.8rem] rounded-lg border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient",
          inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
          "before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:blur-[120px]",
          inView && "before:animate-image-glow",
        )}
      >
        <div className="absolute left-0 top-0 z-20 h-full w-full">
          {lines.map((line) => (
            <span
              onAnimationEnd={() => removeLine(line.id)}
              key={line.id}
              style={{
                "--direction": `${line.direction}`,
                "--size": `${line.size}`,
                "--animation-duration": `${line.duration}ms`,
              }}
              className={classNames(
                "absolute top-0 block h-[1px] w-[10rem] bg-glow-lines",
                line.direction === "to right" &&
                  `animate-glow-line-horizontal left-0 h-[1px] w-[calc(var(--size)*1rem)]`,
                line.direction === "to bottom" &&
                  `animate-glow-line-horizontal animate-glow-line-vertical right-0 h-[calc(var(--size)*1rem)] w-[1px]`,
              )}
            ></span>
          ))}
        </div>
        <svg
          className={classNames(
            "absolute left-0 top-0 h-full w-full",
            "[&_path]:stroke-white [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1] [&_path]:[stroke-opacity:0.2]",
            inView && "[&_path]:animate-sketch-lines",
          )}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>

        <img
          className={classNames(
            "relative z-10 transition-opacity delay-[680ms]",
            inView ? "opacity-100" : "opacity-0",
          )}
          src="/hero@4x.webp"
        />
        {/* <img className="relative z-10" src="/ai-kt.jpg" /> */}
      </div>
    </div>
  );
}

export default HeroImg;
