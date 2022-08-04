import Image from "next/image";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-10">
        {/* 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="outer bg-[conic-gradient(var(--primary-color)_250deg,var(--form-color)_0deg)]"
        >
          <div className="inner">
            <div className="innermost">
              <Image
                alt="sass-logo"
                width="100%"
                height="100%"
                objectFit="contain"
                src="/images/sass.png"
              />
              {/* <img className="inner-icon" src="../images/sass.png" alt="" /> */}
            </div>
          </div>
        </motion.div>
        {/* 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="outer bg-[conic-gradient(var(--primary-color)_320deg,var(--form-color)_0deg)]"
        >
          <div className="inner">
            <div className="innermost">
              <Image
                alt="tailwindcss-logo"
                width="100%"
                height="100%"
                objectFit="contain"
                src="/images/tailwind.png"
              />
              {/* <img className="inner-icon" src="../images/tailwind.png" alt="" /> */}
            </div>
          </div>
        </motion.div>
        {/* 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="outer bg-[conic-gradient(var(--primary-color)_300deg,var(--form-color)_0deg)]"
        >
          <div className="inner">
            <div className="innermost">
              <Image
                alt="javascript-logo"
                width="100%"
                height="100%"
                objectFit="contain"
                src="/images/js.png"
              />
              {/* <img className="inner-icon" src="../images/js.png" alt="" /> */}
            </div>
          </div>
        </motion.div>
        {/* 4 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="outer bg-[conic-gradient(var(--primary-color)_290deg,var(--form-color)_0deg)]"
        >
          <div className="inner">
            <div className="innermost">
              <Image
                alt="reactjs-logo"
                width="100%"
                height="100%"
                objectFit="contain"
                src="/images/reactjs.png"
              />
              {/* <img className="inner-icon" src="../images/reactjs.png" alt="" /> */}
            </div>
          </div>
        </motion.div>
        {/* 5 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="outer bg-[conic-gradient(var(--primary-color)_260deg,var(--form-color)_0deg)]"
        >
          <div className="inner">
            <div className="innermost">
              <Image
                alt="nextjs-logo"
                width="100%"
                height="100%"
                objectFit="contain"
                src="/images/nextjs.png"
              />
              {/* <img className="inner-icon" src="../images/nextjs.png" alt="" /> */}
            </div>
          </div>
        </motion.div>
        {/* 6 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="outer bg-[conic-gradient(var(--primary-color)_320deg,var(--form-color)_0deg)]"
        >
          <div className="inner">
            <div className="innermost">
              <Image
                alt="git-logo"
                width="100%"
                height="100%"
                objectFit="contain"
                src="/images/git.png"
              />
              {/* <img className="inner-icon" src="../images/git.png" alt="" /> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
