import React, { useRef } from 'react';
import './ServicesSection.css';
import { servicesData } from '../../components/data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const ServicesSection = () => {
    const swiperRef = useRef(null);
    const autoplayProgressRef = useRef(null);

    const handleAutoplayProgress = (_, progress) => {
        if (autoplayProgressRef.current) {
            const circle = autoplayProgressRef.current.querySelector('circle');
            const radius = circle.r.baseVal.value;
            const circumference = radius * 2 * Math.PI;
            const offset = circumference - progress * circumference;
            circle.style.strokeDashoffset = offset;
        }
    };

    const handleAutoplayTimeLeft = (_, timeLeft) => {
        if (autoplayProgressRef.current) {
            const text = autoplayProgressRef.current.querySelector('span');
            if (text) {
                text.textContent = `${Math.ceil(timeLeft / 1000)}s`;
            }
        }
    };

    return (
        <div className="services-section">
            <h2 className="services-title">
                What We are Offering to <br />
                <span>Our Potential Client</span>
            </h2>

            <div className="swiper-container">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed={800}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        disabledClass: 'swiper-button-disabled',
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: true,
                        renderBullet: function (index, className) {
                            return `<span class="${className}"></span>`;
                        },
                    }}
                    effect={'coverflow'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        // Mobile
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            centeredSlides: true,
                            coverflowEffect: {
                                rotate: 0,
                                stretch: 0,
                                depth: 0,
                                modifier: 1,
                            }
                        },
                        // Small Tablet
                        576: {
                            slidesPerView: 1.2,
                            spaceBetween: 15,
                            centeredSlides: true,
                        },
                        // Tablet
                        768: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                            centeredSlides: true,
                        },
                        // Desktop
                        992: {
                            slidesPerView: 2.2,
                            spaceBetween: 30,
                            centeredSlides: true,
                        },
                        // Large Desktop
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                            centeredSlides: true,
                        },
                        // Extra Large Desktop
                        1400: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                            centeredSlides: true,
                        }
                    }}
                    onAutoplayProgress={handleAutoplayProgress}
                    onAutoplayTimeLeft={handleAutoplayTimeLeft}
                    className="swiper"
                    grabCursor={true}
                    watchSlidesProgress={true}
                >
                    {servicesData.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="service-card">
                                <div className="snake-line">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <div className="service-block-style1 spin-border-animation">
                                    <div className="inner-column">
                                        <div className="image-box">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="content-box">
                                            <h5 className="service-subtitle">{service.title}</h5>
                                            <h4 className="service-title">
                                                <a href="#">{service.description}</a>
                                            </h4>
                                            <div className="service-details">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore.
                                            </div>

                                            <div className="btn-box">
                                                <a href="#" className="read-more-text">Read More</a>
                                                <a href="#" className="read-more-icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                                        <polyline points="7 7 17 7 17 17"></polyline>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Auto-play progress indicator (optional) */}
                    {/* <div className="swiper-autoplay-progress" ref={autoplayProgressRef}>
                        <svg viewBox="0 0 48 48">
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span></span>
                    </div> */}
                </Swiper>

                {/* Navigation buttons - visible on larger screens */}
                {/* <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div> */}

                {/* Pagination dots */}
                {/* <div className="swiper-pagination"></div> */}
            </div>
        </div>
    );
};

export default ServicesSection;