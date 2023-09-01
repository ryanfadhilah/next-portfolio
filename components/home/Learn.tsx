"use client";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

export default function Learn({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen text-gray-700 py-20 tracking-[2px] font-light 
      md:leading-10 "
    >
      <section>Learn the fundamental: HTML CSS JS</section>

      <section>Learn guided projects</section>

      <section>Analyze the pattern</section>

      <section>
        Exploring various back-end options within a full-stack project can
        provide us with valuable insights into the true scope of the Front-end.
      </section>
      <section>
        By experimenting with different back-end technologies and approaches, we
        can observe distinct patterns and interactions that emerge between the
        front-end and back-end components.
      </section>
      <section>
        This exploration helps us better understand the boundaries and
        requirements of the front-end development, allowing us to make informed
        decisions and optimizations for a more efficient and cohesive full-stack
        application.
      </section>
    </motion.div>
  );
}
