import classNames from "classnames";
import SkillPill from "./SkillPill";

function SkillBar({ title, grade, index }) {
  const widthVariants = {
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
    animationDelay: `${(index + 2) * 250}ms`,
    animationFillMode: "both",
  };

  return (
    // Bar base
    <li className="group relative mb-4 flex h-8 w-full items-center rounded-md bg-slate-900/80 last:mb-0 hover:bg-slate-900">
      {/* Bar length */}
      <span
        className={classNames(
          "h-8 animate-slide-right rounded-s-md bg-transparent-white-primary/5 opacity-0",
          `${widthVariants[grade]}`,
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

      <span
        className="ml-auto animate-fade-in pr-2 text-xs text-grey opacity-0 group-hover:text-off-white"
        style={animationStylePercentage}
      >
        {grade}%
      </span>
    </li>
  );
}

export default SkillBar;
