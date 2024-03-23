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
import {
  ArrowDownCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
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
      <div className="p-4 sm:p-8 xl:p-10 2xl:p-12 shadow-2xl">
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
      {/* shadow-2xl */}
      <div className="call-to-action lg:px-12 py-12">
        <div className="flex flex-col gap-8 lg:flex-row-reverse lg:justify-between text-high-emphasis p-4 sm:p-8 ">
          <div className="grid grid-rows-3 gap-16 text-3xl font-light w-full basis-1/2 max-w-xs md:max-w-sm lg:max-w-none mx-auto">
            <p
              class="word before:bg-accent-red justify-self-end self-end before:-translate-y-9 before:translate-x-9
              xl:before:-translate-y-14 xl:before:translate-x-7 
              animate-[float_12s_alternate_infinite]"
            >
              Design.
            </p>
            <p
              class="word justify-self-start before:bg-accent-blue before:-translate-y-9 before:translate-x-9
              xl:before:-translate-y-14 xl:before:translate-x-10 
              animate-[float-reverse_10s_alternate_infinite]"
            >
              Develop.
            </p>

            <p
              class="word before:bg-accent-orange justify-self-center before:-translate-y-9 before:translate-x-9
              xl:before:-translate-y-14 xl:before:translate-x-7
              animate-[float_13s_alternate_infinite]"
            >
              Deploy.
            </p>
          </div>
          <section className="basis-1/2 mx-auto">
            <p className="text-xs uppercase tracking-wider text-accent-blue mb-4 font-medium md:text-sm 2xl:text-base">
              Get Started
            </p>
            <h2 className="text-3xl font-medium md:max-w-2xl md:text-4xl 2xl:text-5xl mb-4 leading-8">
              We've got an idea floating about how we can help your business.
            </h2>
            <p className="text-medium-emphasis mb-4 md:max-w-2xl md:text-base 2xl:text-lg ">
              Get in touch today to schedule a consultation and discover which
              services can help you achieve your business goals.
            </p>
            <button className="w-full sm:max-w-56 md:text-sm 2xl:text-base p-4 rounded-md bg-[#292929]">
              Schedule Consultation
            </button>
          </section>
        </div>
      </div>
      <div className="p-4 sm:p-8 xl:p-10 2xl:p-12 design">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mt-8 lg:items-center mb-4">
          <p className="text-medium-emphasis uppercase font-thin tracking-widest text-6xl sm:text-7xl lg:text-8xl xl:text-9xl xl:col-start-1">
            Design.
          </p>
          <div className="lg:text-right">
            <h2 className="text-high-emphasis text-4xl self-center mb-4">
              You bring the <span className="text-accent-red">problem</span> and
              we'll design the{" "}
              <span className="text-accent-blue">solution</span>.
            </h2>
            <p className="text-medium-emphasis">
              No matter the problem you face or idea in your mind, cyber·space
              is prepared to tackle any challenge you face and bring your ideas
              to fruition with unwavering quality and expertise.
            </p>
          </div>
        </div>
        <div className="grid gap-4 2xl:mt-8 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 text-high-emphasis sm:text-lg md:text-xl 2xl:text-2xl">
          <div className="grid items-center justify-items-center bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-sm aspect-square">
            <h3>Portfolio</h3>
          </div>
          <div className="grid items-center justify-items-center bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-sm aspect-square">
            <h3>E-Commerce</h3>
          </div>
          <div className="grid items-center justify-items-center bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-sm aspect-square">
            <h3>Marketing/Business</h3>
          </div>
          <div className="grid items-center justify-items-center bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-sm aspect-square">
            <h3>Bespoke Software</h3>
          </div>
          <div className="grid items-center justify-items-center bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-sm aspect-square">
            <h3>Web Application</h3>
          </div>
          <div className="grid items-center justify-items-center bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-sm aspect-square">
            <h3>Custom Solutions</h3>
          </div>
          <img
            src={earth}
            className="col-span-2 max-h-56 md:col-span-3 object-cover xl:row-span-2 xl:row-start-1 xl:col-start-1 xl:max-h-none xl:col-span-1 h-full w-full rounded-sm"
          />
        </div>
      </div>
      <div className="p-4 sm:p-8 xl:p-10 2xl:p-12 shadow-2xl">
        <h2 className="text-4xl text-high-emphasis max-w-xl mb-8 lg:mb-12 xl:mb-16">
          Light-years ahead of the
          <span className="text-accent-blue "> competition</span>.
        </h2>
        <div className="grid grid-rows-4 text-high-emphasis xl:gap-6 max-w-6xl xl:max-w-6xl mx-auto">
          <section className="mb-4 flex items-center gap-3 bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl drop-shadow-md p-6 xl:w-1/2 lg:translate-x-12 lg:flex-row-reverse max-w-2xl">
            <Icon name="staff-48" className="w-9" />
            <div>
              <h3 className="text-xl mb-1">
                Tailored Solutions for Every Business Size
              </h3>
              <p className="text-medium-emphasis font-light md:font-normal text-base">
                Whether you're a startup, small business, or individual,
                cyber·space provides customized solutions to suit your unique
                needs and budget. We understand the challenges you face and are
                dedicated to helping you succeed.
              </p>
            </div>
          </section>

          <section className="row-start-2 mb-4 flex items-center gap-4 bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl drop-shadow-md p-6 xl:w-1/2 md:justify-self-end lg:-translate-x-8 max-w-2xl">
            <Icon name="tags-48" className="w-9" />
            <div>
              <h3 className="text-xl mb-1">Quality Service at a Value Price</h3>
              <p className="text-medium-emphasis font-light md:font-normal text-base">
                Exceptional quality shouldn't come with a hefty price tag. Our
                team is committed to delivering top-notch services at
                competitive rates, ensuring that you receive maximum value for
                your investment without compromising on quality.
              </p>
            </div>
          </section>

          <section className="mb-4 flex items-center gap-3 bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl drop-shadow-md p-6 xl:w-1/2 xl:translate-x-12 xl:flex-row-reverse max-w-2xl">
            <Icon name="thumb-up-48" className="w-9" />
            <div>
              <h3 className="text-xl mb-1">
                Customer Satisfaction is the Priority
              </h3>
              <p className="text-medium-emphasis font-light md:font-normal text-base">
                Your satisfaction is our top priority. We strive to exceed your
                expectations and provide you with a positive, seamless
                experience from start to finish. Your success is our success.
              </p>
            </div>
          </section>

          <section className="mb-4 flex items-center gap-4 bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl drop-shadow-md p-6 xl:w-1/2 md:justify-self-end xl:-translate-x-8 max-w-2xl">
            <Icon name="smart-48" className="w-9" />
            <div>
              <h3 className="text-xl mb-1">
                An Innovative and Fresh Perspective
              </h3>
              <p className="text-medium-emphasis font-light md:font-normal text-base">
                Every project is injected with a fresh perspective and
                innovative approach. Blending creativity with cutting-edge
                technology, ensures your brand stands out amidst the noise,
                setting you apart from competitors. Embrace the future, where
                inventive thinking meets impactful results.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="p-4 sm:p-8 xl:p-10 2xl:p-12">
        <h2 className="text-4xl sm:text-right ml-auto  text-high-emphasis max-w-xl mb-8 md:mb-12">
          Technologies used to bring your{" "}
          <span className="text-accent-blue">vision</span> to fruition
        </h2>
        <div className="grid grid-cols-4 grid-rows-2 lg:grid-cols-8 lg:grid-rows-1 gap-2 opacity-80 justify-around px-4 text-high-emphasis">
          <div className="grid items-center justify-items-center bg-primary-elevation-1 hover:bg-transparent bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl w-full h-full aspect-square group ">
            <Icon name="react-96" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="grid items-center bg-primary-elevation-1 hover:bg-transparent bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl w-full h-full">
            <Icon
              name="mongodb-96"
              className="w-12 h-12 md:w-16 md:h-16 mx-auto self-center"
            />
          </div>
          <div className="grid items-center bg-primary-elevation-1 hover:bg-transparent bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl w-full h-full">
            <Icon
              name="nodejs-96"
              className="w-12 h-12 md:w-16 md:h-16 mx-auto self-center"
            />
          </div>

          <div className="grid items-center bg-primary-elevation-1 hover:bg-transparent bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl w-full h-full">
            <Icon
              name="java-96"
              className="w-12 h-12 md:w-16 md:h-16 mx-auto self-center"
            />
          </div>
          <div className="grid items-center bg-primary-elevation-1 hover:bg-transparent bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl w-full h-full">
            <Icon
              name="javascript-96"
              className="w-12 h-12 md:w-16 md:h-16 mx-auto self-center"
            />
          </div>
          <div className="grid items-center bg-primary-elevation-1 hover:bg-transparent bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl w-full h-full">
            <Icon
              name="kotlin-96"
              className="w-12 h-12 md:w-16 md:h-16 mx-auto self-center"
            />
          </div>
          <div className="grid items-center bg-primary-elevation-1 hover:bg-transparent bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl w-full h-full">
            <Icon
              name="android-96"
              className="w-12 h-12 md:w-16 md:h-16 mx-auto self-center"
            />
          </div>
          <div className="grid items-center bg-primary-elevation-1 hover:bg-transparent bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl w-full h-full ">
            <Icon
              name="flutter-96"
              className="w-12 h-12 md:w-16 md:h-16 mx-auto self-center"
            />
          </div>
        </div>
      </div>
      <div
        className="flex gap-8 text-nowrap font-normal text-2xl text-high-emphasis overflow-x-hidden"
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
      <div className="p-4 sm:p-8 xl:p-10 2xl:p-12 lg:max-w-6xl lg:mx-auto">
        <p className="text-xs uppercase tracking-wider text-accent-blue mb-1 font-medium md:text-sm lg:text-base">
          The Process
        </p>
        <h2 className="text-3xl text-high-emphasis sm:max-w-96 md:text-4xl lg:text-5xl lg:max-w-xl">
          From Ground-Level to the Moon
        </h2>
        <p className="text-medium-emphasis sm:max-w-96 lg:max-w-xl lg:mb-6 md:text-lg">
          From Ground-Level to the Moon, we'll be with you every step of the
          way, transforming your ideas into stellar realities.
        </p>
        <div className="lg:flex text-medium-emphasis">
          <div className="md:flex">
            <section className="flex items-center flex-col gap-2 my-3 py-4 bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl drop-shadow-md lg:max-w-80 md:mx-4 md:basis-1/2">
              <Icon name="level-1-48" className="w-9" />
              <div className="my-1 p-4 rounded-3xl md:h-full">
                <h3 className="text-lg text-accent-blue">Discovery.</h3>
                <p className="m-0">
                  During the consultation, we'll uncover your goals, challenges,
                  and vision for success through detailed discussions and
                  analysis.
                </p>
              </div>
            </section>

            <section className="flex items-center flex-col gap-2 my-3 py-4 bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl drop-shadow-md lg:max-w-80 md:mx-4 md:basis-1/2">
              <Icon name="level-2-48" className="w-9" />
              <div className="my-1 p-4 rounded-3xl md:h-full">
                <h3 className="text-lg text-accent-blue">Design.</h3>
                <p className="m-0">
                  It's time to design the blueprint. We meticulously craft every
                  detail, ensuring your vision translates into captivating
                  visuals and intuitive user experiences.
                </p>
              </div>
            </section>
          </div>

          <div className="md:flex">
            <section className="flex items-center flex-col gap-2 my-3 py-4 bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl drop-shadow-md lg:max-w-80 md:mx-4 md:basis-1/2">
              <Icon name="level-3-48" className="w-9" />
              <div className="my-1 p-4 rounded-3xl md:h-full">
                <h3 className="text-lg text-accent-blue">Develop.</h3>
                <p className="m-0">
                  With approved blueprints in hand, our developers bring your
                  vision to life, creating functional software, mobile apps, or
                  websites that exceed expectations.
                </p>
              </div>
            </section>

            <section className="flex items-center flex-col gap-2 my-3 py-4 bg-primary-elevation-1 bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-2xl drop-shadow-md lg:max-w-80 md:mx-4 md:basis-1/2">
              <Icon name="level-4-48" className="w-9" />
              <div className="my-1 p-4 rounded-3xl md:h-full">
                <h3 className="text-lg text-accent-blue">Deploy.</h3>
                <p className="m-0">
                  Once development is complete, we seamlessly deploy, ensuring
                  it's ready to shine, bringing your vision to the world with
                  confidence.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-8 xl:p-10 2xl:p-12">
        <div className="w-full flex flex-col gap-8 items-center justify-items-center">
          <p className="text-high-emphasis text-lg font-light">
            Got a project in mind?
          </p>
          <h4 className="uppercase font-extralight text-medium-emphasis text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            Start the Journey
          </h4>
          <div className="flex gap-8">
            <div className="hover:bg-[#292929] bg-transparent bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-full p-4">
              <PhoneIcon className="h-10 w-10 text-high-emphasis " />
            </div>
            <div className="hover:bg-[#292929] bg-transparent bg-[url('./assets/noise-03.png')] bg-repeat bg-[length:182px_182px] rounded-full p-4">
              <EnvelopeIcon className="h-10 w-10 text-high-emphasis" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid-rows-2 bg-[#121212]  text-medium-emphasis">
          <hr></hr>
          <div className="flex gap-5 p-8 ">
            <div className="min-w-64 sm:min-w-72 md:min-w-96">
              <a className="text-3xl text-high-emphasis">cyber·space</a>
              <ul className="p-0 mt-4">
                <li>
                  <a href="mailto:cyspacedigital@gmail.com">
                    cyspacedigital@gmail.com
                  </a>
                </li>
                <li>
                  <a>123-344-1245</a>
                </li>
              </ul>
            </div>
            <nav className="flex flex-col">
              <p className="m-0 text-high-emphasis">Quick Links</p>
              <a>Services</a>
              <a>About</a>
              <a>Contact</a>
            </nav>
          </div>
          <p className="text-center m-0 py-4">
            © 2024 cyber·space. All Rights Reserved.
          </p>
        </div>
      
    </div>
  );
}

export default App;
