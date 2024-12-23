import { SiGithub, SiGitlab, SiNetlify, SiVercel } from "react-icons/si";

function IconLink({ icon, href, label }) {
  return (
    <span>
      <a
        href={href}
        aria-label={label}
        rel="noopener noreferrer"
        target="_blank"
      >
        {icon === "SiGithub" && <SiGithub />}
        {icon === "SiGitlab" && <SiGitlab />}
        {icon === "SiNetlify" && <SiNetlify />}
        {icon === "SiVercel" && <SiVercel />}
      </a>
    </span>
  );
}

export default IconLink;
