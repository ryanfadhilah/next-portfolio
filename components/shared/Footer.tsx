"use client";
import { BiSolidChevronsRight, BiSolidChevronsLeft } from "react-icons/bi";
import { GoPlay } from "react-icons/go";
type Props = {};

import { motion } from "framer-motion";

export default function Footer({}: Props) {
  return (
    // <div className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-white/50 p-4 backdrop-blur-lg xs:px-7 lg:hidden text-black">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" fixed flex flex-col justify-between items-center gap-3
     backdrop-blur-sm bottom-0 z-30 w-full  px-3 py-5 tracking-[2px] text-gray-500 bg-white/5 text-3xl"
    >
      <div className="flex gap-5">
        <BiSolidChevronsLeft className="hover:text-black transition-all ease-out duration-200"></BiSolidChevronsLeft>
        <GoPlay className="hover:text-black transition-all ease-out duration-200"></GoPlay>
        <BiSolidChevronsRight className="hover:text-black transition-all ease-out duration-200"></BiSolidChevronsRight>
      </div>

      <div className="flex justify-center items-end md:w-1/2 w-11/12 ">
        <span className="bg-gray-400 w-full h-[3px] rounded-full"></span>
      </div>
    </motion.div>
  );
}
