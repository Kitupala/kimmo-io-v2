import { useState } from "react";
import { useData } from "../context/DataContext";
import classNames from "classnames";

function Sidenav() {
  const { dispatch, projectTab } = useData();

  function handleClick(e) {
    if (projectTab === e.currentTarget.id) return;
    dispatch({ type: "showProject", payload: e.currentTarget.id });
  }

  return (
    <nav className="overflow-auto">
      <ul className="mb-6 flex w-max text-md md:mb-0 md:w-[23rem] md:flex-col [&_button:hover]:border-l-slate-50/50 [&_button:hover]:text-grey md:[&_button:hover]:bg-transparent-white-primary [&_button]:duration-300 md:[&_button]:px-[2rem] [&_li]:px-[1.2rem]">
        <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:200ms]">
          <button
            className={classNames(
              "flex h-11 w-full items-center  md:border-l-2",
              projectTab === "0.1"
                ? "pointer-events-none border-l-slate-50/50 text-[#858699]"
                : "border-l-transparent-white-primary text-off-white",
            )}
            //
            id="0.1"
            onClick={handleClick}
          >
            <span>Omnifood</span>
          </button>
        </li>

        <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:800ms]">
          <button
            className={classNames(
              "flex h-11 w-full items-center md:border-l-2",
              projectTab === "0.2"
                ? "pointer-events-none border-l-slate-50/50 text-[#858699]"
                : "border-l-transparent-white-primary text-off-white",
            )}
            id="0.2"
            onClick={handleClick}
          >
            <span>Forkify</span>
          </button>
        </li>

        <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:900ms]">
          <button
            className={classNames(
              "flex h-11 w-full items-center md:border-l-2",
              projectTab === "0.3"
                ? "pointer-events-none border-l-slate-50/50 text-[#858699]"
                : "border-l-transparent-white-primary text-off-white",
            )}
            id="0.3"
            onClick={handleClick}
          >
            <span>Fast React Pizza Co.</span>
          </button>
        </li>

        <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:1000ms]">
          <button
            className={classNames(
              "flex h-11 w-full items-center  md:border-l-2",
              projectTab === "0.4"
                ? "pointer-events-none border-l-slate-50/50 text-[#858699]"
                : "border-l-transparent-white-primary text-off-white",
            )}
            id="0.4"
            onClick={handleClick}
          >
            <span>Today I Learned</span>
          </button>
        </li>

        <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:1100ms]">
          <button
            className={classNames(
              "flex h-11 w-full items-center  md:border-l-2",
              projectTab === "0.5"
                ? "pointer-events-none border-l-slate-50/50 text-[#858699]"
                : "border-l-transparent-white-primary text-off-white",
            )}
            id="0.5"
            onClick={handleClick}
          >
            <span>Addressbook</span>
          </button>
        </li>

        <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:1200ms]">
          <button
            className={classNames(
              "flex h-11 w-full items-center  md:border-l-2",
              projectTab === "0.6"
                ? "pointer-events-none border-l-slate-50/50 text-[#858699]"
                : "border-l-transparent-white-primary text-off-white",
            )}
            id="0.6"
            onClick={handleClick}
          >
            <span>The Wild Oasis</span>
          </button>
        </li>

        <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:1300ms]">
          <button
            className={classNames(
              "flex h-11 w-full items-center  md:border-l-2",
              projectTab === "0.7"
                ? "pointer-events-none border-l-slate-50/50 text-[#858699]"
                : "border-l-transparent-white-primary text-off-white",
            )}
            id="0.7"
            onClick={handleClick}
          >
            <span>kimmo.io v2.1</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Sidenav;
