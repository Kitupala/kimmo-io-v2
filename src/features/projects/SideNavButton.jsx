import { useData } from "../../context/DataContext";
import classNames from "classnames";

function SideNavButton({ id, title, index }) {
  const { dispatch, projectTab } = useData();

  function handleClick(e) {
    if (projectTab === e.currentTarget.id) return;
    dispatch({ type: "showProject", payload: e.currentTarget.id });
  }

  const animationStyle = {
    animationDelay: `${(index + 1) * 150}ms`,
    animationFillMode: "both",
  };

  return (
    <li
      className="translate-y-[-1rem] animate-fade-translate-in opacity-0"
      style={animationStyle}
    >
      <button
        className={classNames(
          "md:border-l-sidenav-border md:hover:border-l-sidenav-bg md:hover:bg-sidenav-border relative z-50 flex h-11 w-full items-center text-highlight-text transition-colors duration-200 md:border-l-2",
          projectTab === id &&
            "md:!border-l-sidenav-bg pointer-events-none text-muted-text",
        )}
        id={id}
        onClick={handleClick}
      >
        <span>{title}</span>
      </button>
    </li>
  );
}

export default SideNavButton;
