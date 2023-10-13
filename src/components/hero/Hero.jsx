import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import ResumePDF from "../../Resume.pdf";
import BodyCircle from "./BodyCircle";

const Hero = () => {
  return (
    <div
      id="home"
      className={` bg-gradient-to-r from-purple-400 to-purple-800 `}
    >
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Olá, Eu sou o Pierry Alecsander de Lima
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["Web Developer", 2000, "Freelancer", 2000, ""]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-blue-500 text-4xl font-bold sm:text-3xl"
            />
            <p
            // data-aos="fade-up"
            >
              <TypeAnimation
                data-aos="fade-up"
                sequence={[
                  "Matinhos-PR",
                  2000,
                  "26 Anos",
                  2000,
                  "Nasc 19/10/1997",
                  2000,
                  "",
                ]}
                speed={30}
                wrapper="h3"
                repeat={Infinity}
                className=" text-blue-600 text-[1.1rem] font-medium w-3/4 md:w-full sm:text-[.95rem]"
                // className="text-yellow-500 text-4xl font-bold sm:text-3xl"
              />
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="https://www.instagram.com/pierrydelima/"
              target="blank"
              className="bg-gradient-to-r from-blue-400 to-blue-700 text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-black"
            >
              <span> Contrate-me</span>
            </a>
            <a
              href={ResumePDF}
              className=" bg-gradient-to-r from-pink-400 to-pink-700 text-white flex items-center gap-2 border- text-[1rem]  border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-black"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/P1MP07" target="blank">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/pierry-alecsander-de-lima-2a881a283/"
                  target="blank"
                >
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pierrydelima/"
                  target="blank"
                >
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/pierryalecsander.delima"
                  target="blank"
                >
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/p1mp_r" target="blank">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <BodyCircle />
        {/* <Background>
          <div className="background-circle">
            <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
              <div className="relative h-[88%] w-fit flex items-center sm:items-end">
                <img
                  data-aos="fade-up"
                  className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0 mt-8"
                  src=".//assets/photoperfil.png"
                  // src={mine}
                  alt="mine"
                />
                <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className=" relative cursor-pointer"
                  >
                    <img
                      className=" w-[135px] md:w-[90px] circle-text"
                      src=".//assets/photohero.webp"
                      alt="mine"
                    />
                    <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                    {/* absolute top-[50%] left-[50%] translate-x-[-50%]
                    translate-y-[-50%] */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </Background> */}
      </div>
    </div>
  );
};

export default Hero;

// const Background = styled.div`
//   .background-circle {
//     background-image: url(/assets/portalRM.png);
//     border-radius: 50%;
//     width: 550px;
//     height: 550px;
//     /* z-index: 9; */
//     /* box-shadow: 0 0 20px #00000080; */
//     /* padding: 10px 10px; */
//     margin-top: 30px;
//     background-position: center;
//     background-size: cover;
//   }
// `;
