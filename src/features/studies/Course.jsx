import { HiMiniArrowUpRight } from "react-icons/hi2";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

import TechPill from "../../ui/TechPill";
import Certificate from "./Certificate";
import Modal from "../../ui/Modal";
import { useDarkMode } from "../../context/DarkModeContext";
import classNames from "classnames";

function Course({ course }) {
  const { isDarkMode } = useDarkMode();

  return (
    <li className="mb-20 last:mb-0">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-9 sm:gap-8 md:gap-2 lg:hover:!opacity-100 lg:group-hover/list:opacity-60">
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-text sm:col-span-3">
          {course.started} &mdash; {course.completed}
        </header>

        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-primary-text">
            <div>
              <a
                className={classNames(
                  "group/link inline-flex items-baseline text-lg font-medium leading-tight text-primary-text",
                  isDarkMode &&
                    "hover:text-indigo-300 focus-visible:text-indigo-300",
                  !isDarkMode &&
                    " hover:text-sky-500 focus-visible:text-sky-500",
                )}
                href={course.link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {course.title} ·{" "}
                  <span className="inline-block">
                    {course.platform}
                    <span className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none">
                      <HiMiniArrowUpRight />
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <p className="my-2 text-sm leading-normal text-muted-text custom-bp-xs:mb-0">
            {course.description}
          </p>
          <ul className="mb-4 mt-2 flex hidden flex-wrap custom-bp-xs:block">
            <li className="mr-4">
              <Modal>
                <Modal.Open opens="cert">
                  <button
                    className={classNames(
                      "relative mt-2 inline-flex items-center text-sm text-highlight-text",
                      isDarkMode &&
                        "hover:text-indigo-300 focus-visible:text-indigo-300",
                      !isDarkMode &&
                        " hover:text-sky-500 focus-visible:text-sky-500",
                    )}
                  >
                    Certificate
                    <span className="ml-1">
                      <AiOutlineSafetyCertificate />
                    </span>
                  </button>
                </Modal.Open>
                <Modal.Window name="cert">
                  <Certificate cert={course.certificate} />
                </Modal.Window>
              </Modal>
            </li>
          </ul>
          <ul className="flex flex-wrap gap-1 opacity-75">
            {course.tech.map((tech) => (
              <TechPill value={tech} key={tech} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default Course;
