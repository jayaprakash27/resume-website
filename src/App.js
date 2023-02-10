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
} from "@mui/icons-material";
function App() {
  const ref = useRef();
  return (
    <div className="App scroll-smooth w-full justify-center bg-gradient-to-tr from-slate-50 to-slate-300">
      {/* Header */}

      <div className=" flex max-h-11 w-screen justify-around">
        <a href="" className=" p-2 font-semibold rounded-md text-2xl text-cyan-700">
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
            <li className=""><a href="mailto:sahoojayaprakash27@gmail.com">Contact Me</a></li>
            <li className="">
              <a href="https://drive.google.com/file/d/1aO1XFLP5z0sVSfYxjKqtDTGN11jiedBw/view?usp=share_link">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}

      <div className="hero  text-sm md:text-lg mt-12 w-screen md:flex justify-center align-center">
        <div className=" p-4 flex justify-center img">
          <img src={dpImage} className=" shadow-xl max-h-80 rounded-xl " />
        </div>
        <div className=" hero-text h-full max-w-md text-blue-700 p-6 md:p-8 flex-col justify-center text-center md:text-left space-y-4">
          <p className=" object-cover ">
            A pre-final year undergrad at the Veer Surendra Sai University of
            Technology, Burla, skilled in Java, React JS, and Python.
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
              <a href="https://drive.google.com/file/d/1aO1XFLP5z0sVSfYxjKqtDTGN11jiedBw/view?usp=share_link">
                Download My Resume
              </a>
            </button>
            <div className="flex text-blue-500 justify-center md:justify-start">
              <a className="pl-4 pr-4 hover:text-black" href="https://github.com/jayaprakash27">
                <GitHub />
              </a>
              <a className="pl-4 pr-4 hover:text-blue-700" href="https://www.linkedin.com/in/jayaprakash-sahoo-759052202/">
                <LinkedIn />
              </a>
              <a className="pl-4 pr-4 hover:text-blue-600" href="https://twitter.com/jaya77prakash">
                <Twitter />
              </a>
              <a className="pl-4 pr-4 hover:text-pink-600" href="https://www.instagram.com/jay.jsx">
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
              <p className="course text-black">Web Development: </p>
              <p className="course text-sm ">
                React JS, Node, Firebase, JavaScript, HTML, CSS, TailwindCSS
              </p>
            </div>
            <div className="pl-4 pr-4 pt-2 max-w-xl">
              <p className="course text-black">Programming Languages: </p>
              <p className="course text-sm ">Java, JavaScript, Python</p>
            </div>
            <div className="pl-4 pr-4 pt-2 max-w-xl">
              <p className="course text-black">RDBMS: </p>
              <p className="course text-sm ">MySQL</p>
            </div>
            <div className="pl-4 pr-4 pt-2 max-w-xl">
              <p className="course text-black">Graphics & Video: </p>
              <p className="course text-sm ">
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
              Idea Innovation Cell, VSSUT, Burla
            </h4>
            <p className="course text-slate-700">Technical Team Member</p>
            <p className="text-slate-500">May 2021-Present</p>
            <p className="desc object-cover text-sm">
              {" "}
              Working as a web developer for the official website of the Club
              and responsible for its maintenance. I also work as a Video editor
              in the club. I have created several promo videos of events and
              animated a few informative videos too.
            </p>
          </div>
          <div className="p-4 max-w-xl">
            <h4 className="title font-bold text-black">
              Yoga Club, VSSUT, Burla
            </h4>
            <p className="course text-slate-700">Head of Design</p>
            <p className="text-slate-500">Oct 2021- Present</p>
            <p className="desc object-cover text-sm">
              {" "}
              Working as the head of the design department of the club. I’m
              managing the team of Graphics designers and Video Editors so that
              the posters & teasers for several events can be made on time
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
            PetU: Complete Delivery Solution for restaurants using ReactJS, Firebase, Tailwind & Stripe
          </p>
        </a>
        <a
          href="https://eshopjp.netlify.app/"
          className=" overflow-hidden m-10 w-1/3 rounded-xl bg-gradient-to-tr hover:shadow-md hover:from-red-500 hover:to-slate-300 from-blue-400 to-blue-500 text-white"
        >
          <img src={web2} alt="" className=" " />
          <p className="m-2 top-0 hidden md:block">
            E-shopping: E Commerce website using ReactJS, Material UI, Commerce.js & Stripe.
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
