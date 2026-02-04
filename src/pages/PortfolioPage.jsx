import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import styles from '../style/PortfolioPage.module.css';

// Import icons
import {
    FaFacebook, FaInstagram, FaTwitter, FaLinkedin,
    FaPalette, FaBullhorn, FaPaintBrush, FaMobileAlt,
    FaChartLine, FaCloud, FaShieldAlt, FaSearch
} from 'react-icons/fa';

const PortfolioPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [statsCounters, setStatsCounters] = useState({
        clients: 0,
        projects: 0,
        team: 0,
        awards: 0
    });

    // Use scroll for parallax effects
    const { scrollY } = useScroll();

    // Transform scrollY for parallax effects
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);
    const heroScale = useTransform(scrollY, [0, 300], [1, 1.05]);

    // Portfolio items data
    const portfolioItems = [
        {
            id: 1,
            number: "001",
            title: "Social Media Marketing",
            category: "marketing",
            description: "Strategic social media campaigns that drive engagement and build communities across platforms.",
            icon: <FaFacebook />,
            color: "#3b5998",
            stats: { clients: 250, projects: 89 }
        },
        {
            id: 2,
            number: "002",
            title: "Branding And Identity",
            category: "branding",
            description: "Creating memorable brand identities that resonate with target audiences and stand out in the market.",
            icon: <FaPalette />,
            color: "#e91e63",
            stats: { clients: 180, projects: 67 }
        },
        {
            id: 3,
            number: "003",
            title: "Product Design Solutions",
            category: "design",
            description: "User-centered product design that combines aesthetics with functionality for optimal user experience.",
            icon: <FaPaintBrush />,
            color: "#4caf50",
            stats: { clients: 320, projects: 120 }
        },
        {
            id: 4,
            number: "004",
            title: "Branding And Identity",
            category: "branding",
            description: "Comprehensive branding strategies that establish strong market presence and customer loyalty.",
            icon: <FaBullhorn />,
            color: "#ff9800",
            stats: { clients: 150, projects: 55 }
        },
        {
            id: 5,
            number: "005",
            title: "Social Media Marketing",
            category: "marketing",
            description: "Targeted social media strategies that increase brand visibility and drive conversions.",
            icon: <FaInstagram />,
            color: "#e4405f",
            stats: { clients: 280, projects: 95 }
        },
        {
            id: 6,
            number: "006",
            title: "Product Design Solutions",
            category: "design",
            description: "Innovative product design solutions that solve real-world problems with elegant interfaces.",
            icon: <FaMobileAlt />,
            color: "#2196f3",
            stats: { clients: 200, projects: 78 }
        },
        {
            id: 7,
            number: "007",
            title: "Digital Marketing",
            category: "marketing",
            description: "Data-driven digital marketing campaigns that deliver measurable results and ROI.",
            icon: <FaChartLine />,
            color: "#9c27b0",
            stats: { clients: 420, projects: 160 }
        },
        {
            id: 8,
            number: "008",
            title: "UI/UX Design",
            category: "design",
            description: "Intuitive user interfaces and experiences that delight users and improve engagement.",
            icon: <FaSearch />,
            color: "#00bcd4",
            stats: { clients: 380, projects: 145 }
        },
        {
            id: 9,
            number: "009",
            title: "Cloud Services",
            category: "tech",
            description: "Scalable cloud solutions that optimize performance and ensure business continuity.",
            icon: <FaCloud />,
            color: "#607d8b",
            stats: { clients: 120, projects: 45 }
        }
    ];

    // Filter options
    const filters = [
        { id: 'all', label: 'All Services' },
        { id: 'marketing', label: 'Marketing' },
        { id: 'branding', label: 'Branding' },
        { id: 'design', label: 'Design' },
        { id: 'tech', label: 'Technology' }
    ];

    // Stats data with actual values for counting animation
    const stats = [
        { id: 'clients', number: 1200, label: "Happy Clients", duration: 2 },
        { id: 'projects', number: 850, label: "Projects Delivered", duration: 2.5 },
        { id: 'team', number: 48, label: "Team Members", duration: 1.5 },
        { id: 'awards', number: 36, label: "Awards Won", duration: 3 }
    ];

    // Filtered items based on active filter
    const filteredItems = activeFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    // Animation for stats counting
    useEffect(() => {
        stats.forEach(stat => {
            const controls = animate(0, stat.number, {
                duration: stat.duration,
                ease: "easeOut",
                onUpdate(value) {
                    setStatsCounters(prev => ({
                        ...prev,
                        [stat.id]: Math.floor(value)
                    }));
                }
            });

            return () => controls.stop();
        });
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        hover: {
            scale: 1.05,
            y: -10,
            transition: {
                duration: 0.2
            }
        }
    };

    const filterVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <motion.div
            className={styles.portfolioPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section with Parallax */}
            <motion.section
                className={styles.heroSection}
                style={{ opacity: heroOpacity, scale: heroScale }}
            >
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1
                            className={styles.heroTitle}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Our <motion.span
                                className={styles.highlight}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.4, type: "spring" }}
                            >
                                Portfolio
                            </motion.span> & Services
                        </motion.h1>
                        <motion.p
                            className={styles.heroDescription}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            Discover our comprehensive range of digital solutions that have helped businesses
                            transform their online presence and achieve remarkable growth.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                className={styles.statsSection}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.container}>
                    <motion.div
                        className={styles.statsGrid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                className={styles.statItem}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.div
                                    className={styles.statNumber}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.1 * index, type: "spring" }}
                                >
                                    {statsCounters[stat.id]}
                                    <span className={styles.statPlus}>+</span>
                                </motion.div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Filter Section */}
            <motion.section
                className={styles.filterSection}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                <div className={styles.container}>
                    <div className={styles.filterContainer}>
                        <motion.div
                            className={styles.filterTitle}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Filter by Category:
                        </motion.div>
                        <motion.div
                            className={styles.filterButtons}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {filters.map((filter, index) => (
                                <motion.button
                                    key={filter.id}
                                    className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.active : ''}`}
                                    onClick={() => setActiveFilter(filter.id)}
                                    variants={filterVariants}
                                    custom={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {filter.label}
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Portfolio Grid Section */}
            <motion.section
                className={styles.portfolioSection}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
            >
                <div className={styles.container}>
                    <motion.div
                        className={styles.portfolioGrid}
                        layout
                        transition={{ layout: { duration: 0.3 } }}
                    >
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={styles.portfolioCard}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={index}
                                transition={{ delay: index * 0.1 }}
                                layout
                            >
                                <div className={styles.cardHeader}>
                                    <motion.div
                                        className={styles.cardNumber}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        {item.number}
                                    </motion.div>
                                    <motion.div
                                        className={styles.cardIcon}
                                        style={{ backgroundColor: `${item.color}20`, color: item.color }}
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                </div>

                                <div className={styles.cardContent}>
                                    <motion.h3
                                        className={styles.cardTitle}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <motion.p
                                        className={styles.cardDescription}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                    >
                                        {item.description}
                                    </motion.p>
                                </div>

                                <div className={styles.cardFooter}>
                                    <motion.span
                                        className={styles.cardCategory}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                    </motion.span>
                                    <motion.button
                                        className={styles.cardAction}
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Details →
                                    </motion.button>
                                </div>

                                <motion.div
                                    className={styles.cardHoverEffect}
                                    style={{ background: `linear-gradient(135deg, ${item.color}20, transparent)` }}
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className={styles.ctaSection}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.container}>
                    <motion.div
                        className={styles.ctaContent}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            className={styles.ctaTitle}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring" }}
                        >
                            Ready to Transform Your Digital Presence?
                        </motion.h2>
                        <motion.p
                            className={styles.ctaDescription}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Let's collaborate to create exceptional digital experiences that drive results.
                        </motion.p>
                        <motion.div
                            className={styles.ctaButtons}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.button
                                className={styles.ctaBtnPrimary}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start a Project
                            </motion.button>
                            <motion.button
                                className={styles.ctaBtnSecondary}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: "#3b82f6"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View All Services
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Scroll Progress Indicator */}
            <motion.div
                className={styles.scrollProgress}
                style={{ scaleX: useTransform(scrollY, [0, document.body.scrollHeight - window.innerHeight], [0, 1]) }}
            />
        </motion.div>
    );
};

export default PortfolioPage;