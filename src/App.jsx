import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Hero from "./features/about/Hero";
import Projects from "./features/projects/Projects";
import Studies from "./features/studies/Studies";
import Abilities from "./features/abilities/Abilities";
import Contact from "./features/contact/Contact";
import { DarkModeProvider } from "./context/DarkModeContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/studies",
        element: <Studies />,
      },
      {
        path: "/abilities",
        element: <Abilities />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}

export default App;
