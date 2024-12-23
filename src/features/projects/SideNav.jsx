import { useData } from "../../context/DataContext";
import SideNavButton from "./SideNavButton";

function SideNav() {
  const { projects } = useData();

  return (
    <nav className="overflow-auto md:overflow-hidden">
      <ul className="mb-6 flex w-max text-md md:mb-0 md:w-[23rem] md:flex-col md:[&_button]:px-[2rem] [&_li]:pl-[0.2rem] [&_li]:pr-[1.2rem]">

        {/* Mapping projects reversed to render link buttons */}
        {projects.slice().reverse().map((project, i) => (
          <SideNavButton
            id={project.id}
            title={project.title}
            index={i}
            key={project.id}
          />
        ))}
      </ul>
    </nav>
  );
}

export default SideNav;
