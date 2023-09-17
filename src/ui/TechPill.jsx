import classNames from "classnames";
import { useDarkMode } from "../context/DarkModeContext";

function TechPill({ value }) {
  const { isDarkMode } = useDarkMode();

  return (
    <li
      className={classNames(
        "mt-2 flex items-center rounded-full px-4  py-[6px] text-xs font-medium leading-5  md:-mb-1",
        isDarkMode
          ? "bg-page-gradient text-indigo-500"
          : "border-[0.5px] border-sky-300 bg-background/60 text-sky-600",
      )}
    >
      {value}
    </li>
  );
}

export default TechPill;
