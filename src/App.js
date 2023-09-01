import "./App.css";
import { useRef } from "react";
import dpImage from "./components/images/dp.jpg";
import web1 from "./components/images/web-1.png";
import web3 from "./components/images/web-2.png";
import web2 from "./components/images/web-3.png";
import {
  LinkedIn,
  GitHub,
  Twitter,
  Instagram,
  Phone,
  Email,
  Home,
  Javascript,
  JavascriptRounded,
  HtmlSharp,
  JavascriptSharp,
} from "@mui/icons-material";
import { GrNodes, GrReactjs } from "react-icons/gr";
import { FaCss3, FaJava, FaNodeJs, FaPython } from 'react-icons/fa'
import { BiLogoFirebase, BiLogoTailwindCss } from 'react-icons/bi'
function App() {
  const ref = useRef();
  return (
    <div className="App scroll-smooth w-full justify-center bg-gradient-to-tr from-slate-50 to-slate-300">
      {/* Header */}

      <div className=" flex max-h-11 w-screen justify-around">
        <a
          href=""
          className=" p-2 font-semibold rounded-md text-2xl text-cyan-700"
        >
          Jayaprakash Sahoo
        </a>
        <div className=" hidden md:block p-2 text-cyan-700 text-base rounded-lg">
          <ul className=" flex justify-between w-80">
            <li className="">
              <a href="#about">About</a>
            </li>
            <li className="">
              <a href="#projects">Portfolio</a>
            </li>
            <li className="">
              <a href="mailto:sahoojayaprakash27@gmail.com">Contact Me</a>
            </li>
            <li className="">
              <a href="https://drive.google.com/file/d/14DIOWfACOElXACOy4mxUxmTNgE4ze8Pc/view?usp=sharing">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}

      <div className="hero  text-sm md:text-lg mt-12 w-screen md:flex justify-center align-center">
        <div className=" p-4 flex justify-center img">
          <img src={dpImage} className=" shadow-xl max-h-96 rounded-xl " />
        </div>
        <div className=" hero-text h-full max-w-lg text-blue-700 p-6 md:p-8 flex-col justify-center text-center md:text-left space-y-4">
          <p className=" object-cover ">
            Final-year undergraduate at Veer Surendra Sai University of
            Technology. Proficient in Java, React JS, and Python for web
            development. Collaborative, empathetic team player with strong
            problem-solving skills. Eager to innovate and learn in web
            development.
          </p>
          <div class="text-sky-500 ">
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
          <div className="w-full flex-col align-middle justify-center">
            <button className="pl-3 pr-3 pt-1 pb-1 m-2 rounded-xl bg-gradient-to-tr hover:shadow-md hover:bg-gradient-to-tl from-blue-400 to-blue-500 text-white">
              <a href="https://drive.google.com/file/d/14DIOWfACOElXACOy4mxUxmTNgE4ze8Pc/view?usp=sharing">
                Download My Resume
              </a>
            </button>
            <div className="flex text-blue-500 justify-center md:justify-start">
              <a
                className="pl-4 pr-4 hover:text-black"
                href="https://github.com/jayaprakash27"
              >
                <GitHub />
              </a>
              <a
                className="pl-4 pr-4 hover:text-blue-700"
                href="https://www.linkedin.com/in/jayaprakash-sahoo-759052202/"
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
        </div>
      </div>
      {/* Education & Experience  */}

      <div
        id="about"
        className=" text-sm md:text-lg mt-12 w-screen md:flex  justify-around align-center"
      >
        <div speed={0.8} className="education m-5">
          <h1 className=" text-center text-lg text-blue-500 font-black ">
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
            <h1 className=" text-center text-lg text-blue-500 font-black ">
              HARD SKILLS
            </h1>
            <div className="pl-4 pr-4 pt-2 max-w-xl">
              <p className="course font-bold text-black">Web Development: </p>
              <p className="course flex flex-wrap gap-3 items-center ">
                <span className=" flex gap-2 items-center">
                  <GrReactjs className=" text-2xl text-blue-600" /> React JS,
                </span>
                <span className=" flex gap-2 items-center">
                  <FaNodeJs className=" text-2xl text-green-600" /> Node JS,
                </span>
                <span className=" flex gap-2 items-center">
                  <BiLogoFirebase className=" text-2xl text-orange-400" /> Firebase,
                </span>
                <span className=" flex gap-2 items-center">
                  <JavascriptSharp className=" text-3xl text-yellow-400" /> Javascript,
                </span>
                <span className=" flex gap-2 items-center">
                  <HtmlSharp className=" text-2xl text-orange-600" /> HTML,
                </span>
                <span className=" flex gap-2 items-center">
                  <FaCss3 className=" text-2xl text-blue-600" /> CSS,
                </span>
                <span className=" flex gap-2 items-center">
                  <BiLogoTailwindCss className=" text-2xl text-blue-600" /> Tailwind CSS
                </span>
              </p>
            </div>
            <div className="pl-4 pr-4 pt-2 max-w-xl">
              <p className="course font-bold text-black">Programming Languages: </p>
              <p className="course flex flex-wrap gap-3 items-center ">
                <span className=" flex gap-2 items-center">
                  <FaJava className=" text-2xl text-red-600" /> Java,
                </span>
                <span className=" flex gap-2 items-center">
                  <JavascriptSharp className=" text-3xl text-yellow-400" /> Javascript,
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
          <h1 className=" mt-3 text-center text-lg text-blue-500 font-black ">
            SOFT SKILLS
          </h1>
          <p className="pl-4 pr-4 pt-2 text-md object-cover max-w-xl ">
            Conflict Resolution, Friendliness, Empathetic listening,
            Adaptability, Decision making, Reliability, Respectfulness,
            Analytical thinking, Creativity, Prioritisation, Motivated
          </p>
          <h1 className=" mt-3 text-center text-lg text-blue-500 font-black ">
            LANGUAGES
          </h1>
          <p className="pl-4 pr-4 pt-2 text-md object-cover max-w-xl ">
            English, Hindi, Odia
          </p>
        </div>
        <div className="experience m-5">
          <h1 className=" text-center text-lg text-blue-500 font-black">
            EXPERIENCE
          </h1>
          <div className="p-4 max-w-xl">
            <h4 className="title font-bold text-black">
              Louverline Blinds Pvt. Ltd, Bengaluru
            </h4>
            <p className="course text-slate-700">Web Development Intern</p>
            <p className="text-slate-500">Mar 2023-Present</p>
            <p className="desc object-cover text-sm">
              <ul className=" list-disc">
                <li>
                  Working on an inventory inquiry and custom dashboard website.
                </li>
                <li>Utilizing a changing Excel sheet as the database.</li>
                <li>
                  Designing the front end using React JS and Tailwind CSS.
                </li>
                <li>Implementing Firebase for authentication purposes.</li>
                <li>
                  Leveraging Firestore to store user information and
                  announcements.
                </li>
              </ul>
            </p>
          </div>
          <div className="p-4 max-w-xl">
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
          </div>
        </div>
      </div>

      {/* Portfolio & Works */}

      <h1
        id="projects"
        className=" text-center text-lg text-blue-500 font-black "
      >
        PROJECTS
      </h1>
      <div className=" p-4 w-full md:flex justify-around rounded-lg ">
        <a
          href="https://petu.jayaprakash.co/"
          className="overflow-hidden m-10 card w-1/3 h-fit rounded-xl bg-gradient-to-tr hover:shadow-md from-blue-400 to-blue-500 hover:from-orange-500 hover:to-orange-300 text-white"
        >
          <img src={web1} alt="" className=" " />
          <p className="m-2 hidden md:block">
            PetU: Complete Delivery Solution for restaurants using ReactJS,
            Firebase, Tailwind & Stripe
          </p>
        </a>
        <a
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
        </a>
      </div>
    </div>
  );
}

export default App;
