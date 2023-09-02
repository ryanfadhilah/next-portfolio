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
      className=" text-black pt-40 
      md:leading-10 "
    >
      {/* First */}
      <motion.section
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className=" w-5/6"
      >
        <p
          className="text-2xl mx-5
          md:text-4xl"
        >
          Graduate at December 2022 with degree of{" "}
          <span className="font-semibold text-teal-950 underline underline-offset-4">
            Computer Science
          </span>{" "}
          Majoring at Business Information Technology
        </p>
      </motion.section>

      {/* Second */}
      <motion.section
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="mx-5 mt-10"
      >
        <p>
          With around two years of working experience, I have decided to fully
          commit on becoming a Full-Stack that Specialized on{" "}
          <span className="font-medium text-teal-950 underline underline-offset-8">
            Front-End
          </span>
        </p>
      </motion.section>

      {/* Logo */}
      <motion.section
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
        className="flex text-teal-950
        justify-evenly mt-40 text-2xl
        md:justify-between md:text-4xl
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

      <section
        className=" 
        mt-40 mx-5"
      >
        <motion.h1
          initial={{ x: -100, opacity: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex items-start text-5xl gap-3 relative"
        >
          <span>General Knowledge</span>
          <motion.span
            initial={{ x: -50, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="w-[100px] h-[30px] bg-teal-700/50 backdrop-blur-[.5px] absolute "
          ></motion.span>

          {/* <AiFillLinkedin className="text-yellow-500 text-2xl"></AiFillLinkedin> */}
        </motion.h1>
        <ul className="flex flex-col gap-5 pt-10 text-xl">
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            UI/UX
          </motion.li>
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            UML Diagram
          </motion.li>
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            Programming
          </motion.li>
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            Data Analytic
          </motion.li>
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            Project Management
          </motion.li>
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
          ></motion.li>
        </ul>
      </section>

      {/*  Work*/}
      <section
        className=" text-black
        mt-40 mx-2"
      >
        {/* Title */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="flex items-center justify-center gap-2  
          text-4xl font-medium
        md:text-5xl"
        >
          <span className="flex">Work Experience</span>
          {/* <AiFillLinkedin className="text-yellow-500 text-2xl"></AiFillLinkedin> */}
        </motion.h1>

        {/* First Bubble */}
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center  bg-teal-700/50 rounded-xl text-white
        w-5/6 px-5 py-10 gap-5 mt-10"
        >
          {/* <span className="bg-teal-500 p-7 rounded-full"></span> */}
          <ul className="flex flex-col gap-5">
            <li className="font-semibold">PricewaterhouseCoopers Indonesia</li>
            <li className="font-light">Marketing & Communications (website)</li>
          </ul>
        </motion.div>

        {/* Second Bubble */}
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-row-reverse mt-10"
        >
          <div
            className="flex  items-center bg-teal-950 rounded-xl text-white
        w-5/6 p-5 gap-5"
          >
            {/* <span className="bg-teal-500 p-7 rounded-full"></span> */}
            <ul className="flex flex-col">
              <li className="font-semibold">Transindo Primatama</li>
              <li className="font-extralight">Finance</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/*  Organization*/}
      <motion.section
        initial={{ scale: 0.9, opacity: 0.5 }}
        transition={{ duration: 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="px-5 py-24 bg-teal-900/10 text-teal-950
        mt-40
        md:px-20"
      >
        <h1 className="flex items-start text-5xl gap-3">
          <span>Organization Experience</span>
          {/* <AiFillLinkedin className="text-2xl"></AiFillLinkedin> */}
        </h1>
        <span
          className="flex mt-5
        md:mt-10"
        >
          <div className="h-auto w-[2px] bg-teal-950 rounded-full" />
          <ul className="flex flex-col gap-5 mx-5">
            <li className="flex flex-col text-teal-950">
              <span className="font-semibold">Teach for Indonesia</span>
              <span>Project Manager</span>
            </li>
            <li className="flex flex-col text-teal-950">
              <span className="font-semibold">Teach for Indonesia</span>
              <span>Staff of Creative Design</span>
            </li>
            <li className="flex flex-col text-teal-950">
              <span className="font-semibold">HIMSISFO</span>
              <span>Staff of Public Relation</span>
            </li>
          </ul>
        </span>
      </motion.section>
    </motion.div>
  );
}
