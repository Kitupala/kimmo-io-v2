import { BiError } from "react-icons/bi";
import { useData } from "../../context/DataContext";
import { useDarkMode } from "../../context/DarkModeContext";
import classNames from "classnames";

function MailError() {
  const { dispatch } = useData();
  const { isDarkMode } = useDarkMode();

  return (
    <div className="flex min-h-[calc(100vh-365px)] animate-fade-in flex-col items-center justify-center opacity-0">
      <BiError
        className={classNames(
          "mb-6 text-7xl",
          isDarkMode && "text-slate-500",
          !isDarkMode && "text-sky-700",
        )}
      />

      <p className="mb-24 text-md text-primary-text">
        Something went wrong &mdash; <br className="sm:hidden" /> message was
        not delivered!
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
        <button
          onClick={() =>
            dispatch({ type: "setMailStatus", payload: { type: "mailto" } })
          }
        >
          Try again
        </button>
      </span>
    </div>
  );
}

export default MailError;
