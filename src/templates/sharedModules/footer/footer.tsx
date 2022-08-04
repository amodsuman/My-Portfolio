import { motion } from "framer-motion";
const Footer = () => {
  return (
    <section className="section">
      <div className="relative mb-10 flex w-full justify-center border-t-2 border-border-color">
        <motion.div
          initial={{ opacity: 0, scale: 0, y: -50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="absolute -mt-6 w-[320px] bg-bg-color text-center text-5xl font-semibold text-secondary-color sm:w-[280px] sm:text-4xl xsm:w-[150px] xsm:text-2xl"
        >
          Amod
          <i className="fas fa-chevron-left absolute top-0 left-0 ml-8 -mt-4 rotate-45 text-2xl text-primary-color sm:ml-10 xsm:ml-4"></i>
          <i className="fas fa-chevron-right absolute bottom-0 right-0 mr-8 -mb-4 rotate-45 text-2xl text-primary-color sm:mr-10 xsm:mr-4"></i>
        </motion.div>
      </div>
      <div className="flex flex-row items-center justify-between py-5 xsm:flex-col-reverse xsm:gap-5">
        <motion.h4
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
        className="text-center text-base text-secondary-color sm:text-sm xsm:text-xs">
          Copyright 2022 Amod | All Rights Reserved.
        </motion.h4>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
        className="flex flex-row space-x-4 sm:space-x-2 xsm:space-x-4">
          <a
            href="https://www.facebook.com/fb.amodsuman"
            className="text-3xl text-primary-color duration-300 ease-in-out hover:text-hover-color sm:text-2xl xsm:text-3xl xxsm:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-square-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/ig.amodsuman/"
            className="text-3xl text-primary-color duration-300 ease-in-out hover:text-hover-color sm:text-2xl xsm:text-3xl xxsm:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/amod-suman-29377a161/"
            className="text-3xl text-primary-color duration-300 ease-in-out hover:text-hover-color sm:text-2xl xsm:text-3xl xxsm:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/amodsuman"
            className="text-3xl text-primary-color duration-300 ease-in-out hover:text-hover-color sm:text-2xl xsm:text-3xl xxsm:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-square-github"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
