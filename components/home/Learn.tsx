"use client";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Image from "next/image";
type Props = {};

export default function Learn({}: Props) {
  const { scrollYProgress } = useScroll();
  return (
    <>
      {/* Progress */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>

      {/* Main   */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-screen text-black tracking-[2px] 
      md:leading-10 py-40"
      >
        <section className="mx-5">
          <h1 className="text-5xl">Learn the fundamental</h1>
          <p></p>
        </section>

        {/* Learn Guided Projects */}
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
            <span>Learn Guided Projects</span>
            <motion.span
              initial={{ x: -50, opacity: 0.5 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="w-[88px] h-[30px] bg-teal-700/50 backdrop-blur-[.5px] absolute "
            ></motion.span>
          </motion.h1>
          <ul className="flex flex-col gap-5 pt-10 text-xl">
            <motion.li
              initial={{ scale: 0.9, opacity: 0.5 }}
              transition={{ duration: 1 }}
              whileInView={{ scale: 1, opacity: 1 }}
            >
              Find a guided projects that use best practices or even production
              scale level.
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
              Guided projects helps to guide and apply the theoretical knowledge
              acquired in a real-world context.
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
              This method is effective to learn industry-standard coding
              practices works.
            </motion.li>
            <motion.li
              initial={{ scale: 0.9, opacity: 0.5 }}
              transition={{ duration: 1 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="h-[2px] w-full bg-teal-950"
            />
            {/* <motion.li
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
          ></motion.li> */}
          </ul>
        </section>

        {/* Analyze the pattern */}
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
            <span>Analyze the pattern</span>
            <motion.span
              initial={{ x: -50, opacity: 0.5 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="w-[93px] h-[30px] bg-teal-700/50 backdrop-blur-[.5px] absolute "
            ></motion.span>
          </motion.h1>
          <ul className="flex flex-col gap-5 pt-10 text-xl">
            <motion.li
              initial={{ scale: 0.9, opacity: 0.5 }}
              transition={{ duration: 1 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="gap-5 grid md:grid-cols-2 grid-cols-1"
            >
              <p>
                Exploring various back-end options within a full-stack project
                can provide us with valuable insights into the true scope of the
                Front-end.
              </p>
              <Image
                src={"/next.png"}
                alt="next image"
                width={500}
                height={500}
              ></Image>
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
              className="gap-5 grid md:grid-cols-2 grid-cols-1"
            >
              <p>
                By experimenting with different back-end technologies and
                approaches, we can observe distinct patterns and interactions
                that emerge between the front-end and back-end components.
              </p>
              <Image
                src={"/tweet-cut.png"}
                alt="next image"
                width={500}
                height={500}
              ></Image>
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
              className="gap-5 grid md:grid-cols-2 grid-cols-1"
            >
              <p>
                This exploration helps us better understand the boundaries and
                requirements of the front-end development, allowing us to make
                informed decisions and optimizations for a more efficient and
                cohesive full-stack application.
              </p>
              <Image
                src={"/tweet-cut.png"}
                alt="next image"
                width={500}
                height={500}
              ></Image>
            </motion.li>
            <motion.li
              initial={{ scale: 0.9, opacity: 0.5 }}
              transition={{ duration: 1 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="h-[2px] w-full bg-teal-950"
            />
          </ul>
        </section>

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
            <span>Analyze the pattern</span>
            <motion.span
              initial={{ x: -50, opacity: 0.5 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="w-[93px] h-[30px] bg-teal-700/50 backdrop-blur-[.5px] absolute "
            ></motion.span>
          </motion.h1>
          <ul className="flex flex-col gap-5 pt-10 text-xl">
            <motion.li
              initial={{ scale: 0.9, opacity: 0.5 }}
              transition={{ duration: 1 }}
              whileInView={{ scale: 1, opacity: 1 }}
            >
              Exploring various back-end options within a full-stack project can
              provide us with valuable insights into the true scope of the
              Front-end.
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
              By experimenting with different back-end technologies and
              approaches, we can observe distinct patterns and interactions that
              emerge between the front-end and back-end components.
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
              This exploration helps us better understand the boundaries and
              requirements of the front-end development, allowing us to make
              informed decisions and optimizations for a more efficient and
              cohesive full-stack application.
            </motion.li>
            <motion.li
              initial={{ scale: 0.9, opacity: 0.5 }}
              transition={{ duration: 1 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="h-[2px] w-full bg-teal-950"
            />
          </ul>
        </section>

        <section>Improove</section>
      </motion.div>
    </>
  );
}
