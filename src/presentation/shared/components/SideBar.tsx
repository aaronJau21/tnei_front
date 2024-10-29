import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { routesItems } from "../../../ItemsRoutes";

const SideBar = () => {
  return (
    <div className="w-72 flex flex-col items-center p-3 border-r border-white">
      <Typography variant="h5" component="h5">
        JAM Startup
      </Typography>

      <nav className="flex flex-col items-center pt-5">
        {routesItems.map((item) =>
          item.title ? (
            <Link
              key={item.path}
              to={item.path}
              className={`${item.className} w-52 text-center items-center rounded font-bold mb-5`}
            >
              {item.title}
            </Link>
          ) : null
        )}
      </nav>
    </div>
  );
};

export default SideBar;
