import React from "react";
import { motion } from "framer-motion";
import styles from "../style/ServicesPage.module.css";
import { FaBullhorn, FaPalette, FaRocket } from "react-icons/fa";

const services = [
  {
    id: "001",
    title: "Social Media Marketing",
    img: "/assets/service-img1.jpg",
    icon: <FaBullhorn />,
  },
  {
    id: "002",
    title: "Branding And Identity",
    // img: "/images/service2.jpg",
    img: "/assets/service-img1.jpg",

    icon: <FaPalette />,
  },
  {
    id: "003",
    title: "Product Design Solutions",
    // img: "/images/service3.jpg",
    img: "/assets/service-img1.jpg",

    icon: <FaRocket />,
  },
  {
    id: "004",
    title: "UI/UX Design",
    // img: "/images/service4.jpg",
    img: "/assets/service-img1.jpg",

    icon: <FaPalette />,
  },
  {
    id: "005",
    title: "Digital Marketing",
    // img: "/images/service5.jpg",
    img: "/assets/service-img1.jpg",

    icon: <FaBullhorn />,
  },
  {
    id: "006",
    title: "App Development",
    // img: "/images/service6.jpg",
    img: "/assets/service-img1.jpg",

    icon: <FaRocket />,
  },
];

const ServicesPage = () => {
  return (
    <div className={styles.servicesPage}>

      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Services</h1>
        <p>Home / Services</p>
      </motion.section>

      {/* SERVICES GRID */}
      <section className={styles.servicesSection}>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.cardHeader}>
                <span>{service.id}</span>
                <div className={styles.icon}>{service.icon}</div>
              </div>

              <img src={service.img} alt={service.title} />

              <h3>{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
