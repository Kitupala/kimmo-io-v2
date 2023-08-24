import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { useMouseGradient } from "../hooks/useMouseGradient";

function AppLayout() {
  const gradientRef = useMouseGradient();

  return (
    <div ref={gradientRef} className="bg-mouse-gradient">
      <Header />
      <main className="bg-page-gradient pt-navigation-height">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
