export const Contact = () => {
  const submitted = () => {
    alert("Your message has been submitted. I will get back to you soon.");
  };
  return (
    <section className="section" id="contact">
      <div className="relative flex flex-col items-center justify-center md:-mb-5 xxsm:-mb-8">
        <h1 className="title1">Contact</h1>
        <h2 className="title2">Contact</h2>
      </div>
      <div className="flex w-full flex-row justify-between gap-8 sm:flex-col">
        {/* Left Content */}
        <div className="">
          <h2 className="mb-10 text-4xl font-extrabold lg:text-3xl sm:text-2xl sm:mb-6 xsm:mb-4">
            Let's discuss your project
          </h2>
          <ul className="">
            <li className="item flex">
              <i className="item-icon fas fa-phone mr-4"></i>
              <div>
                <h3 className="item-h3">Phone</h3>
                <span className="item-span">+977-9745964626</span>
              </div>
            </li>
            <li className="item flex">
              <i className="item-icon fas fa-envelope mr-4"></i>
              <div>
                <h3 className="item-h3">Email</h3>
                <span className="item-span">amodsumann@gmail.com</span>
              </div>
            </li>
            <li className="item flex">
              <i className="item-icon fas fa-map-marker mr-4"></i>
              <div>
                <h3 className="item-h3">Address</h3>
                <span className="item-span">Kathmandu - 14, Nepal</span>
              </div>
            </li>
          </ul>
        </div>
        {/* Right Content */}
        <div className="">
          <p className="mb-10 text-2xl leading-5 text-tertary-color lg:text-xl xsm:text-lg sm:text-center sm:mb-6 xsm:mb-4">
            I'm always open to discussing product{" "}
            <span className="block sm:hidden">
              <br />
            </span>
            <span className="font-bold text-secondary-color">
              design work or partnerships.
            </span>
          </p>
          <form action="" onSubmit={submitted} className="contact-form">
            <div className="first-row flex flex-row xxsm:flex-col justify-between">
              <input
                required
                className="text-tertary mb-5 xsm:mb-4 w-[48%] xxsm:w-full rounded-md border-none p-5 xsm:p-4 text-base focus:outline-none bg-form-color"
                type="text"
                placeholder="Name"
              />
              <input
                required
                className="text-tertary mb-5 xsm:mb-4 w-[48%] xxsm:w-full rounded-md border-none p-5 xsm:p-4 text-base focus:outline-none bg-form-color"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="second-row">
              <input
                required
                className="text-tertary mb-5 xsm:mb-4 w-full rounded-md border-none p-5 xsm:p-4 text-base focus:outline-none bg-form-color"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="third-row">
              <textarea
                required
                className="text-tertary h-44 w-full resize-none rounded-md border-none p-5 xsm:p-4 text-base focus:outline-none bg-form-color"
                name="message"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              className="button mt-[14px] xsm:mt-[10px] xxsm:w-full"
              type="submit"
            >
              Send Message<i className="fas fa-paper-plane ml-4"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
