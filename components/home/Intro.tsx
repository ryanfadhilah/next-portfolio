"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import BGC from "./BGC";
import Image from "next/image";

type Props = {};

export default function Intro({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Front-End", "Indonesia"],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center"
    >
      <BGC></BGC>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={"/profiles.jpeg"}
          alt="profile"
          width={120}
          height={120}
          className="rounded-full"
        ></Image>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col"
      >
        <h1 className="text-xl uppercase tracking-[10px]">Ryan Fadhilah</h1>
        <h2 className="text-gray-500 tracking-[2px] pt-2">Softawe Engineer</h2>
        <h3 className="text-gray-400 text-xs pt-10 tracking-[1px]">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h3>
      </motion.div>
    </motion.div>
  );
}
