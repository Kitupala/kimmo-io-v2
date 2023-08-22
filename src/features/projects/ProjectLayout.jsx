import Sidenav from "../../ui/Sidenav";
import Project from "./Project";
import { useData } from "../../context/DataContext";

function ProjectLayout() {
  const { projects, projectTab, projectIsVisible } = useData();
  const currentProject = projects
    .filter((project) => project.id === projectTab)
    .at();

  return (
    <div className="my-5 md:flex">
      <Sidenav />
      {projectIsVisible && (
        <Project project={currentProject} key={currentProject.id} />
      )}
    </div>
  );
}

export default ProjectLayout;
