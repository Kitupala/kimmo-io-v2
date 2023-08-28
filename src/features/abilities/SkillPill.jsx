function SkillPill({ value }) {
  return (
    <span className="ml-1 flex items-center rounded-md bg-page-gradient px-3 py-[6px] text-xs font-medium leading-5 text-primary-text group-hover:text-off-white">
      {value}
    </span>
  );
}

export default SkillPill;
