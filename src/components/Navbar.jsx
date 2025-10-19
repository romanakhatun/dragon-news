import { use } from "react";
import admin from "../assets/admin.svg";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { user } = use(AuthContext);
  console.log(user);

  return (
    <div className="flex justify-between items-center">
      <div className="hidden lg:block"></div>
      <div className="text-accent flex gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-[2px] ">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={user ? user.photoURL : admin}
          alt="Logo"
        />

        <Link
          to="/auth/login"
          className="btn text-white bg-primary rounded-none py-[6px] px-10"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
