import Clients from "./presentation/pages/Clients/Clients";
import ServicesDB from "./presentation/pages/ServicesDB/ServicesDB";
import Home from "./presentation/pages/Home/Home";

interface IRoutesItems {
  element: JSX.Element;
  path: string;
  title?: string;
  className?: string;
}

export const routesItems: IRoutesItems[] = [
  {
    element: <Home />,
    path: "home",
    title: "ALL USERS",
    className: "bg-blue-500 py-3",
  },
  {
    element: <Clients />,
    path: "new-user",
    title: "New User",
    className: "bg-sky-500 py-3",
  },
  {
    element: <ServicesDB />,
    path: "services",
    title: "Services DB",
    className: "bg-green-500 p-3",
  },
];
