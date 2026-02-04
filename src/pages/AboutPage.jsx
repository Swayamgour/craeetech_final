import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import styles from '../style/AboutPage.module.css';
import { FaTrophy, FaUsers, FaCheckCircle, FaStar, FaQuoteLeft, FaAward, FaRocket } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from './Footer';

const AboutPage = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const statsRef = useRef(null);
    const servicesRef = useRef(null);
    const creativeRef = useRef(null);
    const testimonialRef = useRef(null);

    const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
    const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
    const servicesInView = useInView(servicesRef, { once: true, amount: 0.3 });
    const creativeInView = useInView(creativeRef, { once: true, amount: 0.3 });
    const testimonialInView = useInView(testimonialRef, { once: true, amount: 0.3 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.02]);

    // Stats data
    const stats = [
        { number: "40+", label: "Awards Won", icon: <FaTrophy />, color: "#FFD700" },
        { number: "0002", label: "Projects Completed", icon: <FaCheckCircle />, color: "#10B981" },
        { number: "23%", label: "Client Success Rate", icon: <FaStar />, color: "#3B82F6" },
        { number: "8+", label: "Expert Members", icon: <FaUsers />, color: "#8B5CF6" }
    ];

    // Services data
    const services = [
        { number: "001", title: "Branding And Identity", description: "Building memorable brand identities", icon: "🎨" },
        { number: "002", title: "Product Design Solutions", description: "Creating intuitive product designs", icon: "📱" },
        { number: "003", title: "Marketing", description: "Strategic marketing campaigns", icon: "📈" },
        { number: "004", title: "Social Media Marketing", description: "Leveraging social platforms", icon: "💬" }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const statCardVariants = {
        hidden: { scale: 0.8, opacity: 0, y: 30 },
        visible: (i) => ({
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }
        }),
        hover: {
            y: -10,
            scale: 1.05,
            transition: {
                duration: 0.3
            }
        }
    };

    const serviceCardVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut"
            }
        }),
        hover: {
            x: 10,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <>
            {/* <Navbar /> */}
            <motion.div
                ref={containerRef}
                className={styles.aboutPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Hero Section */}
                <motion.section
                    ref={heroRef}
                    className={styles.heroSection}
                    style={{ opacity: heroOpacity, scale: heroScale }}
                >
                    <div className={styles.container}>
                        <div className={styles.heroContent}>
                            <motion.div
                                className={styles.heroText}
                                variants={containerVariants}
                                initial="hidden"
                                animate={heroInView ? "visible" : "hidden"}
                            >
                                <motion.div
                                    className={styles.sectionBadge}
                                    variants={itemVariants}
                                >
                                    <span>About Company</span>
                                </motion.div>

                                <motion.h1
                                    className={styles.heroTitle}
                                    variants={itemVariants}
                                >
                                    Reimagining the brand potential with best digital marketing
                                </motion.h1>

                                <motion.div
                                    className={styles.experienceBadge}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span className={styles.experienceNumber}>2</span>
                                    <span className={styles.experienceText}>
                                        Industrial Years<br />of Experience
                                    </span>
                                </motion.div>

                                <motion.p
                                    className={styles.heroDescription}
                                    variants={itemVariants}
                                >
                                    Nexella is a dynamic creative digital marketing agency dedicated to empowering businesses through innovative and results-driven online strategies.
                                </motion.p>

                                <motion.button
                                    className={styles.primaryButton}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    More About Us
                                    <FaRocket />
                                </motion.button>
                            </motion.div>

                            <motion.div
                                className={styles.heroVisual}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <div className={styles.heroImageGrid}>
                                    <motion.div
                                        className={styles.imageCard}
                                        animate={{
                                            y: [0, -10, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <div className={styles.imageContent}>
                                            <span>Digital Strategy</span>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className={styles.imageCard}
                                        animate={{
                                            y: [0, 10, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.5
                                        }}
                                    >
                                        <div className={styles.imageContent}>
                                            <span>Creative Design</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Stats Section */}
                <motion.section
                    ref={statsRef}
                    className={styles.statsSection}
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.container}>
                        <motion.div
                            className={styles.sectionHeader}
                            initial={{ y: 30, opacity: 0 }}
                            animate={statsInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.h2
                                className={styles.sectionTitle}
                                initial={{ scale: 0.9 }}
                                animate={statsInView ? { scale: 1 } : {}}
                                transition={{ type: "spring" }}
                            >
                                Nexella Success
                            </motion.h2>
                            <motion.p
                                className={styles.sectionSubtitle}
                                initial={{ y: 20, opacity: 0 }}
                                animate={statsInView ? { y: 0, opacity: 1 } : {}}
                                transition={{ delay: 0.2 }}
                            >
                                Expert-Led Strategies for Online Success
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className={styles.statsGrid}
                            variants={containerVariants}
                            initial="hidden"
                            animate={statsInView ? "visible" : "hidden"}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.statCard}
                                    variants={statCardVariants}
                                    custom={index}
                                    whileHover="hover"
                                    style={{ '--stat-color': stat.color }}
                                >
                                    <motion.div
                                        className={styles.statIconWrapper}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className={styles.statIcon} style={{ color: stat.color }}>
                                            {stat.icon}
                                        </div>
                                    </motion.div>
                                    <motion.h3
                                        className={styles.statNumber}
                                        initial={{ scale: 0 }}
                                        animate={statsInView ? { scale: 1 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                                    >
                                        {stat.number}
                                    </motion.h3>
                                    <motion.p
                                        className={styles.statLabel}
                                        initial={{ opacity: 0 }}
                                        animate={statsInView ? { opacity: 1 } : {}}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                    >
                                        {stat.label}
                                    </motion.p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className={styles.yearsExperience}
                            initial={{ opacity: 0, y: 30 }}
                            animate={statsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 }}
                        >
                            <div className={styles.yearsContent}>
                                <motion.div
                                    className={styles.awardBadge}
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <FaAward />
                                </motion.div>
                                <div className={styles.yearsText}>
                                    <h3>5 Year</h3>
                                    <p>We have won 40+ awards believe in quality.</p>
                                </div>
                                <div className={styles.extraStats}>
                                    <div className={styles.extraStat}>
                                        <span className={styles.extraNumber}>23%</span>
                                        <span className={styles.extraLabel}>TRUSTED CLIENTS</span>
                                    </div>
                                    <div className={styles.extraStat}>
                                        <span className={styles.extraNumber}>28K</span>
                                        <span className={styles.extraLabel}>HAPPY CUSTOMERS</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Services Section */}
                <motion.section
                    ref={servicesRef}
                    className={styles.servicesSection}
                    initial={{ opacity: 0 }}
                    animate={servicesInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.container}>
                        <div className={styles.servicesGrid}>
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.number}
                                    className={styles.serviceCard}
                                    variants={serviceCardVariants}
                                    custom={index}
                                    initial="hidden"
                                    animate={servicesInView ? "visible" : "hidden"}
                                    whileHover="hover"
                                >
                                    <motion.div
                                        className={styles.serviceNumber}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                    >
                                        {service.number}
                                    </motion.div>
                                    <motion.div
                                        className={styles.serviceIcon}
                                        initial={{ scale: 0 }}
                                        animate={servicesInView ? { scale: 1 } : {}}
                                        transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                                    >
                                        {service.icon}
                                    </motion.div>
                                    <motion.h3
                                        className={styles.serviceTitle}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        {service.title}
                                    </motion.h3>
                                    <motion.p
                                        className={styles.serviceDescription}
                                        initial={{ opacity: 0 }}
                                        animate={servicesInView ? { opacity: 1 } : {}}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                    >
                                        {service.description}
                                    </motion.p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Creative Works Section */}
                <motion.section
                    ref={creativeRef}
                    className={styles.creativeSection}
                    initial={{ opacity: 0 }}
                    animate={creativeInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.container}>
                        <div className={styles.creativeContent}>
                            <motion.div
                                className={styles.creativeText}
                                initial={{ x: -50, opacity: 0 }}
                                animate={creativeInView ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.h2
                                    className={styles.creativeTitle}
                                    initial={{ scale: 0.9 }}
                                    animate={creativeInView ? { scale: 1 } : {}}
                                    transition={{ type: "spring", delay: 0.2 }}
                                >
                                    Creative Works!
                                </motion.h2>
                                <motion.p
                                    className={styles.creativeDescription}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={creativeInView ? { y: 0, opacity: 1 } : {}}
                                    transition={{ delay: 0.3 }}
                                >
                                    At Nexella, we don't just run campaigns—we build digital relationships that grow brands and deliver measurable impact. Our success lies in making our clients unforgettable online.
                                </motion.p>
                            </motion.div>

                            <motion.div
                                className={styles.creativeImage}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={creativeInView ? { scale: 1, opacity: 1 } : {}}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <div className={styles.imageGallery}>
                                    {[1, 2, 3].map((item) => (
                                        <motion.div
                                            key={item}
                                            className={styles.galleryImage}
                                            animate={{
                                                y: item % 2 === 0 ? [0, -15, 0] : [0, 15, 0]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: item * 0.2
                                            }}
                                        >
                                            <div className={styles.imagePlaceholder}>
                                                <span>Project {item}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Testimonial Section */}
                <motion.section
                    ref={testimonialRef}
                    className={styles.testimonialSection}
                    initial={{ opacity: 0 }}
                    animate={testimonialInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.container}>
                        <div className={styles.testimonialContent}>
                            <motion.div
                                className={styles.testimonialCard}
                                initial={{ y: 50, opacity: 0 }}
                                animate={testimonialInView ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.div
                                    className={styles.quoteIcon}
                                    initial={{ rotate: -180, opacity: 0 }}
                                    animate={testimonialInView ? { rotate: 0, opacity: 1 } : {}}
                                    transition={{ delay: 0.2, type: "spring" }}
                                >
                                    <FaQuoteLeft />
                                </motion.div>
                                <motion.h3
                                    className={styles.testimonialTitle}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={testimonialInView ? { y: 0, opacity: 1 } : {}}
                                    transition={{ delay: 0.3 }}
                                >
                                    Real Stories from Happy Customer's drive here Success Business
                                </motion.h3>
                                <motion.p
                                    className={styles.testimonialText}
                                    initial={{ opacity: 0 }}
                                    animate={testimonialInView ? { opacity: 1 } : {}}
                                    transition={{ delay: 0.4 }}
                                >
                                    "The results speak for themselves. Our online presence has transformed completely."
                                </motion.p>
                                <motion.div
                                    className={styles.testimonialAuthor}
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={testimonialInView ? { y: 0, opacity: 1 } : {}}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className={styles.authorInfo}>
                                        <motion.h4
                                            className={styles.authorName}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={testimonialInView ? { x: 0, opacity: 1 } : {}}
                                            transition={{ delay: 0.6 }}
                                        >
                                            David T. Alex
                                        </motion.h4>
                                        <motion.p
                                            className={styles.authorPosition}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={testimonialInView ? { x: 0, opacity: 1 } : {}}
                                            transition={{ delay: 0.7 }}
                                        >
                                            HR Manager — Nexella IT
                                        </motion.p>
                                    </div>
                                    <motion.div
                                        className={styles.happyCustomers}
                                        initial={{ scale: 0 }}
                                        animate={testimonialInView ? { scale: 1 } : {}}
                                        transition={{ delay: 0.8, type: "spring" }}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <motion.span
                                            className={styles.happyBadge}
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        >
                                            😊
                                        </motion.span>
                                        <motion.span
                                            className={styles.happyText}
                                            initial={{ opacity: 0 }}
                                            animate={testimonialInView ? { opacity: 1 } : {}}
                                            transition={{ delay: 0.9 }}
                                        >
                                            Happy Customers
                                        </motion.span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Company Info Section */}
                <motion.section
                    className={styles.companySection}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.container}>
                        <div className={styles.companyGrid}>
                            <motion.div
                                className={styles.companyInfo}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <motion.h2
                                    className={styles.companyLogo}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring" }}
                                >
                                    #Nexella
                                </motion.h2>
                                <motion.p
                                    className={styles.companyDescription}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod dolore magna aliquam erat volutpat.
                                </motion.p>
                            </motion.div>

                            {[
                                { title: "Our Team", count: "45+" },
                                { title: "Portfolio", count: "200+" },
                                { title: "Careers", count: "15+" },
                                { title: "Contact", count: "24/7" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.companyStat}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.span
                                        className={styles.companyStatNumber}
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                    >
                                        {item.count}
                                    </motion.span>
                                    <motion.span
                                        className={styles.companyStatTitle}
                                        whileHover={{ color: "#3b82f6" }}
                                    >
                                        {item.title}
                                    </motion.span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            </motion.div>
            {/* <Footer /> */}

        </>
    );
};

export default AboutPage;