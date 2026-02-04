import React, { useState, useEffect } from 'react';
import './ServicesSection.css';

const servicesData = [
    {
        id: 1,
        title: "Design",
        image: "https://dev254.kodesolution.com/edigitaal/wp-content/uploads/2025/10/service-1.png",
        description: "Creative Design and Development"
    },
    {
        id: 2,
        title: "Development",
        image: "https://dev254.kodesolution.com/edigitaal/wp-content/uploads/2025/10/service-2.png",
        description: "Innovative Tech Solutions"
    },
    {
        id: 3,
        title: "Marketing",
        image: "https://dev254.kodesolution.com/edigitaal/wp-content/uploads/2025/10/service-1.png",
        description: "Strategic Digital Growth"
    },
    {
        id: 4,
        title: "SEO",
        image: "https://dev254.kodesolution.com/edigitaal/wp-content/uploads/2025/10/service-2.png",
        description: "Search Engine Optimization"
    }
];

// Massive Buffer Strategy: 6 copies (Preserved from previous step)
const extendedServices = [
    ...servicesData, ...servicesData, ...servicesData,
    ...servicesData, ...servicesData, ...servicesData
];

const ServicesSection = () => {
    const originalLength = servicesData.length;
    // Start at Set 4 (Index 12)
    const [activeIndex, setActiveIndex] = useState(originalLength * 3);
    const [isHovered, setIsHovered] = useState(false);
    const [isResetting, setIsResetting] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovered]);

    // Loop Reset Logic (Preserved)
    useEffect(() => {
        if (activeIndex === originalLength * 4) {
            const timeout = setTimeout(() => {
                setIsResetting(true);
                setActiveIndex(originalLength * 3);
                setTimeout(() => setIsResetting(false), 50);
            }, 1200);
            return () => clearTimeout(timeout);
        }
        if (activeIndex < originalLength) {
            setActiveIndex(originalLength * 3);
        }
    }, [activeIndex, originalLength]);

    const handleDotClick = (index) => {
        setIsResetting(false);
        setActiveIndex((originalLength * 3) + index);
    };

    return (
        <div className="services-section">
            <h2 className="services-title">What We are Offering to <br /><span>Our Potential Client</span></h2>

            <div
                className="carousel-viewport"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className="carousel-track"
                    style={{
                        '--active-index': activeIndex,
                        '--count': extendedServices.length,
                        '--transition-duration': isResetting ? '0s' : '1.2s'
                    }}
                >
                    {extendedServices.map((service, index) => (
                        <div
                            key={`${service.id}-${index}`}
                            className={`service-card ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className="snake-line">
                                <span></span><span></span><span></span><span></span>
                            </div>

                            <div className="service-block-style1 spin-border-animation">
                                <div className="inner-column">
                                    <div className="image-box">
                                        <img src={service.image} alt={service.title} loading="lazy" />
                                    </div>
                                    <div className="content-box">
                                        <h5 className="service-subtitle">{service.title}</h5>
                                        <h4 className="service-title">
                                            <a href="#">{service.description}</a>
                                        </h4>
                                        <div className="service-details">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                        </div>

                                        {/* NEW: Independent Button + Icon Structure */}
                                        <div className="btn-box">
                                            <a href="#" className="read-more-text">Read More</a>
                                            <a href="#" className="read-more-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                                    <polyline points="7 7 17 7 17 17"></polyline>
                                                </svg>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="dots-container">
                {servicesData.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === (activeIndex % originalLength) ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;