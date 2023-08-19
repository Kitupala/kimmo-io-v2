import Sidenav from "../../ui/Sidenav";
import Project from "./Project";

function ProjectLayout() {
  return (
    <div className="my-5 md:flex">
      <Sidenav />
      <Project />
    </div>
  );
}

export default ProjectLayout;
