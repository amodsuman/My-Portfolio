import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  // Theme

  // Navbar style on scroll
  const [navbar, setNavbar] = useState(true);
  const changeStyle = () => {
    if (window.scrollY > 0) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  // Scroll up icon appear if scroll > 500
  const [showUp, setShowUp] = useState(false);
  const changeOpacity = () => {
    if (window.scrollY > 500) {
      setShowUp(true);
    } else {
      setShowUp(false);
    }
  };

  // Hamburger menu
  const [showHam, setShowHam] = useState(false);
  const openHam = () => {
    setShowHam(true);
    document.body.style.overflow = "hidden";
  };
  const closeHam = () => {
    setShowHam(false);
    document.body.style.overflow = "auto";
  };

  // Theme mode
  const [mode, setMode] = useState(false);
  const darkMode = () => {
    setMode(true);
    var root = document.querySelector<HTMLElement>(":root");
    root!.style.setProperty("--primary-color", "#fa5b0f");
    root!.style.setProperty("--secondary-color", "#c5c4c9");
    root!.style.setProperty("--tertary-color", "#b8b8b8");
    root!.style.setProperty("--form-color", "#222222");
    root!.style.setProperty("--hover-color", "#ffffff");
    root!.style.setProperty("--border-color", "#969696");
    root!.style.setProperty("--bg-color", "#000000");
    root!.style.setProperty("--bg-color2", "#0000001a");
    root!.style.setProperty("--bg-color3", "#222222");
  };

  const lightMode = () => {
    setMode(false);
    var root = document.querySelector<HTMLElement>(":root");
    root!.style.setProperty("--primary-color", "#6a59d1");
    root!.style.setProperty("--secondary-color", "#0e2431");
    root!.style.setProperty("--tertary-color", "#777");
    root!.style.setProperty("--form-color", "#e5e7eb");
    root!.style.setProperty("--hover-color", "#4f40a3");
    root!.style.setProperty("--border-color", "#e5e7eb");
    root!.style.setProperty("--bg-color", "#fefefe");
    root!.style.setProperty("--bg-color2", "#0000001a");
    root!.style.setProperty("--bg-color3", "#ffffff");
  };

  // UseEffect
  useEffect(() => {
    changeStyle();
    changeOpacity();
    window.addEventListener("scroll", changeStyle);
    window.addEventListener("scroll", changeOpacity);
  });

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 z-[99999] w-full backdrop-blur-lg duration-500 ease-in-out ${
          !navbar ? "bg-[#ffffff1a] shadow-3xl" : "shadow-none"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 duration-500 ease-in-out md:h-16 sm:px-5 xsm:px-3">
          <a
            href="#home"
            className="relative ml-8 text-center text-xl font-semibold text-secondary-color"
          >
            Amod
            <i className="fas fa-chevron-left absolute top-0 left-0 -ml-8 -mt-4 rotate-45 text-2xl text-primary-color"></i>
            <i className="fas fa-chevron-right absolute bottom-0 right-0 -mr-8 -mb-4 rotate-45 text-2xl text-primary-color"></i>
          </a>
          <div
            className={`${
              showHam
                ? "md:fixed md:top-0 md:left-0 md:z-[999999999] md:flex md:h-screen md:w-full md:items-center md:justify-center md:bg-bg-color2 md:p-5 md:backdrop-blur-md md:duration-300 md:ease-in-out"
                : null
            }`}
          >
            <div
              className={`popup-scrollbar space-x-[50px] md:relative md:w-full md:max-w-md md:flex-col md:items-center md:space-x-0 md:rounded-xl 
              md:bg-bg-color3 md:p-10 md:shadow-3xl md:duration-500 md:ease-in-out mhh:h-full mhh:overflow-y-auto 
              ${showHam ? "md:flex md:opacity-100" : "md:hidden md:opacity-0"}`}
            >
              <div className="fixed top-0 right-0 hidden md:block">
                <div
                  onClick={closeHam}
                  className="nav-close-btn fixed top-0 right-0 m-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-bg-color3 shadow-3xl duration-300 ease-in-out hover:text-red-600"
                >
                  <i className="fas fa-times"></i>
                </div>
              </div>
              <a
                onClick={closeHam}
                href="#home"
                className="nav-item hidden md:block"
              >
                Home
              </a>
              <a onClick={closeHam} href="#about" className="nav-item">
                About
              </a>
              <a onClick={closeHam} href="#qualification" className="nav-item">
                Qualification
              </a>
              <a
                onClick={closeHam}
                href="#services"
                className="nav-item  hidden md:block"
              >
                Services
              </a>
              <a onClick={closeHam} href="#portfolio" className="nav-item">
                Portfolio
              </a>
              <a
                onClick={closeHam}
                href="#testimonials"
                className="nav-item hidden md:block"
              >
                Testimonials
              </a>
              <a
                onClick={closeHam}
                href="#contact"
                className="nav-item hidden md:block"
              >
                Contact
              </a>
            </div>
          </div>
          <div>
            <a
              href="/files/Amod's-Resume.pdf"
              download="/files/Amod's-Resume.pdf"
              className="ml-10 block cursor-pointer rounded-md border-2 border-primary-color bg-primary-color px-5 py-[8px] text-base font-medium text-white duration-300 ease-in-out hover:bg-transparent hover:text-primary-color md:hidden"
            >
              CV<i className="fas fa-download ml-3 text-sm"></i>
            </a>
            <motion.div
            className="flex">
              <i
                onClick={openHam}
                className="fas fa-ellipsis-vertical z-[99999999] hidden cursor-pointer border-r-[1px] pr-4 text-xl duration-300 ease-in-out hover:text-hover-color md:block"
              ></i>
              <div
                className={`ease duration-300 md:block md:opacity-100 ${
                  showUp ? "opacity-0" : "opacity-100"
                }`}
              >
                <i
                  onClick={lightMode}
                  className={`fa-regular fa-sun absolute right-0 top-40 z-[99999999] cursor-pointer rounded-l border-l-2 border-t-2 border-b-2 border-primary-color bg-primary-color py-2 px-3 text-xl text-white shadow-3xl duration-300 ease-in-out hover:bg-transparent hover:text-primary-color md:relative md:top-0 md:right-0 md:h-0 md:border-none md:p-0 md:pl-4 md:text-secondary-color md:hover:text-hover-color ${
                    mode ? "block" : "hidden"
                  }`}
                ></i>
                <i
                  onClick={darkMode}
                  className={`fa-regular fa-moon absolute right-0 top-40 z-[99999999] cursor-pointer rounded-l border-l-2 border-t-2 border-b-2 border-primary-color bg-primary-color py-2 px-3 text-xl text-white shadow-3xl duration-300 ease-in-out hover:bg-transparent hover:text-primary-color md:relative md:top-0 md:right-0 md:h-0 md:border-none md:p-0 md:pl-4 md:text-secondary-color md:hover:text-hover-color ${
                    mode ? "hidden" : "block"
                  }`}
                ></i>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>
      <a
        className={`fixed right-5 bottom-20 z-[99999] flex  h-10 w-10 cursor-pointer items-center justify-center rounded border-2 border-primary-color bg-primary-color text-lg text-white shadow-3xl duration-300 ease-in-out hover:bg-hover-color md:bottom-14 sm:bottom-10 xsm:h-8 xsm:w-8 ${
          showUp ? "opacity-100" : "opacity-0"
        }`}
        href="#home"
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Header;
