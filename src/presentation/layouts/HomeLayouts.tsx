import { Outlet } from "react-router-dom";
import SideBar from "../shared/components/SideBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const HomeLayouts = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-1 p-5 h-full overflow-y-auto">
        <Outlet />
        <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
      </main>
    </div>
  );
};

export default HomeLayouts;
