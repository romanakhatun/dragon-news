import admin from "../assets/admin.svg";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="hidden lg:block"></div>
      <div className="text-accent flex gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-[2px] ">
        <img src={admin} alt="" />
        <button className="btn text-white bg-primary rounded-none py-[6px] px-10">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
