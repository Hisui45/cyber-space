import React, { useEffect, useState } from "react";
import "./App.css";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import briefImg from "./assets/small-step.jpg";
import Icon from "./Icon";
import nasaAstro from "./assets/nasa-astro.jpg";
import earth from "./assets/earth.jpg";

function App() {
  function toggleMenu() {
    var x = document.getElementById("top-nav");
    if (x.className === "hero-nav") {
      x.className += " responsive";
    } else {
      x.className = "hero-nav";
    }
  }

  return (
    <div className="home-page">
      <div className="content">
        <div class="hero px-3 pt-8">
          <nav class="hero-nav mb-3" id="top-nav">
            <a className="logo active">cyber·space</a>
            <div className="buttons">
              <button id="menu-toggle" className="icon" onClick={toggleMenu}>
                <Icon name="menu-48" className="mt-2"></Icon>
              </button>
              <button className="call-to-action">Schedule Consultation</button>
            </div>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#services">Services</a>
          </nav>
          <div class="house-info md:px-1">
            <section className="house-image flex flex-col justify-end"></section>
            <div class="house-price">
              <div className="content flex">
                <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl text-high-emphasis font-semibold sm:max-w-xl md:max-w-5xl lg:max-w-none mb-0  mr-4 mt-2 lg:ml-4">
                  It's one
                </h1>
                <h1
                  className="text-high-emphasis font-semibold
                hidden lg:block text-6xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl sm:max-w-xl  md:max-w-5xl lg:max-w-none mb-0 mt-2 pr-2"
                >
                  small
                </h1>
              </div>
            </div>
            <ul class="house-meta p-0 pb-3">
              <div className="content">
                <h1 className="hidden lg:block text-6xl sm:text-7xl text-high-emphasis font-semibold md:text-7xl lg:text-7xl mb-0 leading-[5rem] md:leading-[5rem] lg:leading-[6rem] xl:text-8xl xl:leading-[8rem] lg:ml-4">
                  step for <span className="text-accent-blue">you</span>, one
                  giant leap for
                  <span className="text-accent-blue"> your business</span>.
                </h1>
                <h1 className="lg:hidden text-6xl sm:text-7xl text-high-emphasis font-semibold md:text-7xl lg:text-7xl mb-0 leading-[4rem] md:leading-[5rem] lg:leading-[6rem] xl:text-8xl xl:leading-[8rem] lg:ml-4">
                  small step for <span className="text-accent-blue">you</span>, one
                  giant leap for
                  <span className="text-accent-blue"> your business</span>.
                </h1>
              </div>
            </ul>
            <p
              className="house-desc z-10 pb-4 text-xl
            row-start-4 row-end-5 col-start-1 col-end-3
            lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3 lg:self-end lg:text-xl font-light text-medium-emphasis lg:max-h-28 xl:max-h-none xl:text-2xl"
            >
              Developing websites, mobile apps, and software crafted to
              bring visions to life and unlock new horizons.
            </p>
          </div>
        </div>
        <div className="briefing flex justify-between px-3 py-8">
          <div className="flex flex-col max-w-2xl px-3">
            <h2 className="text-3xl font-normal">
              With <span className="text-accent-red">cyber·space</span>, it's
              <br></br>
              <span>
                one small step for you, one giant leap for your business
              </span>
            </h2>
            <p className="text-base md:text-lg">
              First came the industrial age, then the space age, and now it's
              the cyber-space age where leveraging technology is essential for
              success. Just as the first step on the moon marked a monumental
              leap for mankind, our services promise to bring your visions and
              aspirations into reality. From innovative software solutions to
              captivating digital experiences, we're here to turn your dreams
              into tangible achievements. Take that first step into the
              cyber-space age with us, and let's redefine what's possible for
              your business in this exciting new era.
            </p>
          </div>
          <img
            src={briefImg}
            className="rounded aspect-[16/9] object-cover max-h-96"
          />
        </div>

        <div
          className="flex gap-8 text-nowrap font-normal text-2xl font-raleway -rotate-3 my-4"
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
        <div className="services">
          <div className="mb-12 max-w-6xl lg:mx-auto">
            <h2 className="text-3xl font-normal mb-4">
              Whether you're a <span className="text-accent-red">startup</span>,
              <span className="text-accent-blue"> small business</span>, or{" "}
              <span className="text-[#FFA737]">individual</span>, <br></br>
              cyber·space has the solution
            </h2>
            <p className="w-4/6 text-medium-emphasis text-lg">
              Comprehensive suite of services designed to meet your specific
              needs and propel your business forward. Our expertise spans across
              the entire development lifecycle, ensuring that we can support you
              every step of the way.
            </p>
          </div>
          <div className="md:flex gap-3 max-w-6xl mx-auto ">
            <div className="rounded-3xl">
              <section className="rounded-t-3xl flex items-end mb-4 sm:h-52 md:basis-4/12  lg:h-60 "></section>
              <div className="mt-32 pl-5 pr-3 py-3 w-full flex-wrap sm:mt-0 sm:w-3/6 sm:h-full sm:flex sm:items-center md:h-min md:w-full rounded-b-3xl ">
                <div className="content">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg mb-0 lg:text-xl ">
                      Website Development
                    </h3>
                    <Icon name="arrow-right-48" className="" size="24px" />
                  </div>
                  <p className="text-sm text-medium-emphasis mb-0 lg:text-base">
                    Embark on a journey of digital presence with our
                    comprehensive website development service.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl">
              <section className="rounded-3xl flex items-end mb-4 sm:h-52 md:basis-5/12 lg:h-60"></section>
              <div className="home-page mt-32 pl-5 pr-3 py-3 w-full flex-wrap sm:mt-0 sm:w-3/6 sm:h-full sm:flex sm:items-center md:h-min md:w-full rounded-b-3xl">
                <div className="content">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg mb-0 lg:text-xl">
                      Software Development
                    </h3>
                    <Icon name="arrow-right-48" className="" size="24px" />
                  </div>
                  <p className="text-sm text-medium-emphasis mb-0 lg:text-base">
                    Embark on a journey of digital innovation with our
                    comprehensive software development service.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl">
              <section className="rounded-3xl flex items-end mb-4 sm:h-52 basis-3/6 lg:h-60"></section>
              <div className="home-page mt-32 pl-5 pr-3 py-3 w-full flex-wrap sm:mt-0 sm:w-3/6 sm:h-full sm:flex sm:items-center md:h-min md:w-full rounded-b-3xl">
                <div className="content">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg mb-0 lg:text-xl">
                      Mobile App Development
                    </h3>
                    <Icon name="arrow-right-48" className="" size="24px" />
                  </div>
                  <p className="text-sm text-medium-emphasis mb-0 lg:text-base">
                    Embark on a journey of mobile innovation with our
                    comprehensive mobile app development service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="call-to-action py-8 md:py-16 lg:py-24 px-3 ">
          <div className="content max-w-5xl md:mx-auto md:flex md:flex-row-reverse md:justify-between">
            <div className="py-2 flex flex-col items-center justify-center text-xl min-w-72 px-16 sm:mx-auto sm:max-w-96 sm:px-0 md:basis-1/2 md:max-w-96 ms:mx-0">
              {/*   */}
              <div class="container text-right">
                <div
                  class="circle before:bg-accent-red before:absolute
              before:w-6 before:h-6 before:rounded-full before:-translate-x-12"
                ></div>
                <p class="word">Design.</p>
              </div>
              <div class="container">
                <div
                  class="circle before:bg-accent-blue before:absolute
              before:w-6 before:h-6 before:rounded-full before:translate-x-5"
                ></div>
                <p class="word">Develop.</p>
              </div>
              <div class="container text-center">
                <div
                  class="circle before:bg-[#BCAA99] before:absolute
              before:w-6 before:h-6 before:rounded-full before:-translate-x-3"
                ></div>
                <p class="word">Deploy.</p>
              </div>
            </div>
            <section className="md:basis-1/2">
              <p className="text-xs uppercase tracking-wider text-accent-blue mb-1 font-medium md:text-sm">
                Get Started
              </p>
              <h2 className="text-3xl font-medium md:max-w-96 md:text-4xl ">
                Ready to get that idea off the ground?
              </h2>
              <p className="text-medium-emphasis mb-4 md:max-w-96 ">
                Let's start the journey together. Get in touch today to schedule
                a consultation and discover which services can help you achieve
                your business goals.
              </p>
              <button className="call-to-action text-sm">
                Schedule Consultation
              </button>
            </section>
          </div>
        </div>
        <div className="benefits px-3">
          <div className="content">
            <h2 className="text-center text-3xl">
              Light-years ahead of the
              <span className="text-accent-blue "> competition</span>.
            </h2>
            <div className="my-5 mx-3">
              <section className="mb-4 flex items-center gap-3">
                <Icon name="staff-48" />
                <div>
                  <h3 className="text-lg mt-1">
                    Tailored Solutions for Every Business Size
                  </h3>
                  <p className="text-medium-emphasis">
                    Whether you're a startup, small business, or individual,
                    cyber·space provides customized solutions to suit your
                    unique needs and budget. We understand the challenges you
                    face and are dedicated to helping you succeed.
                  </p>
                </div>
              </section>

              <section className="mb-4 flex items-center gap-3">
                <Icon name="tags-48" />
                <div>
                  <h3 className="text-lg mt-1">
                    Quality Service at a Value Price
                  </h3>
                  <p className="text-medium-emphasis">
                    Exceptional quality shouldn't come with a hefty price tag.
                    Our team is committed to delivering top-notch services at
                    competitive rates, ensuring that you receive maximum value
                    for your investment without compromising on quality.
                  </p>
                </div>
              </section>

              <section className="mb-4 flex items-center gap-3">
                <Icon name="thumb-up-48" />
                <div>
                  <h3 className="text-lg mt-1">
                    Customer Satisfaction is the Priority
                  </h3>
                  <p className="text-medium-emphasis">
                    Your satisfaction is our top priority. We strive to exceed
                    your expectations and provide you with a positive, seamless
                    experience from start to finish. Your success is our
                    success.
                  </p>
                </div>
              </section>

              <section className="mb-4 flex items-center gap-3">
                <Icon name="smart-48" />
                <div>
                  <h3 className="text-lg mt-1">
                    An Innovative and Fresh Perspective
                  </h3>
                  <p className="text-medium-emphasis">
                    Every project is injected with a fresh perspective and
                    innovative approach. Blending creativity with cutting-edge
                    technology, ensures your brand stands out amidst the noise,
                    setting you apart from competitors. Embrace the future,
                    where inventive thinking meets impactful results.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="technologies px-3">
          <h2 className="font-light text-center mb-8 md:text-3xl">
            Technologies used to bring your{" "}
            <span className="text-accent-blue">vision</span> to fruition
          </h2>
          <div className="flex flex-wrap gap-2 justify-center px-4 opacity-80 max-w-xl mx-auto md:mx-16 ">
            <Icon name="react-96" size="48px" className="" />
            <Icon name="mongodb-96" size="48px" className="" />
            <Icon name="nodejs-96" size="48px" className="" />
            <Icon name="next.js-96" size="48px" className="" />
            <Icon name="tailwindcss-96" size="48px" className="" />
            <Icon name="mysql-logo-96" size="48px" className="" />
            <Icon name="java-96" size="48px" className="" />
            <Icon name="javascript-96" size="48px" className="" />
            <Icon name="html-96" size="48px" className="" />
            <Icon name="css-96" size="48px" className="" />
            <Icon name="kotlin-96" size="48px" className="" />
            <Icon name="android-96" size="48px" className="" />
            <Icon name="flutter-96" size="48px" className="" />
          </div>
        </div>
        <div className="process lg:max-w-5xl lg:mx-auto">
          <p className="text-xs uppercase tracking-wider text-accent-blue mb-1 font-medium md:text-sm lg:text-base">
            The Process
          </p>
          <h2 className="text-3xl sm:max-w-96 md:text-4xl lg:text-5xl lg:max-w-xl">
            From Ground-Level to the Moon
          </h2>
          <p className="text-medium-emphasis sm:max-w-96 md:text-lg">
            From Ground-Level to the Moon, we'll be with you every step of the
            way, transforming your ideas into stellar realities.
          </p>
          <div className="lg:flex">
            <div className="md:flex">
              <section className="flex items-center flex-col gap-2 my-3 lg:max-w-80 md:mx-4 md:basis-1/2">
                <Icon name="level-1-48" size="36px" className="icon" />
                <div className="my-1 p-4 rounded-3xl md:h-full">
                  <h3 className="text-lg text-accent-blue">Discovery.</h3>
                  <p className="m-0">
                    During the consultation, we'll uncover your goals,
                    challenges, and vision for success through detailed
                    discussions and analysis.
                  </p>
                </div>
              </section>

              <section className="flex items-center flex-col gap-2 my-3 lg:max-w-80 md:mx-4 md:basis-1/2">
                <Icon name="level-2-48" size="36px" className="icon" />
                <div className="my-1 p-4 rounded-3xl md:h-full">
                  <h3 className="text-lg text-accent-blue">Design.</h3>
                  <p className="m-0">
                    It's time to design the blueprint. We meticulously craft
                    every detail, ensuring your vision translates into
                    captivating visuals and intuitive user experiences.
                  </p>
                </div>
              </section>
            </div>

            <div className="md:flex">
              <section className="flex items-center flex-col gap-2 my-3 lg:max-w-80 md:mx-4 md:basis-1/2">
                <Icon name="level-3-48" size="36px" className="icon" />
                <div className="my-1 p-4 rounded-3xl md:h-full">
                  <h3 className="text-lg text-accent-blue">Develop.</h3>
                  <p className="m-0">
                    With approved blueprints in hand, our developers bring your
                    vision to life, creating functional software, mobile apps,
                    or websites that exceed expectations.
                  </p>
                </div>
              </section>

              <section className="flex items-center flex-col gap-2 my-3 lg:max-w-80 md:mx-4 md:basis-1/2">
                <Icon name="level-4-48" size="36px" className="icon" />
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

          <div className="flex justify-center">
            <button className="call-to-action text-sm">
              Start the Process
            </button>
          </div>
        </div>
        <div className="px-3">
          <img
            src={nasaAstro}
            className="rounded md:max-h-72 md:w-full object-cover"
          />
        </div>
        <div
          className="flex gap-8 text-nowrap font-normal text-2xl font-raleway"
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
        <div className="contact px-3 md:flex md:justify-between md:gap-4 md:mx-auto md:max-w-4xl lg:max-w-5xl">
          <section className="md:basis-1/2 md:max-w-md lg:max-w-lg">
            <p className="text-xs uppercase tracking-wider text-accent-blue mb-1 font-medium md:text-sm lg:text-base">
              Admit it, you need this
            </p>
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl mb-3">
              Get in Touch and Book a Consultation
            </h2>
            <p className="text-medium-emphasis mb-4 md:text-lg">
              Ready to take the next step towards digital success? Reach out to
              us today and let's start the conversation. Whether you have
              questions about our services, want to discuss your project in
              detail, or simply need some guidance, our team is here to help.
              Get in touch now to see how cyber·space can propel your business
              forward in the digital realm.
            </p>
          </section>
          <div className="form md:basis-1/2 md:max-w-sm">
            <p>Full Name:</p>
            <div>
              <input></input>
            </div>
            <p>Email Address:</p>
            <div>
              <input></input>
            </div>
            <p>Phone Number:</p>
            <div>
              <input></input>
            </div>
            <p>Inquiry:</p>
            <div>
              <input></input>
            </div>
            {/* <input className="p-2 call-to-action" type="submit"></input> */}
            <button className="call-to-action text-sm mt-4">Submit</button>
          </div>
        </div>
        <div className="footer grid-rows-2 bg-[#121212]">
          <hr></hr>
          <div className="flex gap-5 px-8 ">
            <div>
              <a className="">cyber·space</a>
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
              <p className="m-0">Quick Links</p>
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
    </div>
  );
}

export default App;
