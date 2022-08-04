import { useState } from "react";
import { motion } from "framer-motion";

export const Qualification = () => {
  const [show, setShow] = useState(true);
  const eduTab = () => {
    setShow(true);
  };
  const expTab = () => {
    setShow(false);
  };
  return (
    <section className="section" id="qualification">
      <div className="mb-20 flex flex-col items-center justify-center lg:mb-14 md:mb-12 sm:mb-10 xsm:mb-8 xxsm:mb-6">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.2, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="title1"
        >
          Qualification
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="title2"
        >
          Qualification
        </motion.h2>
      </div>
      <div className="w-full">
        <div className="mb-12 grid grid-cols-2 xl:mb-10 sm:mb-8 xxsm:mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className={`qualification-tab-title text-${
              show ? "primary-color" : "secondary-color"
            } mr-10 justify-self-end xsm:mr-5`}
            onClick={eduTab}
          >
            <i className="qualification-tab-icon fas fa-graduation-cap"></i>
            Education
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className={`qualification-tab-title text-${
              show ? "secondary-color" : "primary-color"
            } ml-10 justify-self-start xsm:ml-5`}
            onClick={expTab}
          >
            <i className="qualification-tab-icon fas fa-briefcase"></i>
            Experience
          </motion.div>
        </div>
        <div>
          {/* Education */}
          {show && (
            <div className="qualification_content">
              {/* 1 */}
              <div className="qualification-card">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  className="justify-self-end"
                >
                  <h3 className="qualification-card-h3 text-right">School</h3>
                  <span className="qualification-card-span1 text-right">
                    (SLC)
                  </span>
                  <span className="qualification-card-span text-right">
                    ABC - School
                  </span>
                  <div className="qualification-card-date text-right">
                    <i className="fas fa-calendar-days relative  mr-2"></i>
                    2002 - 2014
                  </div>
                </motion.div>
                <div>
                  <span className="qualification-card-span2"></span>
                  <span className="qualification-card-span3"></span>
                </div>
                <div></div>
              </div>
              {/* 2 */}
              <div className="qualification-card">
                <div></div>
                <div>
                  <span className="qualification-card-span2"></span>
                  <span className="qualification-card-span3"></span>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  className="justify-self-start"
                >
                  <h3 className="qualification-card-h3">High School</h3>
                  <span className="qualification-card-span1">
                    (Physical Science)
                  </span>
                  <span className="qualification-card-span">ABC - College</span>
                  <div className="qualification-card-date">
                    2014 - 2016
                    <i className="fas fa-calendar-days ml-2"></i>
                  </div>
                </motion.div>
              </div>
              {/* 3 */}
              <div className="qualification-card">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  className="justify-self-end"
                >
                  <h3 className="qualification-card-h3 text-right">B. Tech</h3>
                  <span className="qualification-card-span1 text-right">
                    (Computer Science)
                  </span>
                  <span className="qualification-card-span text-right">
                    ABC - University
                  </span>
                  <div className="qualification-card-date text-right">
                    <i className="fas fa-calendar-days relative  mr-2"></i>
                    2016 - 2020
                  </div>
                </motion.div>
                <div>
                  <span className="qualification-card-span2"></span>
                  <span className="qualification-card-span3"></span>
                </div>
                <div></div>
              </div>
              {/* 4 */}
              <div className="qualification-card">
                <div></div>
                <div>
                  <span className="qualification-card-span2"></span>
                  <span className="qualification-card-span3"></span>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  className="justify-self-start"
                >
                  <h3 className="qualification-card-h3">Masters</h3>
                  <span className="qualification-card-span1">
                    (Web Development)
                  </span>
                  <span className="qualification-card-span">
                    ABC University
                  </span>
                  <div className="qualification-card-date">
                    2020 - 2021
                    <i className="fas fa-calendar-days ml-2"></i>
                  </div>
                </motion.div>
              </div>
              {/* Empty */}
              <div className="qualification-card">
                <div></div>
                <div>
                  <span className="qualification-card-span3"></span>
                </div>
                <div></div>
              </div>
            </div>
          )}
          {/* Experience */}
          {!show && (
            <div className="qualification_content">
              {/* 1 */}
              <div className="qualification-card">
                <div></div>
                <div>
                  <span className="qualification-card-span2"></span>
                  <span className="qualification-card-span3"></span>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  className="justify-self-start"
                >
                  <h3 className="qualification-card-h3">Graphics Designer</h3>
                  <span className="qualification-card-span">ABC - Company</span>
                  <span className="qualification-card-span1">
                    Kathmandu, Nepal
                  </span>
                  <div className="qualification-card-date">
                    2016 - 2018
                    <i className="fas fa-calendar-days ml-2"></i>
                  </div>
                </motion.div>
              </div>
              {/* 2 */}
              <div className="qualification-card">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  className="justify-self-end"
                >
                  <h3 className="qualification-card-h3 text-right">
                    UI/UX Designer
                  </h3>
                  <span className="qualification-card-span text-right">
                    ABC - Company
                  </span>
                  <span className="qualification-card-span1 text-right">
                    Kathmandu, Nepal
                  </span>
                  <div className="qualification-card-date text-right">
                    <i className="fas fa-calendar-days relative  mr-2"></i>
                    2018 - 2020
                  </div>
                </motion.div>
                <div>
                  <span className="qualification-card-span2"></span>
                  <span className="qualification-card-span3"></span>
                </div>
                <div></div>
              </div>
              {/* 3 */}
              <div className="qualification-card">
                <div></div>
                <div>
                  <span className="qualification-card-span2"></span>
                  <span className="qualification-card-span3"></span>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                className="justify-self-start">
                  <h3 className="qualification-card-h3">Web Developer</h3>
                  <span className="qualification-card-span">ABC - Company</span>
                  <span className="qualification-card-span1">
                    Kathmandu, Nepal
                  </span>
                  <div className="qualification-card-date">
                    2020 - 2021
                    <i className="fas fa-calendar-days ml-2"></i>
                  </div>
                </motion.div>
              </div>
              {/* 4 */}
              <div className="qualification-card">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                className="justify-self-end">
                  <h3 className="qualification-card-h3 text-right">
                    Software Developer
                  </h3>
                  <span className="qualification-card-span text-right">
                    ABC - Company
                  </span>
                  <span className="qualification-card-span1 text-right">
                    Kathmandu, Nepal
                  </span>
                  <div className="qualification-card-date text-right">
                    <i className="fas fa-calendar-days relative  mr-2"></i>
                    20021 - 2022
                  </div>
                </motion.div>
                <div>
                  <span className="qualification-card-span2"></span>
                  <span className="qualification-card-span3"></span>
                </div>
                <div></div>
              </div>
              {/* Empty */}
              <div className="qualification-card">
                <div></div>
                <div>
                  <span className="qualification-card-span3"></span>
                </div>
                <div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
