import React from 'react';
import { motion } from 'framer-motion';
import styles from '../style/Footer.module.css';
// Import React Icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin
} from 'react-icons/fa';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const linkVariants = {
    initial: { x: 0 },
    hover: {
      x: 8,
      color: "#66ff33",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(102, 255, 51, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const footerBottomVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Social media data with React Icons
  const socialMedia = [
    { name: 'facebook', icon: <FaFacebookF />, url: 'https://facebook.com' },
    { name: 'twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
    { name: 'instagram', icon: <FaInstagram />, url: 'https://instagram.com' },
    { name: 'linkedin', icon: <FaLinkedinIn />, url: 'https://linkedin.com' }
  ];

  // Navigation links
  const navLinks = ['Home', 'About', 'Our Team', 'Contact Us'];

  // Company links
  const companyLinks = ['Pricing Plans', 'Our Service', 'Testimonials', 'Latest Blog'];

  // Bottom links
  const bottomLinks = ['Privacy and Policy', 'Sitemap', "FAQ's"];

  return (
    <motion.footer
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          {/* Logo Section */}
          <motion.div
            className={styles.footerSection}
            variants={itemVariants}
          >
            <div className={styles.logoSection}>
              <motion.div
                className={styles.logo}
                variants={logoVariants}
                initial="initial"
                whileHover="hover"
              >
                <img src='/assets/logo1.png' alt='logoOfCompany' />
              </motion.div>
              <motion.p
                className={styles.tagline}
                variants={itemVariants}
              >
                Nexella is a dynamic creative digital marketing agency dedicated to empowering businesses through innovative solutions.
              </motion.p>

              {/* Social Media Icons */}
              <motion.div
                className={styles.socialIcons}
                variants={itemVariants}
              >
                {socialMedia.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label={`Follow us on ${social.name}`}
                    whileHover={{
                      y: -5,
                      backgroundColor: "#66ff33",
                      rotate: 360,
                      color: "#000",
                      transition: {
                        rotate: {
                          duration: 0.5,
                          ease: "easeOut"
                        }
                      }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div
            className={styles.footerLinks}
            variants={containerVariants}
          >
            <motion.div
              className={styles.linkColumn}
              variants={itemVariants}
            >
              <h3 className={styles.linkTitle}>Navigation</h3>
              <ul className={styles.linkList}>
                {navLinks.map((item) => (
                  <motion.li
                    key={item}
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <a
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className={styles.link}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className={styles.linkColumn}
              variants={itemVariants}
            >
              <h3 className={styles.linkTitle}>Company</h3>
              <ul className={styles.linkList}>
                {companyLinks.map((item) => (
                  <motion.li
                    key={item}
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <a
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className={styles.link}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className={styles.linkColumn}
              variants={itemVariants}
            >
              <h3 className={styles.linkTitle}>Contact</h3>
              <ul className={styles.linkList}>
                <motion.li
                  className={styles.contactItem}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className={styles.contactIcon}>
                    <FaMapMarkerAlt />
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactTitle}>Our Address</span>
                    <span className={styles.contactText}>130/B Alexon Market Street</span>
                    <span className={styles.contactText}>Sandigo - USA</span>
                  </div>
                </motion.li>

                <motion.li
                  className={styles.contactItem}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className={styles.contactIcon}>
                    <FaEnvelope />
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactTitle}>Send E-Mail</span>
                    <motion.a
                      href="mailto:info.theme@gmail.com"
                      className={styles.emailLink}
                      whileHover={{ scale: 1.05 }}
                    >
                      info.theme@gmail.com
                    </motion.a>
                  </div>
                </motion.li>

                <motion.li
                  className={styles.contactItem}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className={styles.contactIcon}>
                    <FaPhone />
                  </div>
                  <div className={styles.contactDetails}>
                    <span className={styles.contactTitle}>Call Us</span>
                    <span className={styles.contactText}>+1 (555) 123-4567</span>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className={styles.footerBottom}
          variants={footerBottomVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className={styles.copyright}>
            <p>© Nexella 2026. All rights reserved by Kodesolution</p>
           
          </div>

          <div className={styles.bottomLinks}>
            {bottomLinks.map((item, index) => (
              <React.Fragment key={item}>
                <motion.a
                  href={`/${item.toLowerCase().replace(/\s+|'/g, '-')}`}
                  className={styles.bottomLink}
                  whileHover={{ y: -2, color: "#66ff33" }}
                >
                  {item}
                </motion.a>
                {index < bottomLinks.length - 1 && (
                  <span className={styles.separator}>|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className={styles.floatingElement}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={styles.floatingElement2}
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </motion.footer>
  );
};

export default Footer