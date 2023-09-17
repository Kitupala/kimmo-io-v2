import Container from "../../ui/Container";
import TechSkills from "./TechSkills";
import RosterItem from "./RosterItem";

import { useData } from "../../context/DataContext";

function Abilities() {
  const { abilities } = useData();
  const description = abilities.at(0).soft.at(0).description;
  const softSkills = abilities.at(0).soft.at(1).roster;

  return (
    <Container className="min-h-[calc(100vh-285px)] overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* grid-col left*/}
        <div className="row-span-full mt-16 sm:mt-24 md:col-start-1 md:col-end-2">
          <h2 className="mb-6 animate-fade-translate-in bg-gradient-to-br from-gradient-text from-25% to-gradient-text/[.45] bg-clip-text text-4xl tracking-tight text-transparent opacity-0 [--animation-delay:200ms] sm:mb-8 sm:text-6xl md:mb-10">
            Abilities and skills
          </h2>

          <p className="mb-8 animate-fade-translate-in pr-0 text-md text-primary-text opacity-0 [--animation-delay:300ms] md:mb-8 md:pr-12">
            {description}
          </p>

          <div className="mt-8 flex hidden animate-fade-translate-in opacity-0 [--animation-delay:500ms] md:col-end-2 md:row-start-1  md:mr-12 md:mt-0 md:block">
            <ul className="flex flex-wrap justify-center gap-3 md:justify-start">
              {softSkills.map((skill) => (
                <RosterItem skill={skill} key={skill} />
              ))}
            </ul>
          </div>
        </div>

        {/* grid-col right*/}
        <TechSkills />
      </div>
    </Container>
  );
}

export default Abilities;
