
import reactLogo from "../assets/React.svg";
import mogodbLogo from "../assets/MongoDB.svg";
import nodejsLogo from "../assets/Node.svg";
import expressLogo from "../assets/Express.svg";
import javaScriptLogo from "../assets/JavaScript.svg";
import cppLogo from "../assets/cpp.svg";
import htmlLogo from "../assets/HTML5.svg";
import cssLogo from "../assets/CSS3.svg";
import tailwindLogo from "../assets/tailwind.svg";


function Skills() {
  let skills = [
    {
      skill: "React",
      description: "",
      img: reactLogo,
    },
    {
      skill: "MongoDB",
      description: "",
      img: mogodbLogo,
    },
    {
      skill: "Node.js",
      description: "",
      img: nodejsLogo,
    },
    {
      skill: "Express.js",
      description: "",
      img: expressLogo,
    },
    {
      skill: "JavaScript",
      description: "",
      img: javaScriptLogo,
    },
    {
      skill: "Tailwind",
      description: "",
      img: tailwindLogo,
    },
    {
      skill: "CPP",
      description: "",
      img: cppLogo,
    },
    {
      skill: "HTML",
      description: "",
      img: htmlLogo,
    },
    {
      skill: "CSS",
      description: "",
      img: cssLogo,
    },
  ];
  return (
    <div className="bg-[#222831] min-h-[100vh] py-10">
      <div className="lg:mx-40 ">
        <div data-aos="fade-up" className="text-4xl lg:text-6xl text-[#f2f2f2] text-center font-semibold">
          Skills
        </div>
        <div  className="grid grid-cols-3 justify-items-center gap-4">
          {skills.map((e) => {
            return (
              <div data-aos="fade-up" className="w-[20vw] lg:w-[20%] my-20">
                <img src={e.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
