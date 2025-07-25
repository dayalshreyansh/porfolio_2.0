import React from "react";

function WhatIDo() {
  return (
    <div className="bg-[#222831] py-10">
      <div className="flex flex-col lg:flex-row lg:mx-40 mx-5 lg:py-30 gap-20 ">
        <div className="lg:w-[50%] flex flex-col gap-10 m-auto">
          <div data-aos="fade-up">
            <div
            className="h-[200px] w-[90vw] lg:w-[90%] shadow flex flex-row items-center gap-2 bg-[#393E46] hover-target transform transition-all hover:scale-102 ease-out duration-300"
            
          >
            <div className="w-[30%] flex justify-center ">
              <i class="fa-solid fa-desktop text-3xl lg:text-5xl text-[#F2F2F2] bg-[#F96D00] p-5 rounded-full"></i>
            </div>
            <div className="text-[#F2F2F2] font-semibold">
              <div className="text-2xl">Web Development</div>
              <div className="opacity-50">4 Projects</div>
            </div>
          </div>
          </div>
          <div data-aos="fade-up"
            data-aos-delay="100">
             <div
            className="h-[200px] w-[90vw] lg:w-[90%] shadow flex flex-row items-center gap-2 bg-[#393E46] hover-target transform transition-all hover:scale-102 ease-in-out duration-300"
            
          >
            <div className=" w-[30%] flex justify-center ">
              <i class="fa-solid fa-code text-3xl lg:text-5xl text-[#F2F2F2] bg-[#F96D00] p-5 rounded-full"></i>
            </div>
            <div className="text-[#F2F2F2] font-semibold">
              <div className="text-2xl">DSA</div>
              <div className="opacity-50">100+ Problems</div>
            </div>
          </div>
          </div>
         
        </div>
        <div className="w-[90vw] lg:w-[40%]">
          <div
            className="text-[#f2f2f2] text-6xl font-semibold tracking-wide mb-10"
            data-aos="fade-up"
          >
            What Do I Do
          </div>
          <div data-aos="fade-up" className="text-gray-400  text-base/10 tracking-wide pl-3">
            I specialize in building full-stack web applications that are
            functional, scalable, and user-friendly. From crafting clean,
            responsive front-end designs to developing efficient back-end
            systems, I love transforming ideas into impactful products.
          </div>
          <br />
          <br />
          <div data-aos="fade-up"  className="text-gray-400  text-base/10 tracking-wide pl-3">
            Alongside development, I actively engage in Competitive Programming,
            constantly sharpening my problem-solving and algorithmic thinking
            skills. Whether it’s designing APIs, optimizing system performance,
            or tackling coding challenges, I enjoy creating solutions that make
            a difference.
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
