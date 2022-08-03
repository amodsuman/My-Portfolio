import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay, EffectCreative } from "swiper";
import Image from "next/image";

export const Portfolio = () => {
  const [detail1, setDetail1] = useState(false);
  const openDetail1 = () => {
    setDetail1(true);
    document.body.style.overflow = "hidden";
  };
  const [detail2, setDetail2] = useState(false);
  const openDetail2 = () => {
    setDetail2(true);
    document.body.style.overflow = "hidden";
  };
  const [detail3, setDetail3] = useState(false);
  const openDetail3 = () => {
    setDetail3(true);
    document.body.style.overflow = "hidden";
  };
  const [detail4, setDetail4] = useState(false);
  const openDetail4 = () => {
    setDetail4(true);
    document.body.style.overflow = "hidden";
  };
  const [detail5, setDetail5] = useState(false);
  const openDetail5 = () => {
    setDetail5(true);
    document.body.style.overflow = "hidden";
  };
  const [detail6, setDetail6] = useState(false);
  const openDetail6 = () => {
    setDetail6(true);
    document.body.style.overflow = "hidden";
  };

  const closeDetail = () => {
    setDetail1(false);
    setDetail2(false);
    setDetail3(false);
    setDetail4(false);
    setDetail5(false);
    setDetail6(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="section" id="portfolio">
      <div className="relative flex flex-col items-center justify-center md:-mb-5 xxsm:-mb-8">
        <h1 className="title1">Portfolio</h1>
        <h2 className="title2">Portfolio</h2>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="grid w-full max-w-full grid-cols-3  gap-5 md:grid-cols-2 xsm:grid-cols-1">
          {/* 1 */}
          <div>
            <div className="card group" onClick={openDetail1}>
              <div className="card-overlay"></div>
              <div className="card-info">
                <h3 className="card-info-h3">Web Design</h3>
                <span className="card-info-span">Youtube</span>
              </div>
              <Image
                alt="portfolio-1"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                src="/images/port-img1.jpg"
              />
            </div>
            {detail1 && (
              <div className="portfolio-popup">
                <div className="portfolio-popup-body">
                  <i
                    className="portfolio-popup-body-icon fas fa-times portfolio-close-btn"
                    onClick={closeDetail}
                  ></i>
                  <h3 className="portfolio-popup-body-h3">Web Design</h3>
                  <div className="portfolio-popup-body-img">
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
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <Image
                          alt="portfolio-1.1"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img1.jpg"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          alt="portfolio-1.2"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img2.jpg"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          alt="portfolio-1.3"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img3.jpg"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <p className="portfolio-popup-body-p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi veritatis doloribus totam quisquam reiciendis
                    distinctio quod ullam debitis? Commodi natus id iusto fugit.
                  </p>
                </div>
              </div>
            )}
          </div>
          {/* 2 */}
          <div>
            <div className="card group" onClick={openDetail2}>
              <div className="card-overlay"></div>
              <div className="card-info">
                <h3 className="card-info-h3">UI/UX Design</h3>
                <span className="card-info-span">Youtube</span>
              </div>
              <Image
                alt="portfolio-2"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                src="/images/port-img2.jpg"
              />
            </div>
            {detail2 && (
              <div className="portfolio-popup">
                <div className="portfolio-popup-body">
                  <i
                    className="portfolio-popup-body-icon fas fa-times portfolio-close-btn"
                    onClick={closeDetail}
                  ></i>
                  <h3 className="portfolio-popup-body-h3">UI/UX Design</h3>
                  <div className="portfolio-popup-body-img">
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
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <Image
                          alt="portfolio-2.1"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img2.jpg"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          alt="portfolio-2.2"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img3.jpg"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          alt="portfolio-2.3"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img4.jpg"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <p className="portfolio-popup-body-p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi veritatis doloribus totam quisquam reiciendis
                    distinctio quod ullam debitis? Commodi natus id iusto fugit.
                  </p>
                </div>
              </div>
            )}
          </div>
          {/* 3 */}
          <div>
            <div className="card group" onClick={openDetail3}>
              <div className="card-overlay"></div>
              <div className="card-info">
                <h3 className="card-info-h3">Branding &#38; Design</h3>
                <span className="card-info-span">Youtube</span>
              </div>
              <Image
                alt="portfolio-3"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                src="/images/port-img3.jpg"
              />
            </div>
            {detail3 && (
              <div className="portfolio-popup">
                <div className="portfolio-popup-body">
                  <i
                    className="portfolio-popup-body-icon fas fa-times portfolio-close-btn"
                    onClick={closeDetail}
                  ></i>
                  <h3 className="portfolio-popup-body-h3">
                    Branding &#38; Design
                  </h3>
                  <div className="portfolio-popup-body-img">
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
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <Image
                          alt="portfolio-3.1"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img3.jpg"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          alt="portfolio-3.2"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img4.jpg"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          alt="portfolio-3.3"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img5.jpg"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <p className="portfolio-popup-body-p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi veritatis doloribus totam quisquam reiciendis
                    distinctio quod ullam debitis? Commodi natus id iusto fugit.
                  </p>
                </div>
              </div>
            )}
          </div>
          {/* 4 */}
          <div>
            <div className="card group" onClick={openDetail4}>
              <div className="card-overlay"></div>
              <div className="card-info">
                <h3 className="card-info-h3">Web Development</h3>
                <span className="card-info-span">Youtube</span>
              </div>
              <Image
                alt="portfolio-4"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                src="/images/port-img4.jpg"
              />
            </div>
            {detail4 && (
              <div className="portfolio-popup">
                <div className="portfolio-popup-body">
                  <i
                    className="portfolio-popup-body-icon fas fa-times portfolio-close-btn"
                    onClick={closeDetail}
                  ></i>
                  <h3 className="portfolio-popup-body-h3">Web Development</h3>
                  <div className="portfolio-popup-body-img">
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
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <Image
                          alt="portfolio-4.1"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img4.jpg"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          alt="portfolio-4.2"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img5.jpg"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          alt="portfolio-4.3"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img6.jpg"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <p className="portfolio-popup-body-p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi veritatis doloribus totam quisquam reiciendis
                    distinctio quod ullam debitis? Commodi natus id iusto fugit.
                  </p>
                </div>
              </div>
            )}
          </div>
          {/* 5 */}
          <div>
            <div className="card group" onClick={openDetail5}>
              <div className="card-overlay"></div>
              <div className="card-info">
                <h3 className="card-info-h3">Content Writing</h3>
                <span className="card-info-span">Youtube</span>
              </div>
              <Image
                alt="portfolio-5"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                src="/images/port-img5.jpg"
              />
            </div>
            {detail5 && (
              <div className="portfolio-popup">
                <div className="portfolio-popup-body">
                  <i
                    className="portfolio-popup-body-icon fas fa-times portfolio-close-btn"
                    onClick={closeDetail}
                  ></i>
                  <h3 className="portfolio-popup-body-h3">Content Writing</h3>
                  <div className="portfolio-popup-body-img">
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
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <Image
                          alt="portfolio-5.1"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img5.jpg"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          alt="portfolio-5.2"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img6.jpg"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          alt="portfolio-5.3"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img1.jpg"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <p className="portfolio-popup-body-p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi veritatis doloribus totam quisquam reiciendis
                    distinctio quod ullam debitis? Commodi natus id iusto fugit.
                  </p>
                </div>
              </div>
            )}
          </div>
          {/* 6 */}
          <div>
            <div className="card group" onClick={openDetail6}>
              <div className="card-overlay"></div>
              <div className="card-info">
                <h3 className="card-info-h3">Interface Design</h3>
                <span className="card-info-span">Youtube</span>
              </div>
              <Image
                alt="portfolio-6"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                src="/images/port-img6.jpg"
              />
            </div>
            {detail6 && (
              <div className="portfolio-popup">
                <div className="portfolio-popup-body">
                  <i
                    className="portfolio-popup-body-icon fas fa-times portfolio-close-btn"
                    onClick={closeDetail}
                  ></i>
                  <h3 className="portfolio-popup-body-h3">Interface Design</h3>
                  <div className="portfolio-popup-body-img">
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
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <Image
                          alt="portfolio-6.1"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img6.jpg"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          alt="portfolio-6.2"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img1.jpg"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          alt="portfolio-6.3"
                          width="100%"
                          height="70%"
                          layout="responsive"
                          objectFit="cover"
                          src="/images/port-img2.jpg"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <p className="portfolio-popup-body-p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi veritatis doloribus totam quisquam reiciendis
                    distinctio quod ullam debitis? Commodi natus id iusto fugit.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
