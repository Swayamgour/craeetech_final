import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaWhatsapp,
  FaYoutube,
  FaHeadset,
  FaCompass,
  FaShieldAlt
} from 'react-icons/fa';
import styles from '../style/ContactPage.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [activeField, setActiveField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      filter: "blur(10px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  const cardVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      rotateY: -20
    },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }),
    hover: {
      scale: 1.05,
      rotateY: 5,
      y: -15,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      x: -80,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const mapVariants = {
    hidden: {
      opacity: 0,
      x: 80,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const successVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      rotate: 180,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingIconVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Office Location",
      details: ["4517 Washington Avenue", "New York, NY 39495", "United States"],
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6, #60a5fa)"
    },
    {
      icon: <FaHeadset />,
      title: "Contact Support",
      details: ["+1 (234) 567-8900", "+1 (987) 654-3210", "24/7 Support Available"],
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #34d399)"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      details: ["hello@nexella.com", "support@nexella.com", "careers@nexella.com"],
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)"
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Emergency Support"],
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)"
    }
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      url: "#",
      color: "#1877f2",
      label: "Facebook"
    },
    {
      icon: <FaTwitter />,
      url: "#",
      color: "#1da1f2",
      label: "Twitter"
    },
    {
      icon: <FaInstagram />,
      url: "#",
      color: "#e4405f",
      gradient: "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
      label: "Instagram"
    },
    {
      icon: <FaLinkedin />,
      url: "#",
      color: "#0a66c2",
      label: "LinkedIn"
    },
    {
      icon: <FaWhatsapp />,
      url: "#",
      color: "#25d366",
      label: "WhatsApp"
    },
    {
      icon: <FaYoutube />,
      url: "#",
      color: "#ff0000",
      label: "YouTube"
    }
  ];

  return (
    <motion.div
      className={styles.contactPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className={styles.floatingOrb1}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 360, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className={styles.floatingOrb2}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [0, -360, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 0.5
        }}
      />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className={styles.heroBadge}
              variants={itemVariants}
            >
              <FaCompass /> Let's Connect
            </motion.div>

            <motion.h1
              className={styles.heroTitle}
              variants={itemVariants}
            >
              Let's Create
              <motion.span
                className={styles.gradientText}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Something Amazing
              </motion.span>
              Together
            </motion.h1>

            <motion.p
              className={styles.heroDescription}
              variants={itemVariants}
            >
              Ready to transform your digital presence? Let's start a conversation about
              how we can help your business grow and thrive in the digital world.
            </motion.p>

            <motion.div
              className={styles.heroStats}
              variants={itemVariants}
            >
              <div className={styles.statItem}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Support</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2h</span>
                <span className={styles.statLabel}>Avg Response</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>99%</span>
                <span className={styles.statLabel}>Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>How Can We Help You?</h2>
            <p className={styles.sectionSubtitle}>
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </motion.div>

          <motion.div
            className={styles.infoGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={styles.infoCard}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ '--card-gradient': info.gradient }}
              >
                <motion.div
                  className={styles.cardGlow}
                  animate={{
                    opacity: hoveredCard === index ? 0.6 : 0,
                    scale: hoveredCard === index ? 1.2 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className={styles.infoIconWrapper}
                  variants={floatingIconVariants}
                  animate="float"
                >
                  <div
                    className={styles.infoIcon}
                    style={{
                      background: info.gradient,
                      color: 'white'
                    }}
                  >
                    {info.icon}
                  </div>
                </motion.div>

                <motion.h3
                  className={styles.infoTitle}
                  animate={{
                    color: hoveredCard === index ? info.color : '#1e293b'
                  }}
                >
                  {info.title}
                </motion.h3>

                <div className={styles.infoDetails}>
                  {info.details.map((detail, i) => (
                    <motion.p
                      key={i}
                      className={styles.infoText}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + index * 0.2 }}
                    >
                      {detail}
                    </motion.p>
                  ))}
                </div>

                <motion.div
                  className={styles.cardAction}
                  initial={{ width: 0 }}
                  animate={{ width: hoveredCard === index ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Get in Touch →</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <motion.div
              className={styles.formContainer}
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.formHeader}>
                <motion.div
                  className={styles.formBadge}
                  whileHover={{ scale: 1.1 }}
                >
                  <FaPaperPlane /> Send Message
                </motion.div>
                <h2 className={styles.formTitle}>Get a Free Consultation</h2>
                <p className={styles.formSubtitle}>
                  Fill out the form and we'll get back to you within 2 hours.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    className={styles.successMessage}
                    key="success"
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <motion.div
                      className={styles.successIconWrapper}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360, 0]
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut"
                      }}
                    >
                      <FaCheckCircle className={styles.successIcon} />
                    </motion.div>
                    <h3>Message Sent Successfully! 🎉</h3>
                    <p>Thank you for contacting Nexella. Our team will reach out to you within 2 hours.</p>
                    <motion.div
                      className={styles.successTimer}
                      initial={{ width: '100%' }}
                      animate={{ width: '0%' }}
                      transition={{ duration: 5, ease: "linear" }}
                    />
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    className={styles.contactForm}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={styles.formRow}>
                      <motion.div
                        className={styles.formGroup}
                        whileHover={{ scale: 1.02 }}
                      >
                        <label
                          className={`${styles.formLabel} ${activeField === 'name' ? styles.active : ''}`}
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleFocus('name')}
                          onBlur={handleBlur}
                          required
                          className={styles.formInput}
                          placeholder="John Doe"
                        />
                        <motion.div
                          className={styles.inputUnderline}
                          animate={{
                            width: activeField === 'name' ? '100%' : '0%',
                            background: activeField === 'name' ? 'linear-gradient(90deg, #3b82f6, #8b5cf6)' : '#e2e8f0'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>

                      <motion.div
                        className={styles.formGroup}
                        whileHover={{ scale: 1.02 }}
                      >
                        <label
                          className={`${styles.formLabel} ${activeField === 'email' ? styles.active : ''}`}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFocus('email')}
                          onBlur={handleBlur}
                          required
                          className={styles.formInput}
                          placeholder="john@example.com"
                        />
                        <motion.div
                          className={styles.inputUnderline}
                          animate={{
                            width: activeField === 'email' ? '100%' : '0%',
                            background: activeField === 'email' ? 'linear-gradient(90deg, #3b82f6, #8b5cf6)' : '#e2e8f0'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </div>

                    <div className={styles.formRow}>
                      <motion.div
                        className={styles.formGroup}
                        whileHover={{ scale: 1.02 }}
                      >
                        <label
                          className={`${styles.formLabel} ${activeField === 'phone' ? styles.active : ''}`}
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => handleFocus('phone')}
                          onBlur={handleBlur}
                          className={styles.formInput}
                          placeholder="+1 (234) 567-8900"
                        />
                        <motion.div
                          className={styles.inputUnderline}
                          animate={{
                            width: activeField === 'phone' ? '100%' : '0%',
                            background: activeField === 'phone' ? 'linear-gradient(90deg, #3b82f6, #8b5cf6)' : '#e2e8f0'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>

                      <motion.div
                        className={styles.formGroup}
                        whileHover={{ scale: 1.02 }}
                      >
                        <label
                          className={`${styles.formLabel} ${activeField === 'subject' ? styles.active : ''}`}
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => handleFocus('subject')}
                          onBlur={handleBlur}
                          required
                          className={styles.formInput}
                          placeholder="Project Inquiry"
                        />
                        <motion.div
                          className={styles.inputUnderline}
                          animate={{
                            width: activeField === 'subject' ? '100%' : '0%',
                            background: activeField === 'subject' ? 'linear-gradient(90deg, #3b82f6, #8b5cf6)' : '#e2e8f0'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      className={styles.formGroup}
                      whileHover={{ scale: 1.02 }}
                    >
                      <label
                        className={`${styles.formLabel} ${activeField === 'message' ? styles.active : ''}`}
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        required
                        rows="6"
                        className={styles.formTextarea}
                        placeholder="Tell us about your project, goals, and timeline..."
                      ></textarea>
                      <motion.div
                        className={styles.inputUnderline}
                        animate={{
                          width: activeField === 'message' ? '100%' : '0%',
                          background: activeField === 'message' ? 'linear-gradient(90deg, #3b82f6, #8b5cf6)' : '#e2e8f0'
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className={styles.textareaCounter}
                        animate={{
                          color: formData.message.length > 500 ? '#ef4444' : '#64748b'
                        }}
                      >
                        {formData.message.length}/500
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className={styles.formFooter}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className={styles.privacyNote}>
                        <FaShieldAlt />
                        <span>Your information is secure and confidential</span>
                      </div>

                      <motion.button
                        type="submit"
                        className={styles.submitButton}
                        disabled={isSubmitting}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isSubmitting ? (
                          <motion.div
                            className={styles.loadingDots}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <span>•</span>
                            <span>•</span>
                            <span>•</span>
                          </motion.div>
                        ) : (
                          <>
                            <motion.span
                              animate={{ x: [0, 5, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <FaPaperPlane />
                            </motion.span>
                            Send Message Now
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Map Section */}
            <motion.div
              className={styles.mapContainer}
              variants={mapVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.mapHeader}>
                <motion.div
                  className={styles.mapBadge}
                  whileHover={{ scale: 1.1 }}
                >
                  <FaMapMarkerAlt /> Visit Us
                </motion.div>
                <h2 className={styles.mapTitle}>Our Headquarters</h2>
                <p className={styles.mapSubtitle}>
                  Feel free to visit our office for a face-to-face discussion.
                </p>
              </div>

              <div className={styles.mapWrapper}>
                <motion.div
                  className={styles.mapVisual}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.mapOverlay}>
                    <motion.div
                      className={styles.mapMarker}
                      animate={{
                        y: [0, -15, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <FaMapMarkerAlt />
                    </motion.div>
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Nexella Digital HQ
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      4517 Washington Avenue
                    </motion.p>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      New York, NY 39495
                    </motion.p>
                  </div>
                </motion.div>

                <div className={styles.mapDetails}>
                  <div className={styles.detailItem}>
                    <h4>Parking</h4>
                    <p>Free parking available in building garage</p>
                  </div>
                  <div className={styles.detailItem}>
                    <h4>Transport</h4>
                    <p>5 min walk from subway station</p>
                  </div>
                  <div className={styles.detailItem}>
                    <h4>Accessibility</h4>
                    <p>Wheelchair accessible facilities</p>
                  </div>
                </div>
              </div>

              <motion.div
                className={styles.emergencyContact}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.emergencyIcon}>
                  <FaHeadset />
                </div>
                <div className={styles.emergencyContent}>
                  <h4>Emergency Support</h4>
                  <p>24/7 technical support hotline</p>
                  <a href="tel:+11234567890" className={styles.emergencyPhone}>
                    +1 (123) 456-7890
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className={styles.socialSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.socialContent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className={styles.socialTitle}
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
            >
              Join Our Digital Community
            </motion.h2>
            <motion.p
              className={styles.socialDescription}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Follow us for daily insights, tips, and behind-the-scenes looks at our projects.
            </motion.p>

            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={styles.socialLink}
                  style={{
                    background: social.gradient || social.color,
                    '--social-color': social.color
                  }}
                  whileHover={{
                    scale: 1.2,
                    y: -10,
                    rotate: 360,
                    boxShadow: `0 15px 30px ${social.color}40`
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {social.icon}
                  <motion.span
                    className={styles.socialLabel}
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.label}
                  </motion.span>
                </motion.a>
              ))}
            </div>

            <motion.div
              className={styles.socialStats}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className={styles.stat}>
                <span className={styles.statNumber}>50K+</span>
                <span className={styles.statText}>Followers</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>1M+</span>
                <span className={styles.statText}>Impressions</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>95%</span>
                <span className={styles.statText}>Engagement</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating CTA */}
      <motion.div
        className={styles.floatingCTA}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h3>Need Immediate Assistance?</h3>
            <p>Call us now for instant support</p>
            <a href="tel:+11234567890" className={styles.ctaButton}>
              <FaPhone /> +1 (123) 456-7890
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;