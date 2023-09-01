"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { CgFigma } from "react-icons/cg";
import { AiFillLinkedin } from "react-icons/ai";
import {
  SiMongodb,
  SiGraphql,
  SiPrisma,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen text-gray-700 py-20 tracking-[2px] font-light 
      md:leading-10 "
    >
      {/* First */}
      <section className="">
        <motion.p
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-2xl mx-2
          md:text-4xl"
        >
          Graduate at December 2022 with degree of{" "}
          <span className="font-semibold text-teal-700">Computer Science</span>{" "}
          Majoring at Business Information Technology
        </motion.p>
      </section>

      {/* Second */}
      <section className="flex justify-end">
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className=" w-10/12 text-justify pt-16 pb-5 pr-5 pl-5 ml-5 mt-7 bg-gray-100 text-teal-950 relative rounded-l-lg
          md:text-xl md:pt-24 md:mt-20"
        >
          <ul className="absolute top-5 flex gap-5 ">
            <li className="w-[15px] h-[15px] bg-teal-900 z-0 y-0 rounded-full animate-pulse"></li>
            <li className="w-[15px] h-[15px] bg-teal-900/60 z-0 y-0 rounded-full animate-pulse"></li>
            <li className="w-[15px] h-[15px] bg-teal-950/30 z-0 y-0 rounded-full animate-pulse"></li>
          </ul>
          With around two years of working experience, I have decided to fully
          commit on becoming a Full-Stack that Specialized on{" "}
          <span className="font-medium text-teal-700 underline underline-offset-8">
            Front-End
          </span>{" "}
          development
        </motion.div>
      </section>

      {/* Logo */}
      <motion.section
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
        className="flex justify-between py-12 text-2xl mx-2 text-teal-900/70
       md:py-20  md:text-4xl"
      >
        <SiNextdotjs></SiNextdotjs>
        <SiTailwindcss></SiTailwindcss>
        <SiPrisma></SiPrisma>
        <SiTypescript></SiTypescript>
        <FaReact></FaReact>
        <TbBrandFramerMotion></TbBrandFramerMotion>
        <CgFigma></CgFigma>
        <GrMysql></GrMysql>
        <SiMongodb></SiMongodb>
        <SiGraphql></SiGraphql>
      </motion.section>

      {/*  General*/}
      <motion.section
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="px-5 py-24 bg-teal-950/70
        md:px-20"
      >
        <h1
          className="text-2xl flex items-center gap-2 font-normal text-white
        md:text-4xl"
        >
          General Knowledge
          <AiFillLinkedin></AiFillLinkedin>
        </h1>
        <span
          className="flex mt-5
        md:mt-10"
        >
          <div className="h-auto w-[2px] bg-teal-300/50 rounded-full" />
          <ul className="flex flex-col gap-5 mx-5 text-gray-200">
            <li>UI/UX</li>
            <li>UML Diagram</li>
            <li>Programming</li>
            <li>Business Analytics</li>
            <li>Project Management</li>
          </ul>
        </span>
      </motion.section>

      {/*  Work*/}
      <motion.section
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="px-5 py-24 bg-teal-900/50
        md:px-20"
      >
        <h1
          className="text-2xl flex items-center gap-2 font-normal text-white
        md:text-4xl"
        >
          Work Experience
          <AiFillLinkedin></AiFillLinkedin>
        </h1>
        <span
          className="flex mt-5
        md:mt-10"
        >
          <div className="h-auto w-[2px] bg-teal-300/50 rounded-full" />
          <ul className="flex flex-col gap-5 mx-5">
            <li className="flex flex-col text-gray-200">
              <span className="text-white font-semibold">
                PricewaterhouseCoopers Indonesia
              </span>
              Marketing & Communications (website)
            </li>
            <li className="flex flex-col text-gray-200">
              <span className="font-semibold text-white">
                Transindo Primatama
              </span>
              Finance
            </li>
          </ul>
        </span>
      </motion.section>

      {/*  Organization*/}
      <motion.section
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="px-5 py-24 bg-teal-950/40
        md:px-20"
      >
        <h1
          className="text-2xl flex items-center gap-2 font-normal text-white
        md:text-4xl"
        >
          Organization Experience
          <AiFillLinkedin></AiFillLinkedin>
        </h1>
        <span
          className="flex mt-5
        md:mt-10"
        >
          <div className="h-auto w-[2px] bg-teal-300/50 rounded-full" />
          <ul className="flex flex-col gap-5 mx-5">
            <li className="flex flex-col text-gray-200">
              <span className="text-white font-semibold">
                Teach for Indonesia
              </span>
              Project Manager
            </li>
            <li className="flex flex-col text-gray-200">
              <span className="text-white font-semibold">
                Teach for Indonesia
              </span>
              Staff of Creative Design
            </li>
            <li className="flex flex-col text-gray-200">
              <span className="font-semibold text-white">HIMSISFO</span>
              Staff of Public Relation
            </li>
          </ul>
        </span>
      </motion.section>
    </motion.div>
  );
}

// {/* <div className="h-full w-full flex flex-col py-20 tracking-[.5px]">
// {/* Intro*/}
// <section className="flex flex-col items-center text-center">
//   <Image
//     src={"/profile.jpg"}
//     alt="profile"
//     width={200}
//     height={200}
//     className="rounded-full"
//   />
//   <p className="pt-20 font-semibold text-5xl">Ryan Fadhilah</p>
//   <p className="pt-10 text-teal-950/50">Software Engineer</p>
//   <p className="pt-10 px-5 text-gray-500 text-lg text-justify">
//     Fresh Graduate Computer Science Majoring at Business Information
//     Technology
//   </p>
//   <p className="pt-5 px-5 text-gray-500 text-lg text-justify"></p>
//   {/* <div className="w-full flex justify-end pt-10 px-5">
//     <p className="h-[2px] w-1/2  bg-gray-500"></p>
//   </div> */}
// </section>

// <section className="flex justify-between px-5 text-gray-500 text-2xl py-10 md:py-20">
//   <SiNextdotjs></SiNextdotjs>
//   <SiTailwindcss></SiTailwindcss>
//   <SiPrisma></SiPrisma>
//   <SiTypescript></SiTypescript>
//   <FaReact></FaReact>
//   <TbBrandFramerMotion></TbBrandFramerMotion>
//   <CgFigma></CgFigma>
//   <GrMysql></GrMysql>
//   <SiMongodb></SiMongodb>
//   <SiGraphql></SiGraphql>
// </section>

// <section className="flex flex-col mx-5">
//   <span>
//     <h1 className="text-2xl">General</h1>
//     <div className="h-full w-full flex gap-5 pt-2">
//       <span className="min-w-[2.5px] rounded-full h-auto bg-teal-500"></span>
//       <ul className="text-gray-800">
//         <li>Software Engineer</li>
//         <li>UI/UX</li>
//         <li>Business Analyst</li>
//         Project Management
//         <li>UML diagram</li>
//       </ul>
//     </div>
//   </span>
// </section>
// </div> */}
