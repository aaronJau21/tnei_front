import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./presentation/Auth/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
