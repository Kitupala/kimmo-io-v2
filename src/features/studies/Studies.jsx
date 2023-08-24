import { useData } from "../../context/DataContext";
import Container from "../../ui/Container";
import Aphorism from "./Aphorism";
import Course from "./Course";

function Studies() {
  const { studies } = useData();

  return (
    <Container className="min-h-[calc(100vh-285px)] overflow-hidden">
      <div className="custom-bp-md:fixed mt-16 sm:mt-24">
        <h2 className="text-gradient mb-6 translate-y-[-1rem] animate-fade-translate-in text-4xl tracking-tight opacity-0 [--animation-delay:200ms] sm:mb-8 sm:text-6xl md:mb-10">
          Coding courses
        </h2>

        <div className="relative animate-fade-in opacity-0 [--animation-delay:1500ms]">
          <div className="custom-bp-md:block absolute -left-2 -top-60 hidden opacity-40">
            <Aphorism />
          </div>
        </div>
      </div>

      <div className="custom-bp-md:justify-end custom-bp-md:mt-28 flex items-center">
        <ol className="group/list custom-bp-md:max-w-2xl animate-fade-in opacity-0 [--animation-delay:800ms] lg:max-w-4xl">
          {studies.map((course) => (
            <Course course={course} key={course.id} />
          ))}
        </ol>
      </div>
    </Container>
  );
}

export default Studies;
