import React from "react";

function Contact() {
  return (
    <div className="bg-[#393E46]  py-10">
      <div className="mx-10 lg:mx-40 py-10">
        <div className="flex flex-row">
          <div>
            <div className="text-5xl text-[#f2f2f2] font-semibold mb-2" data-aos="fade-up">
              Got a Project?
            </div>
            <p className="text-gray-400" data-aos="fade-up">
              Let's build it together.
            </p>
            <div className="mt-20 hover-target group text-[#F96D00] font-semibold" data-aos="fade-right">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shreyansh.dayal0604@gmail.com&su=Hello&body=Message%20goes%20here"
                target="_blank"
              >
                Mail
                <i className="fa-solid fa-arrow-right mx-2 md:mx-3 transform transition-all ease-out group-hover:translate-x-1"></i>
              </a>
            </div>
            <div className="mt-2 hover-target group text-[#F96D00] font-semibold" data-aos="fade-right">
              <a
                href="https://www.linkedin.com/in/shreyansh-dayal-07323031b/"
                target="_blank"
              >
                LinkedIn
                <i className="fa-solid fa-arrow-right mx-2 md:mx-3 transform transition-all ease-out group-hover:translate-x-1"></i>
              </a>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
