import "./App.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dpImage1 from "./components/images/Profile.jpg";
import dpImage2 from "./components/images/dp.jpg"
import dpImage3 from "./components/images/casual.jpg"
import web1 from "./components/images/web1.png";
import web3 from "./components/images/web-2.png";
import web2 from "./components/images/web-3.png";
import web4 from "./components/images/web4.jpeg";
import Typed from "react-typed";
import {
  LinkedIn,
  GitHub,
  Twitter,
  Instagram,
  Phone,
  Email,
  Home,
  HtmlSharp,
  JavascriptSharp,
} from "@mui/icons-material";
import { GrReactjs } from "react-icons/gr";
import { FaCss3, FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import { BiLogoFirebase, BiLogoTailwindCss, BiLogoStripe } from "react-icons/bi";
function App() {

  const resumeLink = 'https://drive.google.com/file/d/12Q-5xL9leffj5vxU1IcCx-C39QZ5Qwol/view?usp=drive_link';
  
  return (
    <div className="App scroll-smooth flex flex-col items-center w-full justify-center bg-white">
      {/* Header */}

      <div className=" flex max-h-11 w-screen justify-around">
        <a
          href=""
          className=" p-2 font-semibold flex rounded-md text-3xl text-black"
        >
          jayis<p className=" text-red-500"> .</p>live
        </a>
        <div className=" hidden md:block p-2 text-base rounded-lg">
          <ul className=" flex justify-between w-80">
            <li className=" hover:text-red-500">
              <a href="#projects">Portfolio</a>
            </li>
            <li className=" hover:text-red-500">
              <a href="#about">About</a>
            </li>
            <li className=" hover:text-red-500">
              <a href="mailto:sahoojayaprakash27@gmail.com">Contact Me</a>
            </li>
            <li className=" hover:text-red-500">
              <a href={resumeLink}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}

      <div className="hero  h-screen text-sm md:text-lg mt-12 md:mt-0 flex items-center justify-center flex-col">
        <div className=" w-screen relative p-8 flex items-center justify-center flex-col-reverse md:flex-row md:justify-around">

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1, x: 0 }}
          className=" hero-text w-screen md:w-1/2 h-96 p-6 md:p-8 justify-center items-center text-left space-y-4"
        >
          <div className=" flex-col h-36 md:h-52 text-5xl md:text-6xl ">
            <p>
              Hi, It's Jay<span className=" text-red-500 font-bold">.</span>{" "}
            </p>
            <Typed
              strings={["A React Developer", "A Front-end Developer"]}
              typeSpeed={80}
              backSpeed={30}
              loop
              className="  leading-2 text-4xl md:text-5xl text-red-500"
            />
          </div>
          <div className=" flex-col justify-center items-center">
            <div class="text-red-500 ">
              {" "}
              <Home /> Nayagarh, Odisha, IN
            </div>
            <div class="text-slate-600 ">
              <p>
                {" "}
                <Phone /> (+91) 7735471415
              </p>
              <a href="mailto:sahoojayaprakash27@gmail.com">
                <Email /> sahoojayaprakash27@gmail.com
              </a>
            </div>
            <div className="pl-3 mt-3 pr-3 pt-1 pb-1 w-fit self-center hover:scale-105 transition ease-out hover:shadow-md bg-gradient-to-tr hover:bg-gradient-to-tl from-red-400 to-red-500 text-white">
              <a href={resumeLink}>
                Download My Resume
              </a>
            </div>
            <div className="flex mt-3 text-red-500 justify-center md:justify-start">
              <a
                className="pl-4 pr-4 hover:text-black"
                href="https://github.com/jayaprakash27"
              >
                <GitHub />
              </a>
              <a
                className="pl-4 pr-4 hover:text-blue-700"
                href="https://www.linkedin.com/in/jayaprakash27"
              >
                <LinkedIn />
              </a>
              <a
                className="pl-4 pr-4 hover:text-blue-600"
                href="https://twitter.com/jaya77prakash"
              >
                <Twitter />
              </a>
              <a
                className="pl-4 pr-4 hover:text-pink-600"
                href="https://www.instagram.com/jay.jsx"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1, x: 0 }}
          className=" p-4 flex items-center justify-center img"
        >
          <div className=" relative z-0 h-96 w-72 bg-black"></div>
          <img
            src={dpImage1}
            className=" absolute z-10 transition ease-out h-96 w-72 border-black border-4 translate-x-2 -translate-y-2 hover:translate-x-4 hover:-translate-y-4 "
          />
        </motion.div>
        </div>
      </div>

      {/* Portfolio & Works */}

      <h1
        id="projects"
        className=" text-center text-lg text-red-500 font-black "
      >
        PROJECTS
      </h1>
      <div className=" p-4 mb-3 w-full items-center gap-16 flex flex-col justify-around ">
        <motion.div
          initial={{ opacity: 0.5, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="group relative z-0 flex h-full overflow-clip flex-col bg-black border-black border-2 md:border-4 card w-full md:w-1/2"
        >
          <div className=" w-full transition-all h-fit  text-white">
            <img src={web1} alt="" className=" w-full " />
          </div>
          <div className=" absolute z-10 w-full transition-all bg-opacity-90 duration-200 opacity-0 group-hover:opacity-100 bg-white flex flex-col w-full h-full justify-center p-4 text-black">
            <p className="mt-2 text-lg text-center">
              PetU: Restaurant Delivery Web App
            </p>
            <p className=" h-fit max-lg:hidden">
                The website is a complete delivery solution for Restaurants.
                It offers a comprehensive menu display and smartly suggests
                customer meals based on the current time.
                It empowers the admin to add new menu items by logging in
                through their Google account.
              <p className=" flex gap-1">
                {" "}
                Tech Used:
                <span className=" flex gap-2 items-center">
                  <GrReactjs className=" text-2xl text-blue-600" /> React JS,
                </span>
                <span className=" flex gap-2 items-center">
                  <BiLogoTailwindCss className=" text-2xl text-blue-600" />{" "}
                  Tailwind CSS
                </span>
                <span className=" flex gap-2 items-center">
                  <BiLogoFirebase className=" text-2xl text-orange-400" />{" "}
                  Firebase,
                </span>
              </p>
            </p>
            <div className=" flex justify-around gap-2 m-5 p-3">
              <motion.a
                whileTap={{ scale: 0.9 }}
                href="https://petu.jayaprakash.co"
                className=" bg-black text-center text-xs md:text-lg uppercase pt-2 md:pt-4 hover:scale-105 pb-2 md:pb-4 pl-8 md:pl-12 pr-8 md:pr-12 text-white "
              >
                {" "}
                visit{" "}
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.9 }}
                href="https://github.com/jayaprakash27/petu"
                className=" bg-black text-center text-xs md:text-lg uppercase pt-2 md:pt-4 hover:scale-105 pb-2 md:pb-4 pl-8 md:pl-12 pr-8 md:pr-12 text-white "
              >
                {" "}
                code{" "}
              </motion.a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="group relative z-0 flex h-full overflow-clip flex-col bg-black border-black border-2 md:border-4 card w-full md:w-1/2"
        >
          <div className="overflow-hidden w-full transition-all h-full  text-white">
            <img src={web4} alt="" className=" w-full " />
          </div>
          <div className=" absolute z-10 w-full transition-all bg-opacity-90 duration-200 opacity-0 group-hover:opacity-100 bg-white flex flex-col h-full justify-center p-4 text-black">
            <p className="mt-2 text-xl text-center">
              My Louverline: for Louverline Blinds Pvt. Ltd.
            </p>
            <p className=" hidden h-fit md:block">
                Developed My Louverline website independently for 120+
                authorized dealers, providing real-time updates on products,
                pricing, and stock availability.
                Created a user-friendly interface with React JS and Tailwind
                CSS, integrated Firebase for authentication, and utilized
                Firestore for data storage.
                Ensured seamless navigation and access to company news through
                efficient UI design.

              <p className=" flex gap-1">
                {" "}
                Tech Used:
                <span className=" flex gap-2 items-center">
                  <GrReactjs className=" text-2xl text-blue-600" /> React JS,
                </span>
                <span className=" flex gap-2 items-center">
                  <BiLogoTailwindCss className=" text-2xl text-blue-600" />{" "}
                  Tailwind CSS, 
                </span>
                <span className=" flex gap-2 items-center">
                  <BiLogoFirebase className=" text-2xl text-orange-400" />{" "}
                  Firebase
                </span>
              </p>
            </p>
            <div className=" flex justify-around gap-2 m-5 p-3">
              <motion.a
                whileTap={{ scale: 0.9 }}
                href="https://mylouverline.com/"
                className=" bg-black text-center text-xs md:text-lg uppercase pt-2 md:pt-4 hover:scale-105 pb-2 md:pb-4 pl-8 md:pl-12 pr-8 md:pr-12 text-white "
              >
                {" "}
                visit{" "}
              </motion.a>
              {/* <motion.a
                whileTap={{ scale: 0.9 }}
                href="https://weather-jps.netlify.app/"
                className=" bg-black text-center text-xs md:text-lg uppercase pt-2 md:pt-4 hover:scale-105 pb-2 md:pb-4 pl-8 md:pl-12 pr-8 md:pr-12 text-white "
              >
                {" "}
                code{" "}
              </motion.a> */}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="group relative z-0 flex h-full overflow-clip flex-col bg-black border-black border-2 md:border-4 card w-full md:w-1/2"
        >
          <div className="overflow-hidden w-full transition-all h-full  text-white">
            <img src={web2} alt="" className=" w-full " />
          </div>
          <div className=" absolute z-10 w-full transition-all bg-opacity-90 duration-200 opacity-0 group-hover:opacity-100 bg-white flex flex-col h-full justify-center p-4 text-black">
            <p className="mt-2 text-xl text-center">
            E- Shop: Online Shopping Website
            </p>
            <p className=" hidden h-fit md:block">
                This is a simple E-commerce website where a user can add products to the cart and place order by doing the payment.
              <p className=" flex gap-1">
                {" "}
                Tech Used:
                <span className=" flex gap-2 items-center">
                  <GrReactjs className=" text-2xl text-blue-600" /> React JS,
                </span>
                <span className=" flex gap-2 items-center">
                  <BiLogoTailwindCss className=" text-2xl text-blue-600" />{" "}
                  Tailwind CSS, 
                </span>
                <span className=" flex gap-2 items-center">
                  <BiLogoStripe className=" text-2xl text-blue-700" />{" "}
                  Stripe.js
                </span>
              </p>
            </p>
            <div className=" flex justify-around gap-2 m-5 p-3">
              <motion.a
                whileTap={{ scale: 0.9 }}
                href="https://eshopjp.netlify.app/"
                className=" bg-black text-center text-xs md:text-lg uppercase pt-2 md:pt-4 hover:scale-105 pb-2 md:pb-4 pl-8 md:pl-12 pr-8 md:pr-12 text-white "
              >
                {" "}
                visit{" "}
              </motion.a>
              {/* <motion.a
                whileTap={{ scale: 0.9 }}
                href="https://weather-jps.netlify.app/"
                className=" bg-black text-center text-xs md:text-lg uppercase pt-2 md:pt-4 hover:scale-105 pb-2 md:pb-4 pl-8 md:pl-12 pr-8 md:pr-12 text-white "
              >
                {" "}
                code{" "}
              </motion.a> */}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          viewport={{ once: true }}
          className="group relative z-0 flex h-full overflow-clip flex-col bg-black border-black border-2 md:border-4 card w-full md:w-1/2"
        >
          <div className="overflow-hidden w-full transition-all h-full  text-white">
            <img src={web3} alt="" className=" w-full " />
          </div>
          <div className=" absolute z-10 w-full transition-all bg-opacity-90 duration-200 opacity-0 group-hover:opacity-100 bg-white flex flex-col h-full justify-center p-4 text-black">
            <p className="mt-2 text-xl text-center">
              Weather Forecasting Web App
            </p>
            <p className=" hidden h-fit md:block">
                This website asks the user to enter the city's name and shows the current temperature, wind direction, and humidity of the location.
              <p className=" flex gap-1">
                {" "}
                Tech Used:
                <span className=" flex gap-2 items-center">
                  <GrReactjs className=" text-2xl text-blue-600" /> React JS,
                </span>
                <span className=" flex gap-2 items-center">
                  <BiLogoTailwindCss className=" text-2xl text-blue-600" />{" "}
                  Tailwind CSS, 
                </span>
                <span className=" flex gap-2 items-center">
                  Weather API
                </span>
              </p>
            </p>
            <div className=" flex justify-around gap-2 m-5 p-3">
              <motion.a
                whileTap={{ scale: 0.9 }}
                href="https://weather-jps.netlify.app/"
                className=" bg-black text-center text-xs md:text-lg uppercase pt-2 md:pt-4 hover:scale-105 pb-2 md:pb-4 pl-8 md:pl-12 pr-8 md:pr-12 text-white "
              >
                {" "}
                visit{" "}
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.9 }}
                href="https://github.com/jayaprakash27/AISTechIntern/tree/main/weather-forecasting"
                className=" bg-black text-center text-xs md:text-lg uppercase pt-2 md:pt-4 hover:scale-105 pb-2 md:pb-4 pl-8 md:pl-12 pr-8 md:pr-12 text-white "
              >
                {" "}
                code{" "}
              </motion.a>
            </div>
          </div>
        </motion.div>
        {/* <a
          href="https://eshopjp.netlify.app/"
          className=" overflow-hidden m-10 w-1/3 rounded-xl bg-gradient-to-tr hover:shadow-md hover:from-red-500 hover:to-slate-300 from-blue-400 to-blue-500 text-white"
        >
          <img src={web2} alt="" className=" " />
          <p className="m-2 top-0 hidden md:block">
            E-shopping: E Commerce website using ReactJS, Material UI,
            Commerce.js & Stripe.
          </p>
        </a>
      </div>
      <div className=" p-4 w-full md:flex justify-around rounded-lg ">
        <a
          href="https://weather-jps.netlify.app/"
          className="overflow-hidden m-10 card w-1/3 h-fit rounded-xl bg-gradient-to-tr hover:shadow-md hover:from-blue-700 hover:to-slate-50 from-blue-400 to-blue-500 text-white"
        >
          <img src={web3} alt="" className=" " />
          <p className="m-2 hidden md:block">
            Weather App using React & Weather API.
          </p>
        </a>*/}
      </div>

      {/* About me  */}

      {/* Education & Experience  */}

      <div
        id="about"
        className=" text-sm md:text-lg mt-12 w-screen md:flex  justify-around align-center"
      >
        <div speed={0.8} className="education m-5">
          <h1 className=" text-center text-lg text-red-500 font-black ">
            EDUCATION
          </h1>
          <div className="p-4 max-w-xl">
            <h4 className="title font-bold text-black">
              Veer Surendra Sai University of Technology, Burla
            </h4>
            <p className="course text-slate-700">
              B.Tech in Electrical and Electronics Engineering
            </p>
            <p className="text-slate-500">2020-2024</p>
            <p className="desc object-cover text-sm"> </p>
          </div>
          <div className="p-4 max-w-xl">
            <h4 className="title font-bold text-black">
              KMBB Science Higher Secondary School, Naranpur
            </h4>
            <p className="course text-slate-700">CHSE (+2 Science)</p>
            <p className="text-slate-500">2017-2019</p>
            <p className="desc object-cover text-sm">
              {" "}
              I have completed my Intermediate Science from this institute
              having the following subjects. Physics, Chemistry, Mathematics,
              Information Technology, English & Sanskrit
            </p>
          </div>
          <div className="education">
            <h1 className=" text-center text-lg text-red-500 font-black ">
              HARD SKILLS
            </h1>
            <div className="pl-4 pr-4 pt-2 max-w-xl">
              <p className="course font-bold text-black">Development Tools: </p>
              <p className="course flex flex-wrap gap-3 items-center ">
                <span className=" flex gap-2 items-center">
                  <GrReactjs className=" text-2xl text-blue-600" /> React JS,
                </span>
                <span className=" flex gap-2 items-center">
                  <FaNodeJs className=" text-2xl text-green-600" /> Node JS,
                </span>
                <span className=" flex gap-2 items-center">
                  <BiLogoFirebase className=" text-2xl text-orange-400" />{" "}
                  Firebase,
                </span>
                <span className=" flex gap-2 items-center">
                  <JavascriptSharp className=" text-3xl text-yellow-400" />{" "}
                  Javascript,
                </span>
                <span className=" flex gap-2 items-center">
                  <HtmlSharp className=" text-2xl text-orange-600" /> HTML,
                </span>
                <span className=" flex gap-2 items-center">
                  <FaCss3 className=" text-2xl text-blue-600" /> CSS,
                </span>
                <span className=" flex gap-2 items-center">
                  <BiLogoTailwindCss className=" text-2xl text-blue-600" />{" "}
                  Tailwind CSS
                </span>
              </p>
            </div>
            <div className="pl-4 pr-4 pt-2 max-w-xl">
              <p className="course font-bold text-black">
                Programming Languages:{" "}
              </p>
              <p className="course flex flex-wrap gap-3 items-center ">
                <span className=" flex gap-2 items-center">
                  <FaJava className=" text-2xl text-red-600" /> Java,
                </span>
                <span className=" flex gap-2 items-center">
                  <JavascriptSharp className=" text-3xl text-yellow-400" />{" "}
                  Javascript,
                </span>
                <span className=" flex gap-2 items-center">
                  <FaPython className=" text-2xl text-blue-300" /> Python
                </span>
              </p>
            </div>
            <div className="pl-4 pr-4 pt-2 max-w-xl">
              <p className="course font-bold text-black">Graphics & Video: </p>
              <p className="course flex flex-wrap gap-3 items-center ">
                Adobe Photoshop, After Effects, Premiere Pro, Canva
              </p>
            </div>
          </div>
          <h1 className=" mt-3 text-center text-lg text-red-500 font-black ">
            SOFT SKILLS
          </h1>
          <p className="pl-4 pr-4 pt-2 text-md object-cover max-w-xl ">
            Conflict Resolution, Friendliness, Empathetic listening,
            Adaptability, Decision making, Reliability, Respectfulness,
            Analytical thinking, Creativity, Prioritisation, Motivated
          </p>
          <h1 className=" mt-3 text-center text-lg text-red-500 font-black ">
            LANGUAGES
          </h1>
          <p className="pl-4 pr-4 pt-2 text-md object-cover max-w-xl ">
            English, Hindi, Odia
          </p>
        </div>
        <div className="experience m-5">
          <h1 className=" text-center text-lg text-red-500 font-black">
            EXPERIENCE
          </h1>
          <div className="p-4 max-w-xl">
            <a href="https://www.piggyride.com/" className="title font-bold hover:text-red-500 text-black">
              PiggyRide, Bengaluru
            </a>
            <p className="course text-slate-700">Software Developer - Intern</p>
            <p className="text-slate-500">Nov 2023 - Present</p>
            <p className="desc object-cover text-sm">
              <ul className=" list-disc">
                <li>
                Spearheaded a transformative upgrade of PiggyRide’s ride tracking platform, migrating from static HTML/CSS
 to a dynamic 3D React application with advanced integration of Google Cloud Platform, Three.js, Redux,
 Tailwind CSS, and Axios.
                </li>
                <li>Innovatively modified the ride-request page, made with Java Play framework, introducing the distinctive Piggy
