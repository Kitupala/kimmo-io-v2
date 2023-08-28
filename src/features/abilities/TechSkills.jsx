import { useData } from "../../context/DataContext";
import SkillBar from "./SkillBar";

function TechSkills() {
  const { abilities } = useData();

  return (
    <div className="animate-fade-translate-in rounded-md border border-transparent-white-primary bg-background/20 p-4 opacity-0 [--animation-delay:200ms] md:mt-24 md:animate-slide-in-right md:p-8">
      <h3
        className="-mt-4 mb-6 text-xl text-primary-text sm:text-2xl 
  "
      >
        <span className="text-xxs uppercase tracking-widest text-grey">
          Hard
        </span>
        <br />
        Technical skills
      </h3>
      <ul className="">
        {abilities.at(0).tech.map((skill, i) => (
          <SkillBar
            title={skill.title}
            grade={skill.grade}
            index={i}
            key={skill.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default TechSkills;
