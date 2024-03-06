import React, { useEffect, useState } from "react";
import "./App.css";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import menu from "./assets/icons/icons8-menu-48.png";
import heroImg from "./assets/astronaut.png";
import earthImg from "./assets/earth.jpg";
import Icon from "./Icon";
import nasaAstro from "./assets/nasa-astro.jpg";
import shuttle from "./assets/shuttle.jpg";

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
      <div class="hero py-4 px-8">
        <nav class="hero-nav" id="top-nav">
          <a className="logo active">cyber·space</a>
          <div className="buttons">
            <button id="menu-toggle" className="icon" onClick={toggleMenu}>
              <img src={menu}></img>
            </button>
            <button className="call-to-action">Schedule Consultation</button>
          </div>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#services">Services</a>
        </nav>
        <section className="flex items-center h-full">
          <div className="left">
            <p className="tagline">Digital Agency</p>
            <h1 className="text-6xl">Reach for the Stars. Land on the Moon.</h1>
            <p className="text-2xl">
              If you're starting from Ground Zero with your online presence,
              it's about time to make your way towards the Moon.
            </p>
            <button className="call-to-action">Start Your Journey</button>
          </div>
          <div className="right">{/* <img src={heroImg}></img> */}</div>
        </section>
      </div>
      <div className="briefing py-8 px-8">
        <h2 className="">Briefing</h2>
        <p>
          First it was the industrial age, then there was the space age, and now
          that we're firmly in the cyber-space age, having a strong online
          presence is not just a luxury—it's a necessity for businesses looking
          to thrive.
        </p>
        <p>But, you don't have to do it alone.</p>
        <p>
          Cyber·space offers a range of tailored services designed to elevate
          your brand and drive results. From web development to branding and
          design, we have the expertise and dedication to help you succeed in
          the ever-evolving world of the cyber-space.
        </p>
      </div>
      <div className="services py-8 px-8">
        <img src={earthImg} className="rounded w-full mb-8"></img>
        <h2 className="text-right">Transform Your Reality</h2>
        <p className="text-right text-medium-emphasis">
          Cutting-edge services designed to propel your business forward.
          Explore our services and discover the difference of working with
          cyber·space.
        </p>
        <div className="top">
          <section>
            <Icon name="windows-11-48" />
            <h3>Software Development</h3>
            <p className="">
              Design, build, and refine digital solutions and systems to meet
              your specific business needs and goals
            </p>
          </section>
          <section>
            <Icon name="programming-48" />
            <h3>Web Design & Development</h3>
            <p>
              Specialization in designing and developing visually appealing and
              user-friendly websites to meet your specific requirements and
              goals.
            </p>
          </section>
        </div>
        <div className="bottom">
          <section>
            <Icon name="themes-48" />
            <h3>Branding & Re-Branding</h3>
            <p>
              Craft and refine the visual identity and messaging of your brand
              to effectively communicate its values and resonate with your
              target audience.
            </p>
          </section>
          <section>
            <Icon name="laptop-settings-48" />
            <h3>Website Maintenance & Optimization</h3>
            <p>
              Ensure your website remains updated and optimized for performance,
              providing services to enhance user experience and maximize online
              presence. meet your specific business needs and goals
            </p>
          </section>
        </div>
      </div>
      <div className="call-to-action border-1 py-8 px-8 border-y-medium-emphasis">
        <section>
          <h3>Want to take your digital presence to the next level?</h3>
          <p>
            Let's start the journey together. Contact us today to schedule a
            consultation and discover how our services can help you achieve your
            business goals.
          </p>
        </section>
        <button className="call-to-action">Schedule Consultation</button>
      </div>
      <div className="benefits py-8 px-8">
        <img src={nasaAstro} className="rounded mb-4" />
        <div className="top mb-5">
          <section>
            <Icon name="people-48" />
            <h3>Tailored Solutions for Every Business Size</h3>
            <p className="">
              Whether you're a startup, small business, or individual,
              cyber·space provides customized solutions to suit your unique
              needs and budget. We understand the challenges you face and are
              dedicated to helping you succeed.
            </p>
          </section>
          <section>
            <Icon name="value-48" />
            <h3>Quality Service at a Value Price</h3>
            <p className="">
              Exceptional quality shouldn't come with a hefty price tag. Our
              team is committed to delivering top-notch services at competitive
              rates, ensuring that you receive maximum value for your investment
              without compromising on quality.
            </p>
          </section>
        </div>
        <p className="tagline text-center">Why choose cyber·space?</p>
        <h2 className="text-center">Benefits</h2>
        <p className="text-center">
          Allow us to shed some light on what sets us apart and why we're the
          perfect partner for journey towards unleashing your full potential.
        </p>
        <div className="top mt-5">
          <section>
            <Icon name="thumb-48" />
            <h3>Customer Satisfaction is the Priority</h3>
            <p className="">
              Your satisfaction is our top priority. We strive to exceed your
              expectations and provide you with a positive, seamless experience
              from start to finish. Your success is our success.
            </p>
          </section>
          <section>
            <Icon name="innovation-48" />
            <h3>An Innovative and Fresh Perspective</h3>
            <p className="">
              Every project is injected with a fresh perspective and innovative
              approach. Blending creativity with cutting-edge technology,
              ensures your brand stands out amidst the noise, setting you apart
              from competitors. Embrace the future, where inventive thinking
              meets impactful results.{" "}
            </p>
          </section>
        </div>
      </div>
      <div className="social-proof border-1 border-y-medium-emphasis py-8 px-8">
        <div className="flex gap-1 justify-center mb-3">
          <Icon name="star-48-purple" size="24px" className="" />
          <Icon name="star-48-purple" size="24px" className="" />
          <Icon name="star-48-purple" size="24px" className="" />
          <Icon name="star-48-purple" size="24px" className="" />
          <Icon name="star-48-purple" size="24px" className="" />
        </div>
        <p className="text-center">
          Working with cyber·space was a game-changer for our business. Their
          team's expertise, professionalism, and dedication to our success
          exceeded our expectations. They truly understand the pulse of the
          digital world and delivered outstanding results. Highly recommend!
        </p>
        <div className="flex items-center justify-center gap-4">
          <img src="https://placehold.co/50" className="rounded-full" />
          <ul className="p-0 m-0">
            <li>Aaliyah Smith</li>
            <li>Founder</li>
          </ul>
        </div>
      </div>
      <div className="process pt-16 pb-8 px-8">
        <p className="tagline">Why should I expect?</p>
        <h2>Process</h2>
        <p>
          Our seamless process is designed to guide you through every step with
          ease. From initial consultation to final delivery, you can expect
          clear communication, expert guidance, and exceptional results.
        </p>
        <div className="flex gap-2 my-3">
          <div className="flex flex-col items-center">
            <Icon name="1-48" size="48px" className="icon" />
            <div className="content-wrap">.</div>
          </div>
          <div className="my-1">
            <h3 className="">Discovery</h3>
            <p className="m-0">
              Uncover your goals, challenges, and vision for success through
              in-depth discussions and analysis.
            </p>
          </div>
        </div>

        <div className="flex gap-2 my-3">
          <div className="flex flex-col items-center">
            <Icon name="2-48" size="48px" className="icon" />
            <div className="content-wrap">.</div>
          </div>
          <div className="my-1">
            <h3 className="">Strategy</h3>
            <p className="m-0">
              Craft a customized plan tailored to your unique needs, leveraging
              industry insights and best practices.
            </p>
          </div>
        </div>

        <div className="flex gap-2 my-3">
          <div className="flex flex-col items-center">
            <Icon name="3-48" size="48px" className="icon" />
            <div className="content-wrap">.</div>
          </div>
          <div className="my-1">
            <h3 className="">Execution</h3>
            <p className="m-0">
              Bring your vision to life with precision and creativity,
              implementing strategies to achieve your objectives.
            </p>
          </div>
        </div>

        <div className="flex gap-2 my-3">
          <div className="flex flex-col items-center">
            <Icon name="4-48" size="48px" className="icon" />
            <div className="content-wrap">.</div>
          </div>
          <div className="my-1">
            <h3 className="">Evaluation</h3>
            <p className="m-0">
              Continuously monitor and evaluate performance, adjusting
              strategies as needed to maximize results and ensure ongoing
              success.
            </p>
          </div>
        </div>
      </div>
      <div className="shuttle px-8 pb-8">
        <img src={shuttle} className="rounded" />
      </div>
      <div className="contact p-14">
        <section>
          <p className="tagline">We can help you!</p>
          <h3>Get in Touch and Book a Consultation</h3>
          <p>
            Ready to take the next step towards digital success? Reach out to us
            today and let's start the conversation. Whether you have questions
            about our services, want to discuss your project in detail, or
            simply need some guidance, our team is here to help. Get in touch
            now to see how cyber·space can propel your business forward in the
            digital realm.
          </p>
        </section>
        <div className="form">
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
          <input className="p-2" type="submit"></input>
        </div>
      </div>
      <hr></hr>
      <div className="footer px-8 grid-rows-2">
        <div className="flex gap-5">
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
            <h5>Quick Links</h5>
            <a>Services</a>
            <a>About</a>
            <a>Contact</a>
          </nav>
        </div>
        <p className="text-center m-0 py-4">© 2024 cyber·space. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default App;
