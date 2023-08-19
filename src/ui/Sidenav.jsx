import { useState } from "react";

function Sidenav() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentTab, setCurrentTab] = useState("tab-0");

  function handleClick(e) {
    if (currentTab === e.currentTarget.id) return;
    if (currentTab !== e.currentTarget.id) setIsVisible((visible) => !visible);

    setIsVisible((visible) => !visible);
    setCurrentTab(e.currentTarget.id);

    console.log(e.currentTarget.id);
  }

  return (
    <nav className="overflow-auto">
      <ul className="md:[&_button:hover]:bg-transparent-white-primary mb-6 flex w-max text-md md:mb-0 md:w-[23rem] md:flex-col [&_button:hover]:text-grey md:[&_button:hover]:border-l-off-white [&_button]:duration-300 md:[&_button]:px-[2rem] [&_li]:px-[1.2rem]">
        <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:700ms]">
          <button
            className="border-l-transparent-off-white text-primary flex h-11 w-full items-center  text-grey md:border-l-2"
            id="tab-0"
            onClick={handleClick}
          >
            <span>Omnifood</span>
          </button>
        </li>

        <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:800ms]">
          <button
            className="md:border-l-transparent-white-secondary flex h-11 w-full items-center text-off-white md:border-l-2"
            id="tab-1"
            onClick={handleClick}
          >
            <span>Forkify</span>
          </button>
        </li>

        <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:900ms]">
          <button
            className="border-l-transparent-white-secondary flex h-11 w-full items-center text-off-white md:border-l-2"
            id="tab-2"
            onClick={handleClick}
          >
            <span>Fast React Pizza Co.</span>
          </button>
        </li>

        <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:1000ms]">
          <button
            className="border-l-transparent-white-secondary flex h-11 w-full items-center text-off-white md:border-l-2"
            id="tab-3"
          >
            <span>Today I Learned</span>
          </button>
        </li>

        <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:1100ms]">
          <button
            className="border-l-transparent-white-secondary flex h-11 w-full items-center text-off-white md:border-l-2"
            id="tab-4"
            onClick={handleClick}
          >
            <span>Addressbook</span>
          </button>
        </li>

        <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:1200ms]">
          <button
            className="border-l-transparent-white-secondary flex h-11 w-full items-center text-off-white md:border-l-2"
            id="tab-5"
            onClick={handleClick}
          >
            <span>The Wild Oasis</span>
          </button>
        </li>

        <li className="translate-y-[-1rem] animate-fade-translate-in opacity-0 [--animation-delay:1300ms]">
          <button
            className="border-l-transparent-white-secondary flex h-11 w-full items-center text-off-white md:border-l-2"
            id="tab-5"
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
