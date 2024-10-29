import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./presentation/pages/Auth/Login";
import HomeLayouts from "./presentation/layouts/HomeLayouts";
import { routesItems } from "./ItemsRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<HomeLayouts />} path="dashboard">
          {routesItems.map((item) => (
            <Route key={item.path} element={item.element} path={item.path} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
