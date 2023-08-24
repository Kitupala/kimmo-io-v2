import { useData } from "../../context/DataContext";
import classNames from "classnames";

function SideNavButton({ id, title }) {
  const { dispatch, projectTab } = useData();

  function handleClick(e) {
    if (projectTab === e.currentTarget.id) return;
    dispatch({ type: "showProject", payload: e.currentTarget.id });
  }

  return (
    <div>
      <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:200ms]">
        <button
          className={classNames(
            "z-50 flex h-11 w-full items-center md:border-l-2",
            projectTab === id
              ? "pointer-events-none border-l-slate-50/50 text-[#858699]"
              : "border-l-transparent-white-primary text-off-white",
          )}
          id={id}
          onClick={handleClick}
        >
          <span>{title}</span>
        </button>
      </li>
    </div>
  );
}

export default SideNavButton;
