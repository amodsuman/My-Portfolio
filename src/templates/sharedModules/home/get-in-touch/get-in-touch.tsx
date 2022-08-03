export const GetInTouch = () => {
  return (
    <section
      className="section"
      id="getInTouch"
    >
      <div className="flex w-full items-center justify-center">
        <div className="contact-card grid grid-cols-[auto_auto] xsm:grid-cols-1 w-4/5 lg:w-[90%] md:w-full items-center rounded-xl bg-bg-color3 p-12 shadow-3xl xl:p-8 lg:px-4 md:py-8 xsm:gap-4">
          <div className="uppercase leading-[60px] justify-self-center">
            <h4 className="text-lg font-normal leading-[30px] text-primary-color xl:text-base lg:text-sm sm:text-xs xsm:text-center">
              Let's Talk
            </h4>
            <h3 className="text-4xl font-medium xl:text-3xl lg:text-2xl sm:text-xl xsm:text-center">About Your</h3>
            <h2 className="bg-gradient-to-t from-transparent to-primary-color bg-clip-text text-7xl font-bold text-transparent opacity-90 xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-center">
              Next Project
            </h2>
          </div>
          <div className="justify-self-center">
            <a href="#contact" className="button md:text-sm sm:text-xs">
              Get In Touch<i className="fas fa-paper-plane ml-4"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
