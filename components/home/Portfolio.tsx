"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function Portfolio({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen text-gray-700 py-20 tracking-[2px] font-light 
  md:leading-10 "
    >
      {/* Todo List */}
      <section></section>
      {/* Todo List */}
      <section></section>
      {/* Todo List */}
      <section></section>
    </motion.div>
  );
}

export default Portfolio;
