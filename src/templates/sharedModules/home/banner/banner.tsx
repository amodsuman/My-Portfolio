import Image from "next/image";
import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <section
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-8 pt-20 md:pt-16 sm:px-5 xxsm:px-3"
      id="home"
    >
      <div className="flex w-full flex-row items-center justify-between md:mt-6 md:flex-col-reverse">
        {/* Socials and Details */}
        <div className="flex w-[48%] flex-row items-center md:mt-10 md:w-full sm:mt-8 sm:flex-col-reverse xxsm:mt-5">
          {/* Socials Icons */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="mr-10 flex flex-col md:absolute md:top-[16%] md:mr-0 sm:relative sm:mt-2 sm:flex-row sm:gap-5"
          >
            <a
              href="https://www.facebook.com/fb.amodsuman"
              className="my-3 mx-0 text-2xl text-primary-color duration-300 ease-in-out hover:text-hover-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/ig.amodsuman/"
              className="my-3 mx-0 text-2xl text-primary-color duration-300 ease-in-out hover:text-hover-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/amod-suman-29377a161/"
              className="my-3 mx-0 text-2xl text-primary-color duration-300 ease-in-out hover:text-hover-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/amodsuman"
              className="my-3 mx-0 text-2xl text-primary-color duration-300 ease-in-out hover:text-hover-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </motion.div>
          {/* Details */}
          <div className="md:flex md:w-full md:flex-col md:items-center">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className="text-6xl font-semibold leading-[70px] xl:text-5xl lg:text-4xl xxsm:text-3xl"
            >
              Hi, I am <span className="text-primary-color">Amod</span>
            </motion.h2>
            <motion.h3
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className="text-lg font-semibold leading-[50px] text-tertary-color xxsm:text-base xxsm:leading-[50px]"
            >
              Front - End Developer
            </motion.h3>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className="max-w-sm text-base text-tertary-color md:text-center xxsm:text-sm"
            >
              I create stunning websites for your business, Highly experienced
              in web design and development.
            </motion.p>
            <motion.a
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.5, delay: 0 }}
              href="#contact"
              className="button mt-6"
            >
              Contact Me<i className="fas fa-arrow-circle-right ml-4"></i>
            </motion.a>
          </div>
        </div>
        {/* Banner Image */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="w-[48%] pr-[4%] lg:px-0 md:w-[90%] md:max-w-[350px]"
        >
          <Image
            alt="my-image"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            src="/images/main-img.png"
          />
        </motion.div>
      </div>
      {/* Scroll Down */}
      <a
        href="#about"
        className="group mt-16 flex items-center justify-center text-base font-medium text-secondary-color duration-300 ease-in-out hover:text-hover-color sm:mt-10 xxsm:mt-5 xxsm:text-sm"
      >
        <i className="fas fa-computer-mouse mr-4 text-2xl text-primary-color duration-300 ease-in-out group-hover:text-hover-color"></i>
        Scroll Down
        <i className="fas fa-arrow-down ml-4 animate-updown text-xl text-primary-color duration-300 ease-in-out group-hover:text-hover-color"></i>
      </a>
    </section>
  );
};
