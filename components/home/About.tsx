"use client";

import { motion, AnimatePresence } from "framer-motion";
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
import { useState } from "react";
import { ScrollerMotion } from "scroller-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen text-black py-20 
      md:leading-10 "
    >
      {/* First */}
      <section className=" w-5/6">
        <motion.p
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-2xl mx-5
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
          className=" w-5/6 text-justify bg-black/90 text-white text-xl relative rounded-l-lg
          pt-24 pb-5 px-5 mt-40
          "
        >
          <ul className="absolute top-5 flex gap-5 ">
            <li className="w-[15px] h-[15px] bg-red-500 z-0 y-0 rounded-full animate-pulse"></li>
            <li className="w-[15px] h-[15px] bg-yellow-500 z-0 y-0 rounded-full animate-pulse"></li>
            <li className="w-[15px] h-[15px] bg-teal-500 z-0 y-0 rounded-full animate-pulse"></li>
          </ul>
          With around two years of working experience, I have decided to fully
          commit on becoming a Full-Stack that Specialized on{" "}
          <span className="font-medium text-teal-500 underline underline-offset-8">
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
        className="flex   text-black
        justify-evenly mt-40 text-2xl
        md:justify-between
       "
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
        className=" bg-black/90
        mt-40 px-10 py-20 mx-5"
      >
        <h1
          className="flex items-center gap-2  text-white
          text-2xl 
        md:text-4xl"
        >
          <span>General Knowledge</span>
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
        initial={{ scale: 0.9, opacity: 0.5 }}
        transition={{ duration: 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className=" text-black
        mt-40 mx-2"
      >
        <h1
          className="flex items-center justify-center gap-2  
          text-2xl
        md:text-4xl"
        >
          <span className="flex">Work Experience</span>
          <AiFillLinkedin className="text-yellow-500"></AiFillLinkedin>
        </h1>

        <div className="mt-10">
          <div
            className="flex items-center bg-yellow-500 rounded-xl text-white
        w-5/6 px-5 py-10 gap-5"
          >
            {/* <span className="bg-teal-500 p-7 rounded-full"></span> */}
            <ul className="flex flex-col">
              <li className="font-semibold">
                PricewaterhouseCoopers Indonesia
              </li>
              <li className="font-light">
                Marketing & Communications (website)
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-row-reverse mt-10">
          <div
            className="flex  items-center bg-black/90 rounded-xl text-white
        w-5/6 p-5 gap-5"
          >
            {/* <span className="bg-teal-500 p-7 rounded-full"></span> */}
            <ul className="flex flex-col">
              <li className="font-semibold">Transindo Primatama</li>
              <li className="font-extralight">Finance</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/*  Organization*/}
      <motion.section
        initial={{ scale: 0.9, opacity: 0.5 }}
        transition={{ duration: 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="px-5 py-24 bg-teal-900/50
        mt-40
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
