import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { useMouseGradient } from "../hooks/useMouseGradient";
import { useDarkMode } from "../context/DarkModeContext";
import classNames from "classnames";

function AppLayout() {
  const gradientRef = useMouseGradient();
  const { isDarkMode } = useDarkMode();

  return (
    <div
      ref={gradientRef}
      className={classNames(
        "bg-mouse-gradient transition-default-transition",
        !isDarkMode && "bg-theme-light animate-bg-fade bg-sky-400",
      )}
    >
      {/* <div className="relative relative bg-slate-100 bg-slate-100 before:absolute before:left-[10%] before:top-[10%] before:-z-10 before:h-[450px] before:w-[450px] before:origin-[60%] before:animate-blob before:rounded-full before:bg-gradient-to-br before:from-[#2c3086] before:via-[#2400ff] before:to-[#0087ff] before:mix-blend-color-burn before:blur-[20px] before:brightness-125 after:absolute after:left-[60%] after:top-[30%] after:-z-10 after:h-[550px] after:w-[550px] after:origin-[60%] after:animate-blob-reverse after:rounded-full after:bg-gradient-to-br after:from-[#3b00ff] after:to-[#2c3086] after:mix-blend-color-burn after:blur-[25px] after:brightness-125"></div> */}

      <Header />
      <main className="bg-page-gradient pt-navigation-height">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
