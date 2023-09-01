"use client";

import { motion, AnimatePresence } from "framer-motion";
type Props = {};

export default function page({}: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="h-screen bg-yellow-500"
      >
        page
      </motion.div>
    </AnimatePresence>
  );
}
