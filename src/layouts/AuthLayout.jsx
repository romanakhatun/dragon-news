import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header>
        <section className="max-w-11/12 mx-auto px-5 py-7">
          <Navbar />
        </section>
      </header>
      <main className="max-w-11/12 mx-auto px-5 py-10">
        <section className="main">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AuthLayout;
