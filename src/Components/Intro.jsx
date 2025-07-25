import React from "react";
import waves from "../assets/layered-waves-haikei (3).svg";
function Intro() {
  return (
    <div className="flex flex-col">
      <div  className="flex flex-col lg:flex-row justify-between items-start  px-5 lg:px-40 py-10 h-[75vh] lg:h-[50vh] ">
        <div className="flex flex-col gap-2 font-semibold">
          <div
            data-aos="fade-left"
            className="text-[#F2F2F2] text-5xl md:text-7xl uppercase"
          >
            Shreyansh
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-[#F2F2F2] text-5xl md:text-7xl uppercase"
          >
            Dayal
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center h-[8px] md:h-[10px] bg-[#F96D00] rounded-xl w-[80px] md:w-[100px] my-2"
          ></div>
          <div className="my-20 flex flex-row gap-10 text-4xl text-[#f2f2f2] ">
            <a
              href="https://github.com/dayalshreyansh"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i class="fa-brands fa-github hover:text-[#F96D00] opacity-50  hover-target hover:opacity-100"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/shreyansh-dayal-07323031b/"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i class="fa-brands fa-linkedin hover:text-[#F96D00] opacity-50  hover-target hover:opacity-100"></i>
            </a>
            <a
              href="https://www.instagram.com/shreyansh_dayal0"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i class="fa-brands fa-instagram hover:text-[#F96D00] opacity-50  hover-target hover:opacity-100"></i>
            </a>
            <a
              href="https://x.com/dayal_shreyansh"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <i class="fa-brands fa-x-twitter hover:text-[#F96D00] opacity-50  hover-target hover:opacity-100"></i>
            </a>
          </div>
        </div>

        <div className="hidden mt-10 lg:block lg:mt-0 lg:ml-10 flex flex-col text-white max-w-full lg:max-w-[350px]">
          <div
            className="text-gray-400  text-sm md:text-base "
            data-aos="fade-right"
          >
            Introduction
          </div>
          <div
            className="text-3xl md:text-5xl"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Developer.
          </div>
          <div
            className="text-3xl md:text-5xl"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Problem Solver.
          </div>
          <div
            className="text-gray-400  mt-6 md:mt-10 text-sm md:text-base"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            I'm Shreyansh Dayal, a passionate Full-Stack Developer who loves
            turning ideas into functional and impactful products. Always
            learning, always building.
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="text-[#F96D00] group mt-4 md:mt-5 font-semibold text-lg md:text-xl flex items-center hover-target"
          >
            <a href="#aboutme">About Me</a>
            <i className="fa-solid fa-arrow-right mx-2 md:mx-3 transform transition-all ease-out group-hover:translate-x-1"></i>
          </div>
        </div>
      </div>
      <img className="w-[100vw]  order-last" data-aos="fade-up" src={waves} alt="" />
    </div>
  );
}

export default Intro;
