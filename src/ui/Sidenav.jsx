import { useData } from "../context/DataContext";
// import SideNavButton from "./SideNavButton";

function Sidenav() {
  const { projects } = useData();

  return (
    <nav className="overflow-auto md:overflow-hidden">
      <ul className="mb-6 flex w-max text-md md:mb-0 md:w-[23rem] md:flex-col [&_button:hover]:border-l-slate-50/50 [&_button:hover]:text-grey md:[&_button:hover]:bg-transparent-white-primary [&_button]:duration-300 md:[&_button]:px-[2rem] [&_li]:px-[1.2rem]">
        {/* Mapping projects to render link buttons */}
        {/* {projects.map((project) => (
          <SideNavButton
            id={project.id}
            title={project.title}
            key={project.id}
          />
        ))} */}
      </ul>
    </nav>
  );
}

export default Sidenav;
