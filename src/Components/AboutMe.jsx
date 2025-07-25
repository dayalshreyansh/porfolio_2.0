import React from "react";

function AboutMe() {
  return (
    <div className="bg-[#222831]  py-10">
      <div className="lg:mx-40 mx-5 py-10">
        <div className="text-6xl font-semibold text-[#f2f2f2]" data-aos="fade-up">About Me</div>
        <div className="h-[5px] w-[70px] my-2 bg-[#F96D00] rounded-2xl" data-aos="fade-right" data-aos-delay="100"></div>
        <p data-aos="fade-up" className="mt-10 text-gray-400 w-[90vw] lg:w-[70vw] tracking-wide text-base/10">
          I’m Shreyansh Dayal, a dedicated Full-Stack Developer and a
          second-year B.Tech student at Delhi Technological University (DTU),
          pursuing Computer Science and Engineering (CSE). Based in India, I
          have a passion for technology, problem-solving, and building
          meaningful digital experiences.
        </p>
        <p data-aos="fade-up" className="my-2 text-gray-400 w-[70vw] tracking-wide text-base/10">
          I work primarily with the MERN stack (MongoDB, Express.js, React,
          Node.js) and have strong expertise in C++ and Data Structures &
          Algorithms, which I actively practice through Competitive Programming
          (CP).
        </p>
        <p data-aos="fade-up" className="text-gray-400 w-[70vw] tracking-wide text-base/10 ">
          
          Alongside development, I have a keen interest in UI/UX design and
          enjoy creating interfaces that are not only functional but also
          aesthetically pleasing. This blend of development and design helps me
          build products that deliver both performance and great user
          experience.
        </p>
        <p data-aos="fade-up" className="my-2 text-gray-400  w-[70vw] tracking-wide text-base/10">
          Outside of coding, I’m constantly learning, participating in
          hackathons and coding contests, and collaborating on side projects.
          I'm always open to new opportunities to grow, create, and connect with
          like-minded people.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
