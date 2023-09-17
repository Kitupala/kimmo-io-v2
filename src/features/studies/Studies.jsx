import { useData } from "../../context/DataContext";
import Container from "../../ui/Container";
import Aphorism from "./Aphorism";
import Course from "./Course";

function Studies() {
  const { studies } = useData();

  return (
    <Container className="min-h-[calc(100vh-285px)] overflow-hidden">
      <div className="mt-16 sm:mt-24 custom-bp-md:fixed">
        <h2 className="from-gradient-text to-gradient-text/[.45] mb-6 animate-fade-translate-in bg-gradient-to-br from-25% bg-clip-text text-4xl tracking-tight text-transparent opacity-0 [--animation-delay:200ms] sm:mb-8 sm:text-6xl md:mb-10">
          Coding courses
        </h2>

        <div className="relative animate-fade-in opacity-0 [--animation-delay:1500ms]">
          <div className="absolute -left-2 -top-60 hidden opacity-40 custom-bp-md:block">
            <Aphorism />
          </div>
        </div>
      </div>

      <div className="flex items-center custom-bp-md:mt-28 custom-bp-md:justify-end">
        <ol className="group/list animate-fade-in opacity-0 [--animation-delay:400ms] custom-bp-md:max-w-2xl lg:max-w-4xl">
          {studies.map((course) => (
            <Course course={course} key={course.id} />
          ))}
        </ol>
      </div>
    </Container>
  );
}

export default Studies;
