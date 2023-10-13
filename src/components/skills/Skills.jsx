import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";

import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skills = ({ darkMode }) => {
  return (
    <div
      id="skills"
      // className={` bg-gradient-to-r from-purple-400 to-purple-800 `}
    >
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            Minhas Habilidades
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Aqui estão minhas habilidades.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={88} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={80}
                />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={80} />
                <ProgressBar
                  logo={<SiTailwindcss />}
                  name={"Tailwind CSS"}
                  value={50}
                />
                <ProgressBar
                  logo={<SiNextdotjs />}
                  name={"Next JS"}
                  value={50}
                />
                <ProgressBar
                  logo={<IoLogoNodejs />}
                  name={"Node JS"}
                  value={50}
                />
                <ProgressBar
                  logo={<SiTypescript />}
                  name={"Typescript"}
                  value={50}
                />
                <ProgressBar logo={<SiMysql />} name={"My SQL"} value={50} />
                <ProgressBar
                  logo={<SiMongodb />}
                  name={"Mongo DB"}
                  value={50}
                />
                <ProgressBar logo={<SiPrisma />} name={"Prisma"} value={75} />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoHtml5 />}
                black={"white"}
                white={"black"}
                skill={"HTML"}
              />
              <SkillBox
                logo={<IoLogoCss3 />}
                black={"white"}
                white={"black"}
                skill={"CSS"}
              />
              <SkillBox
                logo={<SiJavascript />}
                black={"white"}
                white={"black"}
                skill={"Javascript"}
              />
              <SkillBox
                logo={<IoLogoNodejs />}
                black={"white"}
                white={"black"}
                skill={"Node Js"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"white"}
                white={"black"}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<FaReact />}
                black={"black"}
                white={"white"}
                skill={"React JS"}
              />
              <SkillBox
                logo={<SiTailwindcss />}
                black={"black"}
                white={"white"}
                skill={"Tailwind"}
              />
              <SkillBox
                className=""
                logo={<SiTypescript />}
                black={"black"}
                white={"white"}
                skill={"Typescript"}
              />
              <SkillBox
                logo={<SiNextdotjs />}
                black={"black"}
                white={"white"}
                skill={"Next Js"}
              />
              <SkillBox
                className=""
                logo={
                  <SiMysql className=" text-white bg-black rounded-full h-fit border-white overflow-hidden" />
                }
                black={"black"}
                white={"white"}
                skill={"MySQL"}
              />
            </div>
          </div>
        </div>

        {/* icons */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
        >
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/html-5--v1.png"
            alt="icon"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/css3.png"
            alt="icon"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/javascript--v1.png"
            alt="icon"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/fluency/48/typescript--v1.png"
            alt="icon"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/cute-clipart/64/react-native.png"
            alt="icon"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/fluency/48/tailwind_css.png"
            alt="icon"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/fluency/48/nextjs.png"
            alt="icon"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/nodejs.png"
            alt="icon"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"
            alt="icon"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/fluency/48/mysql-logo.png"
            alt="icon"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/fluency/48/prisma-orm.png"
            alt="icon"
          />
          {/* <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/c-plus-plus-logo.png"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
