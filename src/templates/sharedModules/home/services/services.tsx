import { useState } from "react";
import { motion } from "framer-motion";

export const Services = () => {
  const [show1, setShow1] = useState(false);
  const openMore1 = () => {
    setShow1(true);
    document.body.style.overflow = "hidden";
  };
  const [show2, setShow2] = useState(false);
  const openMore2 = () => {
    setShow2(true);
    document.body.style.overflow = "hidden";
  };
  const [show3, setShow3] = useState(false);
  const openMore3 = () => {
    setShow3(true);
    document.body.style.overflow = "hidden";
  };
  const [show4, setShow4] = useState(false);
  const openMore4 = () => {
    setShow4(true);
    document.body.style.overflow = "hidden";
  };

  const closeMore = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="section" id="services">
      <div className="mb-20 flex flex-col items-center justify-center lg:mb-14 md:mb-12 sm:mb-10 xsm:mb-8 xxsm:mb-6">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.2, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="title1"
        >
          Services
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="title2"
        >
          Services
        </motion.h2>
      </div>
      <div className="w-full">
        <h3 className="mb-12 text-[32px] font-semibold xl:mb-10 sm:mb-8 sm:text-[28px] xsm:text-xl xxsm:mb-4 xxsm:text-lg">
          What I provide?
        </h3>
        <div className="grid grid-cols-4 gap-5 md:grid-cols-2 xsm:grid-cols-1">
          {/* 1 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="service"
          >
            <div className="service-card group">
              <i className="service-card-i fas fa-pencil-ruler"></i>
              <h3 className="service-card-h3">
                UI/UX
                <br />
                Consultancy
              </h3>
              <div className="service-card-learnmore" onClick={openMore1}>
                Learn More
                <i className="service-card-learnmore-i fas fa-long-arrow-alt-right"></i>
              </div>
            </div>
            {show1 && (
              <div className="service-popup">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  className="service-popup-body"
                >
                  <motion.i
                    initial={{ opacity: 0, scale: 0, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ ease: "easeIn", duration: 0.5 }}
                    className="service-popup-body-i fas fa-times"
                    onClick={closeMore}
                  ></motion.i>
                  <h3 className="service-popup-body-h3">UI/UX Consultancy</h3>
                  <h4 className="service-popup-body-h4">
                    What is UX consulting?
                  </h4>
                  <p className="service-popup-body-p">
                    UX consulting helps companies improve their product's
                    overall usability and optimize expenses by impleting the
                    right UX processes, methods and tools.
                  </p>
                  <h4 className="service-popup-body-h4">What I provide?</h4>
                  <ul>
                    <li className="service-popup-body-ul-li">
                      <i className="service-popup-body-ul-li-i fas fa-check-circle"></i>
                      Establish the right UX processes
                    </li>
                    <li className="service-popup-body-ul-li">
                      <i className="service-popup-body-ul-li-i fas fa-check-circle"></i>
                      Create exceptional user experiences
                    </li>
                    <li className="service-popup-body-ul-li">
                      <i className="service-popup-body-ul-li-i fas fa-check-circle"></i>
                      Discover new business opportunities
                    </li>
                    <li className="service-popup-body-ul-li">
                      <i className="service-popup-body-ul-li-i fas fa-check-circle"></i>
                      Save resources
                    </li>
                  </ul>
                </motion.div>
              </div>
            )}
          </motion.div>
          {/* 2 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="service"
          >
            <div className="service-card group">
              <i className="service-card-i fas fa-photo-video"></i>
              <h3 className="service-card-h3">
                Branding
                <br />
                &#38; Design
              </h3>
              <div className="service-card-learnmore" onClick={openMore2}>
                Learn More
                <i className="service-card-learnmore-i fas fa-long-arrow-alt-right"></i>
              </div>
            </div>
            {show2 && (
              <div className="service-popup">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  className="service-popup-body"
                >
                  <motion.i
                    initial={{ opacity: 0, scale: 0, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ ease: "easeIn", duration: 0.5 }}
                    className="service-popup-body-i fas fa-times"
                    onClick={closeMore}
                  ></motion.i>
                  <h3 className="service-popup-body-h3">
                    Branding &#38; Design
                  </h3>
                  <h4 className="service-popup-body-h4">
                    What is brand &#38; design?
                  </h4>
                  <p className="service-popup-body-p">
                    Brand design can be defined as one of the crutial marketing
                    practices of creating the name, logo, design, and the
                    symbolic elements related to the brand to create a
                    distinctive identity in comparison to the other brands in
                    the market and also providing impetus to the product
                    differentiation.
                  </p>
                  <h4 className="service-popup-body-h4">What I provide?</h4>
                  <ul>
                    <li className="service-popup-body-ul-li">
                      <i className="service-popup-body-ul-li-i fas fa-check-circle"></i>
                      Logo design
                    </li>
                    <li className="service-popup-body-ul-li">
                      <i className="service-popup-body-ul-li-i fas fa-check-circle"></i>
                      Banner design
                    </li>
                    <li className="service-popup-body-ul-li">
                      <i className="service-popup-body-ul-li-i fas fa-check-circle"></i>
                      Visual Identity Packages
                    </li>
                    <li className="service-popup-body-ul-li">
                      <i className="service-popup-body-ul-li-i fas fa-check-circle"></i>
                      Business Cards
                    </li>
                  </ul>
                </motion.div>
              </div>
            )}
          </motion.div>
          {/* 3 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="service"
          >
            <div className="service-card group">
              <i className="service-card-i fas fa-file-code"></i>
              <h3 className="service-card-h3">
                Web
                <br />
                Development
              </h3>
              <div className="service-card-learnmore" onClick={openMore3}>
                Learn More
                <i className="service-card-learnmore-i fas fa-long-arrow-alt-right"></i>
              </div>
            </div>
            {show3 && (
              <div className="service-popup">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  className="service-popup-body"
                >
                  <motion.i
                    initial={{ opacity: 0, scale: 0, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ ease: "easeIn", duration: 0.5 }}
                    className="service-popup-body-i fas fa-times"
                    onClick={closeMore}
                  ></motion.i>
                  <h3 className="service-popup-body-h3">Web Development</h3>
                  <h4 className="service-popup-body-h4">
                    What is web development?
                  </h4>
                  <p className="service-popup-body-p">
                    Web development services are used to design, build, support
                    adn evolve all types of web-based software.
                  </p>
                  <h4 className="service-popup-body-h4">What I provide?</h4>
                  <ul>
                    <li className="service-popup-body-ul-li">
                      <i className="service-popup-body-ul-li-i fas fa-check-circle"></i>
                      Web application development
                    </li>
                    <li className="service-popup-body-ul-li">
                      <i className="service-popup-body-ul-li-i fas fa-check-circle"></i>
                      Testing
                    </li>
                    <li className="service-popup-body-ul-li">
                      <i className="service-popup-body-ul-li-i fas fa-check-circle"></i>
                      Maintenance
                    </li>
                  </ul>
                </motion.div>
              </div>
            )}
          </motion.div>
          {/* 4 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="service"
          >
            <div className="service-card group">
              <i className="service-card-i fas fa-align-left"></i>
              <h3 className="service-card-h3">
                Content
                <br />
                Writing
              </h3>
              <div className="service-card-learnmore" onClick={openMore4}>
                Learn More
                <i className="service-card-learnmore-i fas fa-long-arrow-alt-right"></i>
              </div>
            </div>
            {show4 && (
              <div className="service-popup">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  className="service-popup-body"
                >
                  <motion.i
                    initial={{ opacity: 0, scale: 0, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ ease: "easeIn", duration: 0.5 }}
                    className="service-popup-body-i fas fa-times"
                    onClick={closeMore}
                  ></motion.i>
                  <h3 className="service-popup-body-h3">Content Writing</h3>
                  <h4 className="service-popup-body-h4">
                    What is content writing?
                  </h4>
                  <p className="service-popup-body-p">
                    Content writing is the process of planning, writing and
                    editing web contents, typically for digital marketing
                    purposes.
                  </p>
                  <h4 className="service-popup-body-h4">What I provide?</h4>
                  <ul>
                    <li className="service-popup-body-ul-li">
                      <i className="service-popup-body-ul-li-i fas fa-check-circle"></i>
                      Web content writing
                    </li>
                    <li className="service-popup-body-ul-li">
                      <i className="service-popup-body-ul-li-i fas fa-check-circle"></i>
                      Blog writing for websites
                    </li>
                    <li className="service-popup-body-ul-li">
                      <i className="service-popup-body-ul-li-i fas fa-check-circle"></i>
                      Social media conntent
                    </li>
                  </ul>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
