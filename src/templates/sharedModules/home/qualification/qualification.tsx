import { useState } from "react";

export const Qualification = () => {
  const [show, setShow] = useState(true);
  const eduTab = () => {
    setShow(true);
  };
  const expTab = () => {
    setShow(false);
  };
  return (
    <section
      className="section"
      id="qualification"
    >
      <div className="relative flex flex-col items-center justify-center md:-mb-5 xxsm:-mb-8">
        <h1 className="title1">Qualification</h1>
        <h2 className="title2">Qualification</h2>
      </div>
      <div className="w-full">
        <div className="mb-12 grid grid-cols-2 xl:mb-10 sm:mb-8 xxsm:mb-4">
          <div
            className={`qualification-tab-title text-${
              show ? "primary-color" : "secondary-color"
            } mr-10 justify-self-end xsm:mr-5`}
            onClick={eduTab}
          >
            <i className="qualification-tab-icon fas fa-graduation-cap"></i>
            Education
          </div>
          <div
            className={`qualification-tab-title text-${
              show ? "secondary-color" : "primary-color"
            } ml-10 xsm:ml-5`}
            onClick={expTab}
          >
            <i className="qualification-tab-icon fas fa-briefcase"></i>
            Experience
          </div>
        </div>
        <div>
          {/* Education */}
          {show && (
            <div className="qualification_content">
              {/* 1 */}
              <div className="qualification-card">
                <div className="justify-self-end">
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
                </div>
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
                <div className="justify-self-start">
                  <h3 className="qualification-card-h3">High School</h3>
                  <span className="qualification-card-span1">
                    (Physical Science)
                  </span>
                  <span className="qualification-card-span">ABC - College</span>
                  <div className="qualification-card-date">
                    2014 - 2016
                    <i className="fas fa-calendar-days ml-2"></i>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="qualification-card">
                <div className="justify-self-end">
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
                </div>
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
                <div className="justify-self-start">
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
                </div>
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
                <div className="justify-self-start">
                  <h3 className="qualification-card-h3">Graphics Designer</h3>
                  <span className="qualification-card-span">ABC - Company</span>
                  <span className="qualification-card-span1">
                    Kathmandu, Nepal
                  </span>
                  <div className="qualification-card-date">
                    2016 - 2018
                    <i className="fas fa-calendar-days ml-2"></i>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="qualification-card">
                <div className="justify-self-end">
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
                </div>
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
                <div className="justify-self-start">
                  <h3 className="qualification-card-h3">Web Developer</h3>
                  <span className="qualification-card-span">ABC - Company</span>
                  <span className="qualification-card-span1">
                    Kathmandu, Nepal
                  </span>
                  <div className="qualification-card-date">
                    2020 - 2021
                    <i className="fas fa-calendar-days ml-2"></i>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="qualification-card">
                <div className="justify-self-end">
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
                </div>
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
