import React from "react";
import ellora from "../assets/Ellora.png";
import storyline from "../assets/Storyline.png";
import musicplayer from "../assets/MusicPlayer.png"
function Projects() {
  return (
    <div className="bg-[#393E46]  py-10">
      <div className="lg:mx-40 mx-5 py-10 ">
        <div data-aos="fade-up" className="text-4xl lg:text-6xl text-[#f2f2f2] font-semibold">
          My Latest Works
        </div>
        <div className="flex flex-col items-center lg:flex-row">
          <div data-aos="fade-left" className="my-20">
            <div className="h-[500px] w-[80vw] max-w-[500px] lg:h-[550px] lg:w-[500px] bg-[#222831] ">
              <img className="" src={ellora} alt="" />
              <div className="text-[#f2f2f2] p-3 mx-2 text-xl lg:text-2xl font-semibold">
                Ellora
              </div>
              <p className="p-3 mx-2 text-sm text-[#f2f2f2] opacity-60">
                Discover and shop a wide range of products with ease on our
                sleek, user-friendly e-commerce app. Enjoy secure payments, fast
                delivery, and exclusive deals — all in one place.
              </p>
              <div className="flex flex-row justify-around">
                <div className=" m-3 w-[40%] bg-[#f96c00a0] p-3 text-center hover:bg-[#F96D00] hover-target">
                  Visit Code
                </div>
                <div className=" m-3 w-[40%] bg-[#f96c00a0] p-3 text-center hover:bg-[#F96D00] hover-target">
                  Visit Website
                </div>
              </div>
            </div>
            <div className="h-[500px] w-[80vw] max-w-[500px] lg:h-[550px] lg:w-[500px] bg-[#222831] ">
              <img className="" src={ellora} alt="" />
              <div className="text-[#f2f2f2] p-3 mx-2 text-xl lg:text-2xl font-semibold">
                Ellora
              </div>
              <p className="p-3 mx-2 text-sm text-[#f2f2f2] opacity-60">
                Discover and shop a wide range of products with ease on our
                sleek, user-friendly e-commerce app. Enjoy secure payments, fast
                delivery, and exclusive deals — all in one place.
              </p>
              <div className="flex flex-row justify-around">
                <div className=" m-3 w-[40%] bg-[#f96c00a0] p-3 text-center hover:bg-[#F96D00] hover-target">
                  Visit Code
                </div>
                <div className=" m-3 w-[40%] bg-[#f96c00a0] p-3 text-center hover:bg-[#F96D00] hover-target">
                  Visit Website
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-6xl text-[#f2f2f2] font-semibold" data-aos="fade-up" id="other">Other Works</div>
        <div className="flex flex-row gap-10 overflow-x-auto">
          <div className="my-20" data-aos="fade-left">
            <div className="h-[450px] w-[300px] bg-[#222831] ">
              <img className="h-[200px]" src={storyline} alt="" />
              <div className="text-[#f2f2f2] p-3 mx-2 text-2xl font-semibold">
                StoryLine
              </div>
              <p className="p-3 mx-2 text-[#f2f2f2] opacity-60">
                A new App that keeps you us to date with the major events in the
                world.
              </p>
              <div className="flex flex-row justify-around">
                <a className=" m-3 w-[40%] bg-[#f96c00a0] p-3 text-center hover:bg-[#F96D00] hover-target "href="https://github.com/dayalshreyansh/Storyline-New-app"
                    target="_blank">
                    Visit Code
                </a>
              </div>
            </div>
          </div>
          <div className="my-20" data-aos="fade-left" data-aos-delay="100">
            <div className="h-[450px] w-[300px] bg-[#222831] ">
              <img className="h-[200px]" src={musicplayer} alt="" />
              <div className="text-[#f2f2f2] p-3 mx-2 text-2xl font-semibold">
                Basic Music Player
              </div>
              <p className="p-3 mx-2 text-[#f2f2f2] opacity-60">
                A simple music Player using JavaScrtipt.Provide fuctionalities like delete from playlist etc.
              </p>
              <div className="flex flex-row justify-around">
                <a className=" m-3 w-[40%] bg-[#f96c00a0] p-3 text-center hover:bg-[#F96D00] hover-target"href="https://github.com/dayalshreyansh/musicplayer-basic"
                    target="_blank">
                    Visit Code
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
