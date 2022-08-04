import Image from "next/image";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="section" id="about">
      <div className="mb-20 flex flex-col items-center justify-center lg:mb-14 md:mb-12 sm:mb-10 xsm:mb-8 xxsm:mb-6">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.2, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="title1"
        >
          About
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="title2"
        >
          About
        </motion.h2>
      </div>
      <div className="flex h-auto w-full flex-row items-center justify-between md:flex-col md:gap-10 xsm:gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="h-auto w-[48%] lg:w-[40%] md:w-full md:max-w-[500px]"
        >
          <div className="overflow-hidden rounded-xl">
            <Image
              alt="my-image"
              width="100%"
              height="76%"
              layout="responsive"
              objectFit="contain"
              src="/images/about-img.png"
            />
          </div>
        </motion.div>
        <div className="w-[48%] lg:w-[56%] md:flex md:w-full md:flex-col md:items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <h3 className="mb-3 text-[32px] font-semibold xl:mb-0 xl:text-[28px] md:mb-3 md:text-center md:text-[32px] xsm:mb-2 xsm:text-[28px]">
              I'm Amod
            </h3>
            <h4 className="mb-3 text-xl font-semibold xl:mb-1 xl:text-lg md:mb-3 md:text-center md:text-xl xsm:mb-3 xsm:text-lg">
              A Lead{" "}
              <span className="text-primary-color">Front-End Developer</span>{" "}
              based in <span className="text-primary-color">Kathmandu</span>
            </h4>
            <p className="mb-4 border-b-[1px] border-border-color pb-4 text-justify text-base text-tertary-color xl:mb-3 xl:pb-3 xl:text-sm md:mb-5 md:pb-5 md:text-base xsm:mb-4 xsm:pb-4 xsm:text-sm">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experience through meaningful
              interactions. Check out my portfolio.
            </p>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          >
            <ul className="flex w-full justify-between gap-8 xsm:gap-3">
              <li className="">
                <h3 className="text-[40px] font-bold xl:text-3xl xsm:text-3xl xxsm:text-xl">
                  5+
                </h3>
                <span className="text-sm text-tertary-color xl:text-xs xxsm:text-[10px]">
                  Years of
                  <br />
                  Experience
                </span>
              </li>
              <li className="">
                <h3 className="text-[40px] font-bold xl:text-3xl xsm:text-3xl xxsm:text-xl">
                  100+
                </h3>
                <span className="text-sm text-tertary-color xl:text-xs xxsm:text-[10px]">
                  Happy
                  <br />
                  Customers
                </span>
              </li>
              <li className="">
                <h3 className="text-[40px] font-bold xl:text-3xl xsm:text-3xl xxsm:text-xl">
                  100+
                </h3>
                <span className="text-sm text-tertary-color xl:text-xs xxsm:text-[10px]">
                  Projects
                  <br />
                  Completed
                </span>
              </li>
            </ul>
            <a
              href="/files/Amod's-Resume.pdf"
              download="/files/Amod's-Resume.pdf"
              className="button mt-6 xl:mt-3 md:mt-8 xsm:mt-6"
            >
              Download CV<i className="fas fa-download ml-4"></i>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
