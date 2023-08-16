import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Hero from "./features/about/Hero";
import Works from "./features/projects/Projects";
import Studies from "./features/studies/Studies";
import Abilities from "./features/abilities/Abilities";

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
        element: <Works />,
      },
      {
        path: "/studies",
        element: <Studies />,
      },
      {
        path: "/abilities",
        element: <Abilities />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
