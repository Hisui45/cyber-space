import React, { useEffect, useState } from "react";
import "./App.css";
import "./styles.scss";
import briefImg from "./assets/small-step.jpg";
import Icon from "./Icon";
import nasaAstro from "./assets/nasa-astro.jpg";
import earth from "./assets/earth.jpg";
import star from "./assets/bitmap-stars.png";
import moon from "./assets/moon-ground.jpg";
import small from "./assets/one-small.jpg";
import {
  ArrowRightIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowDownCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserIcon,
  BuildingStorefrontIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { NavbarWithMegaMenu } from "./components/NavigationBar";

function App() {
  return (
    <div className="application">
      <div className="grid grid-cols-2 justify-items-end z-50">
        <div className="grid justify-items-end col-start-2 pr-8 py-4">
          <a className="font-racing text-medium-emphasis text-xl col-start-2 uppercase">
            cyber·space
          </a>
        </div>
      </div>
      {/* <NavbarWithMegaMenu /> */}
      <div className="hero px-12 max-w-7xl">
        <div className="fade-effect">
          <h1 className="font-racing text-[#A63D40] text-6xl  md:text-7xl lg:text-8xl uppercase">
            Where creativity <br></br> meets technology
          </h1>
        </div>
        <p className="max-w-4xl mt-4">Cyber·space is an agency that develops portfolio and marketing websites, bespoke software, and applications that embrace creativity for stunning user-experiences.</p>
        <div className="flex flex-col-reverse lg:flex-row my-8 lg:my-0 lg:justify-between gap-8">
        <p className="lg:hidden text-medium-emphasis uppercase font-thin tracking-widest self-end text-6xl sm:text-7xl lg:text-8xl ">
              Design.
            </p>
          <div className="text-high-emphasis grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-x-6 gap-y-5 lg:mt-20">
            <section className="">
              <div className="flex gap-4 items-end">
                {/* <UserIcon className="h-9 w-9 mb-2 text-accent-blue" /> */}
                <h3 className="text-xl text-high-emphasis">
                  Portfolio Websites
                </h3>
              </div>
              <p className="font-light">
                When you're an artist or creative, your brand is your business.
                And we're in the business of standing out and showing off your
                work through creative, modern, well-designed portfolio websites.
              </p>
            </section>
            <section className="">
              <div className="flex gap-4 items-end">
                {/* <BuildingStorefrontIcon className="h-9 w-9 mb-2 text-accent-blue" /> */}
                <h3 className="text-xl text-high-emphasis">
                  Marketing &amp; Business Websites
                </h3>
              </div>
              <p className="font-light">
                You do good work, so let us put in the work to establish an
                online presence and showcase your business to turn potential
                customers into customers.
              </p>
            </section>
            <section className="">
              <div className="flex gap-4 items-end">
                {/* <ComputerDesktopIcon className="h-9 w-9 mb-2 text-accent-blue" /> */}
                <h3 className="text-xl text-high-emphasis">Bespoke Software</h3>
              </div>
              <p className="font-light">
                Sometimes modern problems require modern solutions. We create
                them. If you're looking for a solution to your business problem,
                your search has ended.
              </p>
            </section>
            <section className="">
              <div className="flex gap-4 items-end">
                {/* <DevicePhoneMobileIcon className="h-9 w-9 mb-2 text-accent-blue" /> */}
                <h3 className="text-xl text-high-emphasis">
                  Mobile Applications
                </h3>
              </div>
              <p className="font-light">
                If you need solutions that work on the go and has convenient
                access. We create user-friendly solutions that fit in the palm
                of the hand.
              </p>
            </section>
            <section className="">
              <div className="flex gap-4 items-end">
                {/* <DevicePhoneMobileIcon className="h-9 w-9 mb-2 text-accent-blue" /> */}
                <h3 className="text-xl text-high-emphasis">Web Applications</h3>
              </div>
              <p className="font-light">
                We get it. Simple static websites just aren't enough sometimes.
                Super-charge the browser experience and unleash your business
                power.
              </p>
            </section>
            {/* <button className="h-14 grid self-end mb-6 sm:max-w-56 md:text-sm 2xl:text-base p-4 rounded-md bg-[#292929]">
              Schedule Free Consultation
            </button> */}
          </div>
          <div className="lg:grid lg:grid-rows-2  lg:text-right max-w-sm">
            <section>
              <h2 className="text-3xl text-[#E9B872] mb-2 font-racing uppercase drop-shadow-sm">
                What We Offer
              </h2>
              <p className="text-high-emphasis">
                You bring the problem and we'll design the solution. No matter
                the problem or idea, cyber·space is prepared to tackle any
                challenge and bring your ideas to fruition with unwavering
                quality and creativity.
              </p>
            </section>
            {/* <p className="text-medium-emphasis font-thin text-8xl uppercase tracking-widest self-end mb-8">
              Develop.
            </p> */}
            <p className="hidden lg:block text-medium-emphasis uppercase font-thin tracking-widest self-end mb-4 text-6xl sm:text-7xl lg:text-8xl ">
              Design.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 lg:mt-24">
        <div className="flex flex-col-reverse xl:flex-row-reverse justify-between max-w-7xl px-12 gap-8">
        <p className="xl:hidden text-medium-emphasis uppercase font-thin tracking-widest self-end my-4 text-6xl sm:text-7xl lg:text-8xl ">
              Develop.
            </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">
            <section>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="react-96" />
                <h4 className="text-high-emphasis text-xl">React</h4>
              </div>
              <p className="font-light">
                React is a powerful JavaScript library used to build dynamic and
                interactive user interfaces for web applications. With React, we
                build faster and more responsive web applications, ultimately
                leading to improved user experiences and increased customer
                satisfaction.
              </p>
              <div className="flex items-center gap-2 flex-wrap mt-2">
                <p>Used For: </p>
                <p className="border rounded p-1 ">Frontend</p>
                <p className="border w-min rounded p-1 ">Websites</p>
                <p className="border rounded p-1 ">Web Applications</p>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="react-96" />
                <h4 className="text-high-emphasis text-xl">React</h4>
              </div>
              <p className="font-light">
                React is a powerful JavaScript library used to build dynamic and
                interactive user interfaces for web applications. With React, we
                build faster and more responsive web applications, ultimately
                leading to improved user experiences and increased customer
                satisfaction.
              </p>
              <div className="flex items-center gap-2 flex-wrap mt-2">
                <p>Used For: </p>
                <p className="border rounded p-1 ">Frontend</p>
                <p className="border w-min rounded p-1 ">Websites</p>
                <p className="border rounded p-1 ">Web Applications</p>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="react-96" />
                <h4 className="text-high-emphasis text-xl">React</h4>
              </div>
              <p className="font-light">
                React is a powerful JavaScript library used to build dynamic and
                interactive user interfaces for web applications. With React, we
                build faster and more responsive web applications, ultimately
                leading to improved user experiences and increased customer
                satisfaction.
              </p>
              <div className="flex items-center gap-2 flex-wrap mt-2">
                <p>Used For: </p>
                <p className="border rounded p-1 ">Frontend</p>
                <p className="border w-min rounded p-1 ">Websites</p>
                <p className="border rounded p-1 ">Web Applications</p>
              </div>
            </section>
            <section>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="react-96" />
                <h4 className="text-high-emphasis text-xl">React</h4>
              </div>
              <p className="font-light">
                React is a powerful JavaScript library used to build dynamic and
                interactive user interfaces for web applications. With React, we
                build faster and more responsive web applications, ultimately
                leading to improved user experiences and increased customer
                satisfaction.
              </p>
              <div className="flex items-center gap-2 flex-wrap mt-2">
                <p>Used For: </p>
                <p className="border rounded p-1 ">Frontend</p>
                <p className="border w-min rounded p-1 ">Websites</p>
                <p className="border rounded p-1 ">Web Applications</p>
              </div>
            </section>
          </div>
          <div className="xl:grid grid-rows-2 justify-between max-w-md">
            <section className="max-w-sm">
              <h2 className="text-3xl text-[#6494AA] mb-2 font-racing uppercase drop-shadow-sm">
                What We Use
              </h2>
              <p className="text-high-emphasis">
                Behind every great website, app or software, there's the
                technology that makes it happen. Cyber·space chooses the right
                technology to get the job done right.
              </p>
            </section>
            <p className="hidden xl:block text-medium-emphasis uppercase font-thin tracking-widest self-end mb-4 text-6xl sm:text-7xl lg:text-8xl ">
              Develop.
            </p>
          </div>
        </div>
      </div>
      <div className="px-12 py-8 lg:py-16 max-w-7xl">
        <div className="flex flex-col-reverse justify-between gap-8">
        <p className="lg:hidden text-medium-emphasis uppercase font-thin tracking-widest self-end mb-4 text-6xl sm:text-7xl lg:text-8xl ">
              Deploy.
            </p>
          <div className="text-high-emphasis grid grid-cols-1 lg:grid-cols-3 gap-8">
            <section className="md:max-w-2xl lg:max-w-sm">
            <h3 className="text-xl text-high-emphasis">
                  Template Website
              </h3>
              <p className="font-light">We'll provide your website using a pre-made design, customized for your business. This is great for businesses looking for a fast and cost-effective way to establish their online presence without compromising on quality or customization.</p>
            </section>
            <section className="md:max-w-2xl lg:max-w-sm">
            <h3 className="text-xl text-high-emphasis">
                  Custom Website
              </h3>
              <p className="font-light">We'll design and develop your website from scratch, tailoring every aspect to your unique specifications and brand identity. This is ideal for businesses seeking a fully customized online presence that stands out from the competition and perfectly reflects their vision and goals. </p>
            </section>
            <section className="md:max-w-2xl lg:max-w-sm">
            <h3 className="text-xl text-high-emphasis">
                  Hosting Options
              </h3>
              <p className="font-light">We'll figure out reliable and secure hosting options for your website, so you can focus on your goals without worrying about technical complexities.</p>
            </section>
            <section className="md:max-w-2xl lg:max-w-sm">
            <h3 className="text-xl text-high-emphasis">
                  App Store Launch
              </h3>
              <p className="font-light">We'll handle mobile app deployment onto app stores, ensuring a seamless process from development to launch. With our expertise, your app will navigate the complex submission and approval process smoothly, reaching your target audience on leading app stores hassle-free.</p>
            </section>
          </div>
          <div className="flex lg:flex-row-reverse justify-between">
          <p className="hidden lg:block text-medium-emphasis uppercase font-thin tracking-widest self-end mb-4 text-6xl sm:text-7xl lg:text-8xl ">
              Deploy.
            </p>
            <section className="max-w-sm">
              <h2 className="text-3xl text-[#90A959] mb-2 font-racing uppercase drop-shadow-sm">
                What We'll Do
              </h2>
              <p className="text-high-emphasis">
                We've got solutions of all shapes, sizes, and prices to meet your needs and budget.
              </p>
            </section>
            
          </div>
        </div>
      </div>
      <div className="px-12 max-w-6xl">
      <section className="max-w-sm mb-4">
              <h2 className="text-3xl text-[#E9B872] mb-2 font-racing uppercase drop-shadow-sm">
                What Will Happen?
              </h2>
              <p className="text-high-emphasis">
                We understand this can be a bit daunting. So you can know what to expect, here's an overview of the process from start to finish.
              </p>
            </section>
        <div className="flex flex-col lg:flex-row gap-4 text-medium-emphasis">
          <div className="flex flex-col md:flex-row gap-4">
            <section className="flex items-center flex-col gap-2 lg:max-w-80 md:mx-4 md:basis-1/2">
              <div className="my-1 rounded-3xl md:h-full">
                <h3 className="text-xl mb-2"><span className="font-racing uppercase text-[#A63D40]">Step One: </span> <br></br>Discovery.</h3>
                <p className="m-0">
                  During the consultation, we'll uncover your goals, challenges,
                  and vision for success through detailed discussions and
                  analysis.
                </p>
              </div>
            </section>

            <section className="flex items-center flex-col gap-2 lg:max-w-80 md:mx-4 md:basis-1/2">
            <div className="my-1 rounded-3xl md:h-full">
                <h3 className="text-xl mb-2"><span className="font-racing uppercase text-[#A63D40]">Step Two: </span> <br></br>Design.</h3>
                <p className="m-0">
                  It's time to design the blueprint. We meticulously craft every
                  detail, ensuring your vision translates into captivating
                  visuals and intuitive user experiences.
                </p>
              </div>
            </section>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <section className="flex items-center flex-col gap-2 lg:max-w-80 md:mx-4 md:basis-1/2">
            <div className="my-1 rounded-3xl md:h-full">
                <h3 className="text-xl mb-2"><span className="font-racing uppercase text-[#A63D40]">Step Three: </span> <br></br>Develop.</h3>
                <p className="m-0">
                  With approved blueprints in hand, our developers bring your
                  vision to life, creating functional software, mobile apps, or
                  websites that exceed expectations.
                </p>
              </div>
            </section>
            <section className="flex items-center flex-col gap-2 lg:max-w-80 md:mx-4 md:basis-1/2">
            <div className="my-1 rounded-3xl md:h-full">
                <h3 className="text-xl mb-2"><span className="font-racing uppercase text-[#A63D40]">Step Four: </span> <br></br>Deploy.</h3>
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
      <div className="px-12 py-8 max-w-7xl">
        <div className="w-full flex flex-col items-center gap-8">
          <p className="text-high-emphasis text-lg font-light">
            Got a project in mind?
          </p>
          <h4 className="uppercase font-extralight text-medium-emphasis text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            We'll make it happen
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
