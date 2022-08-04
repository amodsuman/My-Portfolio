import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, EffectCreative } from "swiper";

export const Testimonials = () => {
  return (
    <section
      className="relative mx-auto w-full pt-32 lg:pt-24 md:pt-20 sm:pt-16"
      id="testimonials"
    >
      <div className="background-testimonials flex h-full items-center justify-center px-8 sm:px-5 xsm:px-3">
        {/* Grid */}
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[auto_auto] items-center justify-between lg:grid-cols-1 lg:gap-10">
          {/* Col 1 */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
          className="rounded-3xl border-x-[16px] border-bg-color lg:border-x-[0px]">
            <div className="relative overflow-hidden rounded-3xl border-8 border-border-color bg-bg-color">
              <Swiper
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                grabCursor={true}
                loop={true}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                modules={[EffectCreative, Autoplay]}
                className="mySwiper m-0 w-[600px] xl:w-[400px] lg:w-full"
              >
                <SwiperSlide>
                  <div className="flex h-full flex-col justify-center bg-bg-color p-10 text-secondary-color xsm:p-5 xxsm:p-3">
                    <i className="fas fa-quote-left text-6xl text-primary-color xsm:text-5xl xxsm:text-4xl"></i>
                    <p className="mb-5 border-b-[1px] py-5 text-justify text-lg md:text-base xsm:text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Porro rerum nobis quae consequuntur obcaecati, pariatur
                      laudantium similique temporibus modi, natus quas harum
                      tempora dignissimos eius sint dolorem delectus veritatis
                      assumenda in, voluptas rem perspiciatis.
                    </p>
                    <div className="flex flex-row items-center gap-5">
                      <div className="h-[80px] w-[80px] flex-shrink-0 overflow-clip rounded-lg xsm:h-16 xsm:w-16 xxsm:h-12 xxsm:w-12">
                        <Image
                          alt="client-1"
                          width="100%"
                          height="100%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/client1.jpg"
                        />
                      </div>
                      <div className="">
                        <h3 className="text-xl font-bold text-primary-color md:text-base xsm:text-sm">
                          Name Surname
                        </h3>
                        <h4 className="text-base md:text-sm xsm:text-xs">
                          ABC Company
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex h-full flex-col justify-center bg-bg-color p-10 text-secondary-color xsm:p-5 xxsm:p-3">
                    <i className="fas fa-quote-left text-6xl text-primary-color xsm:text-5xl xxsm:text-4xl"></i>
                    <p className="mb-5 border-b-[1px] py-5 text-justify text-lg md:text-base xsm:text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Porro rerum nobis quae consequuntur obcaecati, pariatur
                      laudantium similique temporibus modi, natus quas harum
                      tempora dignissimos eius sint dolorem delectus veritatis
                      assumenda in, voluptas rem perspiciatis.
                    </p>
                    <div className="flex flex-row items-center gap-5">
                      <div className="h-[80px] w-[80px] flex-shrink-0 overflow-clip rounded-lg xsm:h-16 xsm:w-16 xxsm:h-12 xxsm:w-12">
                        <Image
                          alt="client-2"
                          width="100%"
                          height="100%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/client2.jpg"
                        />
                      </div>
                      <div className="">
                        <h3 className="text-xl font-bold text-primary-color md:text-base xsm:text-sm">
                          Name Surname
                        </h3>
                        <h4 className="text-base md:text-sm xsm:text-xs">
                          ABC Company
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex h-full flex-col justify-center bg-bg-color p-10 text-secondary-color xsm:p-5 xxsm:p-3">
                    <i className="fas fa-quote-left text-6xl text-primary-color xsm:text-5xl xxsm:text-4xl"></i>
                    <p className="mb-5 border-b-[1px] py-5 text-justify text-lg md:text-base xsm:text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Porro rerum nobis quae consequuntur obcaecati, pariatur
                      laudantium similique temporibus modi, natus quas harum
                      tempora dignissimos eius sint dolorem delectus veritatis
                      assumenda in, voluptas rem perspiciatis.
                    </p>
                    <div className="flex flex-row items-center gap-5">
                      <div className="h-[80px] w-[80px] flex-shrink-0 overflow-clip rounded-lg xsm:h-16 xsm:w-16 xxsm:h-12 xxsm:w-12">
                        <Image
                          alt="client-3"
                          width="100%"
                          height="100%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/client3.jpg"
                        />
                      </div>
                      <div className="">
                        <h3 className="text-xl font-bold text-primary-color md:text-base xsm:text-sm">
                          Name Surname
                        </h3>
                        <h4 className="text-base md:text-sm xsm:text-xs">
                          ABC Company
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex h-full flex-col justify-center bg-bg-color p-10 text-secondary-color xsm:p-5 xxsm:p-3">
                    <i className="fas fa-quote-left text-6xl text-primary-color xsm:text-5xl xxsm:text-4xl"></i>
                    <p className="mb-5 border-b-[1px] py-5 text-justify text-lg md:text-base xsm:text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Porro rerum nobis quae consequuntur obcaecati, pariatur
                      laudantium similique temporibus modi, natus quas harum
                      tempora dignissimos eius sint dolorem delectus veritatis
                      assumenda in, voluptas rem perspiciatis.
                    </p>
                    <div className="flex flex-row items-center gap-5">
                      <div className="h-[80px] w-[80px] flex-shrink-0 overflow-clip rounded-lg xsm:h-16 xsm:w-16 xxsm:h-12 xxsm:w-12">
                        <Image
                          alt="client-4"
                          width="100%"
                          height="100%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/client4.jpg"
                        />
                      </div>
                      <div className="">
                        <h3 className="text-xl font-bold text-primary-color md:text-base xsm:text-sm">
                          Name Surname
                        </h3>
                        <h4 className="text-base md:text-sm xsm:text-xs">
                          ABC Company
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </motion.div>

          {/* Col 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
          className="flex w-[450px] justify-self-center xl:w-[410px] lg:w-[250px] sm:w-[200px] xxsm:w-full xxsm:px-10">
            <div className="w-full overflow-hidden rounded-full">
              <Image
                alt="clients"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                src="/images/clients.jpg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
