import { useData } from "../../context/DataContext";
import Container from "../../ui/Container";
import Course from "./Course";

function Studies() {
  const { studies } = useData();

  return (
    <Container className="min-h-[calc(100vh-285px)] overflow-hidden">
      <div className="top-28 sm:top-36 md:fixed">
        <h2 className="text-gradient mb-6 mt-5 translate-y-[-1rem] animate-fade-translate-in text-4xl tracking-tight opacity-0 [--animation-delay:200ms] sm:text-6xl md:mb-10">
          Coding courses
        </h2>
      </div>
      <div className="flex items-center justify-end md:mt-28">
        <ol className="group/list animate-fade-translate-in opacity-0 [--animation-delay:600ms] md:max-w-2xl lg:max-w-4xl">
          {studies.map((course) => (
            <Course course={course} key={course.id} />
          ))}
        </ol>
      </div>
    </Container>
  );
}

export default Studies;
