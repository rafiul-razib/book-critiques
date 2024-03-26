import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="max-w[82%]">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
