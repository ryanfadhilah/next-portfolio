"use client";
// back ground curve
import { motion } from "framer-motion";

type Props = {};

export default function BGC({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, scale: 0.1 }}
        className="flex  absolute  border-4 border-black/50 rounded-full h-[500px] w-[500px] mt-52 animate-pulse
        md:h-[850px] md:w-[850px]"
      />
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [0.1, 1],
          opacity: [1, 0.5],
        }}
        transition={{ duration: 1 }}
        className=" absolute border border-black/50 rounded-full h-[800px] w-[800px] mt-52 animate-pulse"
      /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [0.1, 1],
          opacity: [1, 0.5],
        }}
        transition={{ duration: 1 }}
        className="absolute border-4 border-black/50 rounded-full h-[1150px] w-[1150px] mt-52 animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [0.1, 1],
          opacity: [1, 0.5],
        }}
        transition={{ duration: 1.5 }}
        className="absolute border-4 border-black rounded-full h-[1600px] w-[1600px] mt-52 animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [0.1, 1],
          opacity: [1, 0.5],
        }}
        transition={{ duration: 1.5 }}
        className="absolute border-4 border-black rounded-full h-[1200px] w-[1200px] mt-52 animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [0.5, 1],
          opacity: [1, 0.5],
        }}
        transition={{ duration: 1 }}
        className="absolute border-4 border-black rounded-full h-[1600px] w-[1600px] mt-52 animate-pulse"
      />
    </div>
  );
}

{
  /* <div className=" absolute border border-teal-900 rounded-full h-[200px] w-[200px] mt-52 animate-pulse" /> */
}
{
  /* <div className="absolute border border-teal-900 rounded-full h-[500px] w-[500px] mt-52 animate-pulse" /> */
}
