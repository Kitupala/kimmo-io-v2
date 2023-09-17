import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataContext";
import ThumbsUp from "./ThumbsUp";
import classNames from "classnames";
import { useDarkMode } from "../../context/DarkModeContext";

function MailSuccess() {
  const { dispatch } = useData();
  const { isDarkMode } = useDarkMode();

  return (
    <div className="flex min-h-[calc(100vh-365px)] animate-fade-in flex-col items-center justify-center opacity-0">
      <ThumbsUp
        className={classNames(
          "mb-4 h-20 w-20  sm:h-40 sm:w-40",
          isDarkMode && "fill-slate-500",
          !isDarkMode && "fill-sky-700",
        )}
      />
      <p className=" mb-4 text-center text-xl text-primary-text">
        Thank you for reaching out!
      </p>
      <p className="mb-24 text-center text-md text-primary-text">
        Your message just showed up in my inbox. Talk to you soon!
      </p>
      <span
        className={classNames(
          "max-w-max cursor-pointer rounded-md border border-transparent-md px-6 py-2.5 text-sm text-highlight-text transition-all duration-200",
          isDarkMode &&
            "hover:border-indigo-900 hover:bg-page-gradient hover:text-indigo-300",
          !isDarkMode &&
            "border-sky-300 hover:border-sky-400 hover:text-highlight-text",
        )}
      >
        <NavLink
          to="/"
          onClick={() =>
            dispatch({ type: "setMailStatus", payload: { type: "mailto" } })
          }
        >
          Close
        </NavLink>
      </span>
    </div>
  );
}

export default MailSuccess;
