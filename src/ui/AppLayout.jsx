import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { useMouseGradient } from "../hooks/useMouseGradient";

function AppLayout() {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === "loading";
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
