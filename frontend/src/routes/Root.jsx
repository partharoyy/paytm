import { Outlet, useLocation } from "react-router-dom";
import Appbar from "../components/Appbar";
import LandingPage from "../pages/LandingPage";

const Root = () => {
  const location = useLocation();
  return (
    <div>
      <Appbar />
      {location.pathname === "/" && <LandingPage />}
      <Outlet />
    </div>
  );
};

export default Root;
