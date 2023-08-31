import { BiError } from "react-icons/bi";
import { useData } from "../../context/DataContext";

function MailError() {
  const { dispatch } = useData();

  return (
    <div className="flex min-h-[calc(100vh-365px)] animate-fade-in flex-col items-center justify-center opacity-0">
      <BiError className="mb-6 text-7xl text-primary-text" />

      <p className="mb-24 text-md text-primary-text">
        Something went wrong &mdash; <br className="sm:hidden" /> message was
        not delivered!
      </p>
      <span className="max-w-max cursor-pointer rounded-md border border-transparent-white-secondary px-6 py-2.5 text-sm text-off-white transition-all duration-200 hover:border-indigo-900 hover:bg-page-gradient hover:text-indigo-300">
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
