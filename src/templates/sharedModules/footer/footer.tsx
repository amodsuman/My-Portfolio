const Footer = () => {
  
  return (
    <section className="section">
      <div className="relative mb-10 flex w-full justify-center border-t-2 border-border-color">
        <div className="absolute -mt-6 w-[320px] bg-bg-color text-center text-5xl font-semibold text-secondary-color sm:text-4xl sm:w-[280px] xsm:text-2xl xsm:w-[150px]">
          Amod
          <i className="fas fa-chevron-left absolute top-0 left-0 ml-8 -mt-4 rotate-45 text-2xl text-primary-color sm:ml-10 xsm:ml-4"></i>
          <i className="fas fa-chevron-right absolute bottom-0 right-0 mr-8 -mb-4 rotate-45 text-2xl text-primary-color sm:mr-10 xsm:mr-4"></i>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between py-5 xsm:flex-col-reverse xsm:gap-5">
        <h4 className="text-base text-secondary-color sm:text-sm xsm:text-xs text-center">
          Copyright 2022 Amod | All Rights Reserved.
        </h4>
        <div className="flex flex-row space-x-4 sm:space-x-2 xsm:space-x-4">
          <a
            href="https://www.facebook.com/fb.amodsuman"
            className="text-3xl text-primary-color hover:text-hover-color ease-in-out duration-300 sm:text-2xl xsm:text-3xl xxsm:text-2xl"
          >
            <i className="fab fa-square-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/ig.amodsuman/"
            className="text-3xl text-primary-color hover:text-hover-color ease-in-out duration-300 sm:text-2xl xsm:text-3xl xxsm:text-2xl"
          >
            <i className="fab fa-instagram-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/amod-suman-29377a161/"
            className="text-3xl text-primary-color hover:text-hover-color ease-in-out duration-300 sm:text-2xl xsm:text-3xl xxsm:text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/amodsuman"
            className="text-3xl text-primary-color hover:text-hover-color ease-in-out duration-300 sm:text-2xl xsm:text-3xl xxsm:text-2xl"
          >
            <i className="fab fa-square-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
