import { motion } from "framer-motion";
export const Contact = () => {
  const submitted = () => {
    alert("Your message has been submitted. I will get back to you soon.");
  };
  return (
    <section className="section" id="contact">
      <div className="mb-20 flex flex-col items-center justify-center lg:mb-14 md:mb-12 sm:mb-10 xsm:mb-8 xxsm:mb-6">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.2, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="title1"
        >
          Contact
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="title2"
        >
          Contact
        </motion.h2>
      </div>
      <div className="flex w-full flex-row justify-between gap-8 sm:flex-col">
        {/* Left Content */}
        <div className="">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="mb-10 text-4xl font-extrabold lg:text-3xl sm:mb-6 sm:text-2xl xsm:mb-4"
          >
            Let's discuss your project
          </motion.h2>
          <ul className="">
            <li className="item flex">
              <motion.i
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                className="item-icon fas fa-phone mr-4"
              ></motion.i>
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  className="item-h3"
                >
                  Phone
                </motion.h3>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
                  className="item-span"
                >
                  +977-9745964626
                </motion.span>
              </div>
            </li>
            <li className="item flex">
              <motion.i
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                className="item-icon fas fa-envelope mr-4"
              ></motion.i>
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  className="item-h3"
                >
                  Email
                </motion.h3>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
                  className="item-span"
                >
                  amodsumann@gmail.com
                </motion.span>
              </div>
            </li>
            <li className="item flex">
              <motion.i
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                className="item-icon fas fa-map-marker mr-4"
              ></motion.i>
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  className="item-h3"
                >
                  Address
                </motion.h3>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
                  className="item-span"
                >
                  Kathmandu - 14, Nepal
                </motion.span>
              </div>
            </li>
          </ul>
        </div>
        {/* Right Content */}
        <div className="">
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="mb-10 text-2xl leading-5 text-tertary-color lg:text-xl sm:mb-6 sm:text-center xsm:mb-4 xsm:text-lg"
          >
            I'm always open to discussing product{" "}
            <span className="block sm:hidden">
              <br />
            </span>
            <span className="font-bold text-secondary-color">
              design work or partnerships.
            </span>
          </motion.p>
          <form action="" onSubmit={submitted} className="contact-form">
            <div className="first-row flex flex-row justify-between xxsm:flex-col">
              <motion.input
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                required
                className="text-tertary mb-5 w-[48%] rounded-md border-none bg-form-color p-5 text-base focus:outline-none xsm:mb-4 xsm:p-4 xxsm:w-full"
                type="text"
                placeholder="Name"
              />
              <motion.input
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                required
                className="text-tertary mb-5 w-[48%] rounded-md border-none bg-form-color p-5 text-base focus:outline-none xsm:mb-4 xsm:p-4 xxsm:w-full"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="second-row">
              <motion.input
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                required
                className="text-tertary mb-5 w-full rounded-md border-none bg-form-color p-5 text-base focus:outline-none xsm:mb-4 xsm:p-4"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="third-row">
              <motion.textarea
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                required
                className="text-tertary h-44 w-full resize-none rounded-md border-none bg-form-color p-5 text-base focus:outline-none xsm:p-4"
                name="message"
                placeholder="Message"
              ></motion.textarea>
            </div>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className="button mt-[14px] xsm:mt-[10px] xxsm:w-full"
              type="submit"
            >
              Send Message<i className="fas fa-paper-plane ml-4"></i>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};
