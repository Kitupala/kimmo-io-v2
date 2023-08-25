import Container from "../../ui/Container";
import ProjectLayout from "./ProjectLayout";

function Projects() {
  return (
    <Container className="min-h-[calc(100vh-285px)] overflow-hidden">
      <div className="mt-16 sm:mt-24">
        <h2 className="text-gradient mt-5 translate-y-[-1rem] animate-fade-translate-in text-4xl tracking-tight opacity-0 [--animation-delay:200ms] sm:text-6xl md:mb-10">
          Featured projects
        </h2>
      </div>
      <ProjectLayout />
    </Container>
  );
}

export default Projects;
