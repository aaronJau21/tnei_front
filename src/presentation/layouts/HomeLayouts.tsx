import { Outlet } from "react-router-dom";
import SideBar from "../shared/components/SideBar";

const HomeLayouts = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-1 p-5 h-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayouts;
