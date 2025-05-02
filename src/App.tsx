import React from "react";
import { RouterProvider } from "react-router-dom";
import mainRoutes from "./routes/mainRoutes";

const App: React.FC = () => {
  return <RouterProvider router={mainRoutes} />;
};

export default App;
