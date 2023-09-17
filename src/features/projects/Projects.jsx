import Container from "../../ui/Container";
import ProjectLayout from "./ProjectLayout";

function Projects() {
  return (
    <Container className="min-h-[calc(100vh-280px)] overflow-hidden">
      <div className="mt-16 sm:mt-24">
        <h2 className="mt-5 translate-y-[-1rem] animate-fade-translate-in bg-gradient-to-br from-gradient-text from-25% to-gradient-text/[.45] bg-clip-text text-4xl tracking-tight text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:mb-10">
          Featured projects
        </h2>
      </div>
      <ProjectLayout />
    </Container>
  );
}

export default Projects;
