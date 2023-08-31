import { HiCheck } from "react-icons/hi";

function RosterItem({ skill }) {
  return (
    <li className="group flex cursor-default items-center gap-0.5 text-sm font-light leading-3 text-grey">
      <span className="inline-block text-grey group-hover:text-primary-text">
        <HiCheck />
      </span>
      <span className="group-hover:text-primary-text">{skill}</span>
    </li>
  );
}

export default RosterItem;
