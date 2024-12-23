import classNames from "classnames";
import { useDarkMode } from "../../context/DarkModeContext";
import IconLink from "../../ui/IconLink";
import TechPill from "../../ui/TechPill";

function Project({ project }) {
  const { isDarkMode } = useDarkMode();
  const links = project.link;

  return (
    <div
      className="grid w-full animate-fade-in grid-cols-11 py-[3px] text-primary-text opacity-0 [--animation-delay:200ms]
      md:pl-[4rem]"
    >
      {/* Project description */}
      <div className="col-span-12 col-end-12 row-span-full flex h-full flex-col self-center rounded-md border border-transparent-sm bg-background/20 px-6 py-2 custom-bp-sm:bg-background/80 md:col-span-6 md:col-start-1 md:border-0 md:bg-transparent md:p-0">
        <h3
          className="text-xl text-primary-text sm:text-2xl 
          "
        >
          <span className="text-xxs uppercase tracking-widest text-muted-text">
            Project
          </span>
          <br />
          {project.title}
        </h3>
        <div className="mt-5 max-w-lg rounded-md md:max-w-none md:border-2 md:border-transparent-sm md:bg-background/80 md:px-5 md:pb-5 md:pt-4 md:shadow-lg">
          <p className="text-md">{project.description}</p>
        </div>

        {/* Project links */}
        <div className="z-20 row-span-full flex space-x-4 pb-4 pt-6 text-2xl text-muted-text md:col-span-6 md:col-start-1 [&_a:hover]:text-highlight-text [&_a]:duration-300">
          {links?.map((link) => (
            <IconLink
              label={link.at(0).linkData.label}
              href={link.at(0).linkData.href}
              icon={link.at(0).linkData.icon}
              key={Math.floor(Math.random() * 100)}
            />
          ))}
        </div>
      </div>

      {/* Project image */}
      <div className="-z-20 col-span-12 col-end-12 row-span-full flex items-start md:col-span-7 md:col-end-12">
        <div className="overflow-hidden rounded-md border-2 border-transparent-sm md:shadow-lg ">
          <img
            className={classNames(
              "-z-30 hidden h-auto object-cover opacity-80 custom-bp-sm:block md:object-contain",
              isDarkMode && "opacity-60",
            )}
            src={project.image}
            alt={`Image of ${project.title} app`}
          />
        </div>
      </div>

      {/* Project technologies */}
      <div className="col-span-12 col-end-12 flex flex-col md:z-0 md:row-span-full pb-20 md:items-end md:justify-end md:pt-2">
        <ul
          className="mt-1 flex flex-wrap opacity-75 [&_li]:mr-1.5 last:[&_li]:mr-0"
          aria-label="Technologies used"
        >
          {project.tech.map((tech) => (
            <TechPill key={tech} value={tech} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
