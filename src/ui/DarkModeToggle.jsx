import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { LuLightbulb, LuLightbulbOff } from "react-icons/lu";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="text-md"
      aria-label="Light/Dark mode toggle"
      onClick={toggleDarkMode}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {isDarkMode ? (
        <span>{isHovered ? <LuLightbulb /> : <LuLightbulbOff />}</span>
      ) : (
        <span>{isHovered ? <LuLightbulbOff /> : <LuLightbulb />}</span>
      )}
    </button>
  );
}

export default DarkModeToggle;
