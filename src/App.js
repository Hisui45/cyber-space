import React, { useEffect, useState } from "react";
import "./App.css";
import "./styles.scss";
import briefImg from "./assets/small-step.jpg";
import Icon from "./Icon";
import nasaAstro from "./assets/nasa-astro.jpg";
import earth from "./assets/earth.jpg";
import moonGround from "./assets/moon-ground.jpg";
import moon from "./assets/moon.jpg";
import {
  ArrowRightIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { NavbarWithMegaMenu } from "./components/NavigationBar";

function App() {
  return (
    <div className="application">
      <NavbarWithMegaMenu />
      <div class="hero px-4 2xl:px-8 text-6xl sm:text-7xl 2xl:text-8xl">
        <section className="hero-image "></section>
        <div class="house-price text-high-emphasis font-semibold ">
          <h1 className="min-w-max mb-0 mr-6 mt-2 lg:ml-4 lg:hidden ">
            It's one
          </h1>
          <h1 className="hidden ml-4 mt-2 min-w-max mr-6 lg:block">
            It's one small
          </h1>
        </div>
        <ul class="house-meta p-0 pb-3 text-high-emphasis font-semibold ">
          <h1 className="lg:hidden mb-0 leading-[4rem] sm:leading-[5rem]">
            small step for <span className="text-accent-blue">you</span>, one
            giant leap for
            <span className="text-accent-blue"> your business</span>.
          </h1>
          <h1 className="hidden lg:block mb-0 lg:leading-[6rem] 2xl:leading-[6.5rem] lg:ml-4 ">
            step for <span className="text-accent-blue">you</span>, one giant
            leap for
            <span className="text-accent-blue"> your business</span>.
          </h1>
        </ul>
        <ArrowDownCircleIcon
          className="hidden md:block h-16 w-16 col-start-2 row-start-3 justify-self-end self-end mb-4 text-high-emphasis animate-bounce"
          strokeWidth={0.5}
        />
        <p className="hero-desc font-light  text-medium-emphasis z-10 pb-4 text-xl lg:text-xl xl:text-2xl 2xl:text-2xl lg:ml-4">
          Developing websites, mobile apps, and software crafted to bring
          visions to life and unlock new horizons.
        </p>
      </div>
      <div
        className="flex gap-8 text-nowrap font-normal text-2xl  my-4 text-high-emphasis overflow-x-hidden"
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
      <div className="p-4 sm:p-8 xl:p-10 2xl:p-12">
        <div className="flex flex-col gap-4 text-xl 2xl:text-2xl font-medium xs:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          <div className="hidden lg:block bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square self-end drop-shadow-md"></div>

          <div className="hidden xl:block bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square self-end drop-shadow-md"></div>

          <div className="difficult-block bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square self-end drop-shadow-md"></div>

          <div className="max-h-28 xs:max-h-none xl:col-start-5 xl:row-start-1 grid items-center justify-center bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square xl:self-end drop-shadow-md">
            <h3 className="text-accent-red">Startup?</h3>
          </div>

          <div className="hidden lg:block bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square self-end drop-shadow-md"></div>

          <div className="max-h-28 xs:max-h-none xl:col-start-1 xl:row-start-2 grid items-center justify-center bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square drop-shadow-md">
            <h3 className="text-accent-blue text-center">Small Business?</h3>
          </div>

          <div className="hidden lg:block bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square drop-shadow-md"></div>

          <div className="hidden xl:block bg-transparent rounded-2xl xl:max-w-56 aspect-square"></div>

          <div className="max-h-28 xs:max-h-none xl:col-start-4 xl:row-start-2 grid items-center justify-center bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl xl:max-w-56 aspect-square drop-shadow-md">
            <h3 className="text-accent-orange">Individual?</h3>
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

          <div className="flex flex-col gap-4 xs:col-span-2">
            <div className="sm:px-6 min-h-20 xl:min-h-28 items-center justify-between rounded-2xl h-full flex gap-8 md:hover:bg-[#292929] md:hover:bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] text-high-emphasis md:hover:text-accent-red hover:drop-shadow-sm">
              <h2 className="font-normal">Website Development</h2>
              <ArrowRightCircleIcon className="h-8 w-8 text-accent-blue" />
            </div>

            <div className="items-center justify-between rounded-2xl h-full flex gap-8 sm:px-6 min-h-20 xl:min-h-28 md:hover:bg-[#292929] md:hover:bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] text-high-emphasis md:hover:text-accent-blue hover:drop-shadow-sm">
              <h2 className="font-normal ">Software Development</h2>
              <ArrowRightCircleIcon className="h-8 w-8 text-accent-blue" />
            </div>

            <div className="sm:px-6 min-h-20 xl:min-h-28 items-center rounded-2xl flex gap-8 justify-between md:hover:bg-[#292929] md:hover:bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] text-high-emphasis md:hover:text-accent-orange hover:drop-shadow-sm">
              <h2 className=" font-normal ">Mobile Development</h2>
              <ArrowRightCircleIcon className="h-8 w-8 text-accent-blue" />
            </div>
          </div>

          <p className="text-medium-emphasis uppercase font-thin tracking-widest text-6xl sm:text-7xl lg:text-8xl xl:text-9xl md:self-center xl:self-end sm:row-start-4 xl:row-start-2 xl:col-start-1">
            Develop.
          </p>

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
      <div className="call-to-action sm:px-8 lg:px-12 py-4">
        <div className="flex flex-col gap-8 lg:flex-row-reverse lg:justify-between text-high-emphasis p-4 sm:p-8 shadow-2xl">
          <div className="grid grid-rows-3 gap-16 text-3xl font-light w-full basis-1/2">
            <p
              class="word before:bg-accent-red justify-self-end self-end before:-translate-y-7 before:translate-x-10
              md:before:translate-x-9
              md:before:-translate-y-9
              xl:before:-translate-y-14 xl:before:translate-x-7 
              animate-[float_6s_alternate_infinite]"
            >
              Design.
            </p>
            {/* max-w-56  sm:max-w-72 md:max-w-sm lg:basis-1/3 xl:basis-1/2 lg:max-w-72 xl:max-w-80 2xl:max-w-sm self-center md:self-end */}
            <p
              class="word justify-self-start before:bg-accent-blue before:-translate-y-7 before:translate-x-10
              md:before:translate-x-9
              md:before:-translate-y-9 
              xl:before:-translate-y-14 xl:before:translate-x-10 
              animate-[float-reverse_4s_alternate_infinite]"
            >
              Develop.
            </p>

            <p
              class="word before:bg-accent-orange justify-self-center before:-translate-y-7 before:translate-x-10
              md:before:translate-x-9
              md:before:-translate-y-9
              xl:before:-translate-y-14 xl:before:translate-x-7
              animate-[float_5s_alternate_infinite]"
            >
              Deploy.
            </p>
          </div>
          <section className="basis-1/2">
            <p className="text-xs uppercase tracking-wider text-accent-blue mb-4 font-medium xl:text-sm 2xl:text-base">
              Get Started
            </p>
            <h2 className="text-3xl font-medium md:max-w-xl lg:max-w-2xl xl:text-4xl 2xl:text-5xl mb-4 leading-8">
              We've got an idea floating about how we can help your
              business.
            </h2>
            <p className="text-medium-emphasis mb-4 md:max-w-xl xl:text-base 2xl:text-lg ">
              Get in touch today to schedule a consultation and discover which
              services can help you achieve your business goals.
            </p>
            <button className="w-full sm:max-w-56 lg text-sm xl:text-sm 2xl:text-base p-4 rounded-md bg-[#292929]">
              Schedule Consultation
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
