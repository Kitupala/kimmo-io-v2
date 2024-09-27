import classNames from "classnames";
import SkillPill from "./SkillPill";
import { useDarkMode } from "../../context/DarkModeContext";

function SkillBar({ title, grade, index }) {
  const { isDarkMode } = useDarkMode();

  const widthVariants = {
    25: "[--width:25%]",
    35: "[--width:35%]",
    40: "[--width:40%]",
    50: "[--width:50%]",
    60: "[--width:60%]",
    65: "[--width:65%]",
    75: "[--width:75%]",
    85: "[--width:85%]",
  };

  const animationStyle = {
    animationDelay: `${(index + 3) * 250}ms`,
    animationFillMode: "both",
  };

  const animationStylePercentage = {
    animationDelay: `${(index + 4) * 250}ms`,
    animationFillMode: "both",
  };

  return (
    // Bar base
    <li
      className={classNames(
        "group relative mb-4 flex h-8 w-full animate-slide-right items-center rounded-md opacity-0 shadow-sm last:mb-0",
        isDarkMode && "bg-slate-900/80 hover:bg-slate-900",
        !isDarkMode && "bg-sky-100/60 hover:bg-sky-100",
      )}
      style={animationStyle}
    >
      {/* Bar length */}
      <span
        className={classNames(
          "h-8 animate-slide-right rounded-s-md opacity-0",
          `${widthVariants[grade]}`,
          isDarkMode && "bg-transparent-sm",
          !isDarkMode &&
            "bg-gradient-to-l from-sky-400/90 from-25% to-sky-300/60",
        )}
        style={animationStyle}
      ></span>

      {/* Tech title */}
      <span
        className="absolute left-0 inline-block animate-fade-in opacity-0"
        style={animationStyle}
      >
        <SkillPill value={title} />
      </span>

      {/* Tech percentage */}
      <span
        className="ml-auto animate-fade-in pr-2 text-xs text-muted-text opacity-0 group-hover:text-highlight-text"
        style={animationStylePercentage}
      >
        {grade}%
      </span>
    </li>
  );
}

export default SkillBar;
