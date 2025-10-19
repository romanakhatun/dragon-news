import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="max-w-11/12 mx-auto px-5 my-7">
          <LatestNews />
        </section>
        <section className="max-w-11/12 mx-auto px-5 my-7">
          <Navbar />
        </section>
      </header>
      <main className="max-w-11/12 mx-auto px-5 my-10 grid grid-cols-12 *:border">
        <aside className="col-span-3">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
