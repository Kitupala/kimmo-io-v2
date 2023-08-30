import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataContext";
import ThumbsUp from "./ThumbsUp";

function MailSuccess() {
  const { dispatch } = useData();

  return (
    <div className="flex min-h-[calc(100vh-365px)] animate-fade-in flex-col items-center justify-center opacity-0">
      <ThumbsUp className="mb-4 h-40 w-40 fill-grey" />
      <p className=" mb-4 text-center text-xl text-primary-text">
        Thanks for reaching out!
      </p>
      <p className="mb-24 text-center text-md text-primary-text">
        Your message just showed up in my inbox. Talk to you soon!
      </p>
      <span className="max-w-max cursor-pointer rounded-md border border-transparent-white-secondary px-6 py-2.5 text-sm text-off-white transition-all duration-200 hover:border-indigo-900 hover:bg-page-gradient hover:text-indigo-300">
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
