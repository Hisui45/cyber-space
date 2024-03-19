import React, { useEffect, useState } from "react";
import "./App.css";
import "./styles.scss";
import briefImg from "./assets/small-step.jpg";
import Icon from "./Icon";
import nasaAstro from "./assets/nasa-astro.jpg";
import earth from "./assets/earth.jpg";
import moonGround from "./assets/moon-ground.jpg";
import moon from "./assets/moon.jpg";

import { NavbarWithMegaMenu } from "./components/NavigationBar";

function App() {
  return (
    <div className="application">
      <NavbarWithMegaMenu />
      <div class="hero px-4 2xl:px-12">
        <section className="hero-image"></section>
        <div class="house-price text-high-emphasis font-semibold font-raleway">
          <h1 className="text-6xl sm:text-7xl min-w-max mb-0 mr-6 mt-2 lg:ml-4 lg:hidden ">
            It's one
          </h1>
          <h1 className="hidden text-7xl xl:text-8xl ml-4 mt-2 min-w-max mr-6 lg:block">
            It's one small
          </h1>
        </div>
        <ul class="house-meta p-0 pb-3 text-high-emphasis font-semibold font-raleway">
          <h1 className="text-6xl sm:text-7xl lg:hidden mb-0 leading-[4rem]">
            small step for <span className="text-accent-blue">you</span>, one
            giant leap for
            <span className="text-accent-blue"> your business</span>.
          </h1>
          <h1 className="hidden lg:block text-7xl mb-0 lg:leading-[6rem] xl:text-8xl xl:leading-[8rem] lg:ml-4 ">
            step for <span className="text-accent-blue">you</span>, one giant
            leap for
            <span className="text-accent-blue"> your business</span>.
          </h1>
        </ul>
        <p className="hero-desc font-light font-nunito text-medium-emphasis z-10 pb-4 text-xl lg:text-xl xl:text-2xl 2xl:text-2xl">
          Developing websites, mobile apps, and software crafted to bring
          visions to life and unlock new horizons.
        </p>
      </div>
      <div
        className="flex gap-8 text-nowrap font-normal text-2xl font-raleway my-4 text-high-emphasis overflow-x-hidden"
        aria-hidden="true"
      >
        <p>sign.</p>
        <p>Develop.</p>
        <p>Deploy.</p>
        <p>Design.</p>
        <p>Develop.</p>
        <p>Deploy.</p>
        <p>Design.</p>
        <p>Develop.</p>
        <p>Deploy.</p>
        <p>Design.</p>
        <p>Develop.</p>
        <p>Deploy.</p>
        <p>Design.</p>
        <p>Develop.</p>
        <p>Deploy.</p>
        <p>Design.</p>
        <p>Develop.</p>
        <p>Deploy.</p>
        <p>Design.</p>
        <p>Develop.</p>
        <p>Deploy.</p>
      </div>
      <div className="p-8 lg:p-8 xl:p-10 2xl:p-12">
        <div className="flex flex-col xs:grid grid-rows-3  sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 text-xl 2xl:text-2xl font-raleway font-medium">
          

          <div className="hidden xl:block bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square self-end"></div>

          <div className="hidden xl:block bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square self-end"></div>

          <div className="difficult-block bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square self-end"></div>

          <div className="max-h-28 xs:max-h-none xl:col-start-5 xl:row-start-1 grid items-center justify-center bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square xl:self-end">
            <h3 className="text-accent-red">Startup?</h3>
          </div>

          <div className="hidden xl:block bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square self-end"></div>

          <div className="max-h-28 xs:max-h-none xl:col-start-1 xl:row-start-2 grid items-center justify-center bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square">
            <h3 className="text-accent-blue text-center">
              Small Business?
            </h3>
          </div>

          <div className="hidden xl:block bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square"></div>

          <div className="hidden xl:block bg-transparent rounded-2xl xl:max-w-56 aspect-square"></div>

          

          <div className="max-h-28 xs:max-h-none xl:col-start-4 xl:row-start-2 grid items-center justify-center bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square">
            <h3 className="text-[#FFA737]">Individual?</h3>
          </div>

          <div className="col-span-2 flex flex-col gap-2 justify-center sm:col-start-1 sm:row-start-1">
            <h2 className="text-high-emphasis text-2xl lg:text-2xl xl:text-3xl font-normal">
              Services For You
            </h2>
            <p className="text-medium-emphasis font-light  text-base 2xl:text-lg ">
              Comprehensive suite of services designed to meet your specific
              needs and propel your business forward. Our expertise spans across
              the entire development lifecycle, ensuring that we can support you
              every step of the way.
            </p>
          </div>

          
          <div className="xl:col-start-5 xl:row-start-2 grid gap-8 grid-rows-3 col-span-2 row-span-3 max-h-96">
            <div className="px-6 items-center justify-between rounded-2xl h-full flex gap-8 hover:bg-[#e03816a2]">
              <h2 className="text-high-emphasis font-normal">
                Website Development
              </h2>
              <Icon name="arrow-right-48" className="48px"></Icon>
            </div>

            <div className="items-center justify-between rounded-2xl h-full flex gap-8 px-6  hover:bg-[#be8a45e7]">
              <h2 className="text-high-emphasis font-normal">
                Software Development
              </h2>
              <Icon name="arrow-right-48" className="48px"></Icon>
            </div>

            <div className="px-6 items-center rounded-2xl flex gap-8 justify-between hover:bg-[#b5ffe1b3]">
              <h2 className="text-high-emphasis font-normal">
                Mobile Development
              </h2>
              <Icon name="arrow-right-48" className="48px"></Icon>
            </div>
          </div>

          {/* <div className="row-start-3 col-start-1 col-span-2">
          <h2 className="text-3xl font-normal text-high-emphasis text-right">
              With <span className="text-accent-red">cyber·space</span>, it's
            </h2>
            <h2 className="text-3xl font-normal text-high-emphasis">
              <span>
                one small step for you, one giant leap for your business
              </span>
            </h2>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
