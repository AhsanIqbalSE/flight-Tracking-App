import { Outlet } from "react-router-dom";
import Home from "../pages/Home";

const SecureRoute = (props) => {
  if (props.searches.searches.length > 0) {
    return <Outlet />;
  } else {
    return <Home />;
  }
};

export default SecureRoute;