Pass subscription model to streamline user interactions and enhance overall functionality.</li>
                <li>
                Debugged and fixed critical real-time vehicle and trip tracking issues on the Piggy partner website (MERN
 stack) and Consumer Mobile App (React Native), employing advanced troubleshooting techniques.
                </li>
              </ul>
            </p>
          </div>
          <div className="p-4 max-w-xl">
            <a href="https://www.louverlineblinds.com/" className="title font-bold hover:text-red-500 text-black">
            Louverline Blinds Pvt. Ltd, Bengaluru
            </a>
            <p className="course text-slate-700">Frontend Developer - Intern</p>
            <p className="text-slate-500">Mar 2023 - Oct 2023</p>
            <p className="desc object-cover text-sm">
              <ul className=" list-disc">
                <li>
                Orchestrated the development of the My Louverline website, seamlessly providing 120 authorized dealers with
 real-time updates on product data, pricing, and stock availability through advanced technologies like ReactJS,
 Google Apps Script API for Spreadsheet, Firebase, and Tailwind CSS.
                </li>
                <li>Implemented a streamlined online ordering system, reducing processing time by 30% and saving the operations
 team 12 hours/week while empowering dealers to seamlessly order highly customizable products.</li>
              </ul>
            </p>
          </div>
          {/* <div className="p-4 max-w-xl">
            <h4 className="title font-bold text-black">
              Idea Innovation Cell, VSSUT, Burla
            </h4>
            <p className="course text-slate-700">Technical Team Member</p>
            <p className="text-slate-500">May 2021-Present</p>
            <p className="desc object-cover text-sm">
              <ul className=" list-disc">
                <li>
                  Web developer for the Club's official website, overseeing its
                  maintenance.
                </li>
                <li>
                  Responsible for creating and editing promotional videos for
                  events.
                </li>
                <li>
                  Proficient in video editing and animation for informative
                  content.
                </li>
                <li>
                  Skilled in managing various aspects of web development and
                  video production.
                </li>
                <li>
                  Contributing to the club's digital presence through engaging
                  multimedia content.
                </li>
              </ul>
            </p>
          </div>
          <div className="p-4 max-w-xl">
            <h4 className="title font-bold text-black">
              Yoga Club, VSSUT, Burla
            </h4>
            <p className="course text-slate-700">Head of Design</p>
            <p className="text-slate-500">Oct 2021- Present</p>
            <p className="desc object-cover text-sm">
              <ul className=" list-disc">
                <li>
                  Head of the design department at the club, leading a team of
                  Graphics designers and Video Editors.
                </li>
                <li>
                  Responsible for managing the team's workflow to ensure the
                  timely creation of event posters and teasers.
                </li>
                <li>
                  Demonstrated leadership skills in coordinating and supervising
                  the design process.
                </li>
                <li>
                  Efficiently handling multiple projects and meeting tight
                  deadlines.
                </li>
                <li>
                  Contributing to the club's success by enhancing its visual
                  identity and promotional materials.
                </li>
              </ul>
            </p>
          </div>
          <div className="p-4 max-w-xl">
            <h4 className="title font-bold text-black">Plasdor, Pune</h4>
            <p className="course text-slate-700">
              Video Graphic Designer (Remote)
            </p>
            <p className="text-slate-500">Dec 2021-Sep 2022</p>
            <p className="desc object-cover text-sm">
              I was responsible for making posters for various gaming sports
              events for the company. Also, I made posters for promotional
              Instagram posts and reels.
            </p>
          </div>
          <div className="p-4 max-w-xl">
            <h4 className="title font-bold text-black">NALCO, Damanjodi</h4>
            <p className="course text-slate-700">— Summer Trainee</p>
            <p className="text-slate-500">May 2022-Jun 2022</p>
            <p className="desc object-cover text-sm">
              Learned about the generation of electrical power at the Steam
              Power Plant, the distribution at Central Distribution System, the
              Electrical Repair shop, and some transformer tests that are done
              at Testing.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
