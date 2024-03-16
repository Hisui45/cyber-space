import React, { useEffect, useState } from "react";
import "./App.css";
import "./styles.scss";
import briefImg from "./assets/small-step.jpg";
import Icon from "./Icon";
import nasaAstro from "./assets/nasa-astro.jpg";
import earth from "./assets/earth.jpg";
import { NavbarWithMegaMenu } from "./components/NavigationBar";

function App() {
  return (
    <div className="application">
      <NavbarWithMegaMenu />
      <div class="hero px-4">
        <section className="hero-image"></section>
        <div class="house-price text-high-emphasis font-semibold">
        {/* <h1 className="text-6xl sm:hidden min-w-max font-semibold mr-2 mt-2">
            It's one
          </h1> */}
          <h1 className="text-6xl sm:text-7xl min-w-max mb-0 mr-4 mt-2 lg:ml-4 lg:hidden">
            It's one
          </h1>
          <h1 className="hidden text-7xl xl:text-8xl ml-4 min-w-max mr-4 lg:block">
            It's one small
          </h1>
        </div>
        <ul class="house-meta p-0 pb-3 text-high-emphasis font-semibold">
        <h1 className="text-6xl sm:text-7xl lg:hidden mb-0 leading-[4rem]">
            small step for <span className="text-accent-blue">you</span>, one
            giant leap for
            <span className="text-accent-blue"> your business</span>.
          </h1>
          <h1 className="hidden lg:block text-7xl mb-0 lg:leading-[6rem] xl:text-8xl xl:leading-[8rem] lg:ml-4">
            step for <span className="text-accent-blue">you</span>, one giant
            leap for
            <span className="text-accent-blue"> your business</span>.
          </h1>
          
        </ul>
        <p
          className="hero-desc font-light text-medium-emphasis z-10 pb-4 text-xl lg:text-xl xl:text-2xl"
        >
          Developing websites, mobile apps, and software crafted to bring
          visions to life and unlock new horizons.
        </p>
      </div>
    </div>
  );
}

export default App;
