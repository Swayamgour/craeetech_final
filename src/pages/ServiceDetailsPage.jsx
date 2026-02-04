import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, 
  FaPhone, 
  FaDownload, 
  FaChevronRight, 
  FaChevronDown,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeadset,
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaCheckCircle,
  FaQuoteLeft
} from 'react-icons/fa';
import styles from '../style/ServiceDetailsPage.module.css';

const ServiceDetailsPage = () => {
  const [activeService, setActiveService] = useState('web-development');
  const [openFaq, setOpenFaq] = useState(null);

  // Services data
  const services = [
    { id: 'web-development', title: 'Web Development', icon: <FaCode />, color: '#3b82f6' },
    { id: 'ui-ux-design', title: 'UI/UX Design', icon: <FaPaintBrush />, color: '#8b5cf6' },
    { id: 'digital-marketing', title: 'Digital Marketing', icon: <FaBullhorn />, color: '#10b981' },
    { id: 'product-design', title: 'Product Design', icon: <FaPaintBrush />, color: '#f59e0b' },
    { id: 'branding-illustration', title: 'Branding & Illustration', icon: <FaPaintBrush />, color: '#ef4444' },
    { id: 'mobile-solutions', title: 'Mobile Solutions', icon: <FaMobileAlt />, color: '#ec4899' },
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: 'Is My Technology Allowed On Tech?',
      answer: 'There are many variations of passages the majority have suffered alteration in some form injected humour, or randomised words believable. We support a wide range of technologies and platforms.'
    },
    {
      id: 2,
      question: 'How To Soft Launch Your Business?',
      answer: 'Soft launching involves testing your product with a limited audience before the official release. We help you strategize and execute successful soft launches.'
    },
    {
      id: 3,
      question: 'How To Turn Visitors Into Contributors?',
      answer: 'Engage your audience with compelling content, clear calls-to-action, and user-friendly interfaces. We implement strategies that convert visitors into active contributors.'
    },
    {
      id: 4,
      question: 'How Can I Find My Solutions?',
      answer: 'Our expert team analyzes your needs and provides customized solutions. Contact us for a consultation to discover the best approach for your project.'
    }
  ];

  // Tech services
  const techServices = [
    'Web Development', 'UI/UX Design', 'Mobile Application', 'Cloud Service', 'Cyber Security'
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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
        duration: 0.3
      }
    }
  };

  const faqVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const sidebarVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const handleFaqToggle = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <motion.div 
      className={styles.serviceDetailsPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.header 
        className={styles.header}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <motion.div 
              className={styles.logo}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              Nexella
            </motion.div>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                {['Home', 'Pages', 'Projects', 'Services', 'News', 'Contact'].map((item, index) => (
                  <motion.li 
                    key={item}
                    className={styles.navItem}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <a href="#" className={styles.navLink}>{item}</a>
                  </motion.li>
                ))}
              </ul>
              <div className={styles.headerActions}>
                <motion.div 
                  className={styles.searchBox}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring" }}
                >
                  <FaSearch className={styles.searchIcon} />
                  <input type="text" placeholder="Search..." className={styles.searchInput} />
                </motion.div>
                <motion.button 
                  className={styles.quoteButton}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a quote
                  <FaChevronRight className={styles.buttonIcon} />
                </motion.button>
              </div>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Breadcrumb */}
      <motion.div 
        className={styles.breadcrumb}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className={styles.container}>
          <div className={styles.breadcrumbContent}>
            <span className={styles.breadcrumbItem}>Home</span>
            <FaChevronRight className={styles.breadcrumbSeparator} />
            <span className={styles.breadcrumbItem}>Service Details</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Sidebar */}
            <motion.aside 
              className={styles.sidebar}
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
            >
              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Our Services</h3>
                <div className={styles.serviceList}>
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      className={`${styles.serviceItem} ${activeService === service.id ? styles.active : ''}`}
                      onClick={() => setActiveService(service.id)}
                      variants={itemVariants}
                      custom={index}
                      whileHover={{ x: 10, backgroundColor: `${service.color}10` }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div 
                        className={styles.serviceIcon}
                        style={{ color: service.color }}
                      >
                        {service.icon}
                      </div>
                      <span className={styles.serviceName}>{service.title}</span>
                      <FaChevronRight className={styles.serviceArrow} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                className={styles.contactCard}
                variants={cardVariants}
                whileHover="hover"
              >
                <div className={styles.contactHeader}>
                  <FaHeadset className={styles.contactIcon} />
                  <h4>Need help? Talk to an expert</h4>
                </div>
                <div className={styles.contactInfo}>
                  <FaPhone className={styles.phoneIcon} />
                  <a href="tel:+8921231129999" className={styles.phoneNumber}>
                    +892 (123) 112 - 9999
                  </a>
                </div>
                <motion.button 
                  className={styles.downloadButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className={styles.downloadIcon} />
                  Download Pdf File
                </motion.button>
              </motion.div>
            </motion.aside>

            {/* Main Content */}
            <motion.article 
              className={styles.contentArea}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className={styles.serviceHeader}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className={styles.serviceTitle}>Service Overview</h1>
                <div className={styles.serviceContent}>
                  <p>
                    Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui 
                    dolorem ipsum quia quased inventore veritatis et quasi architecto beatae vitae 
                    dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla 
                    sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry.
                  </p>
                  <p>
                    When an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. Lorem ipsum dolor sit 
                    amet consectetur adipiscing elit.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className={styles.serviceCenter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className={styles.centerTitle}>Service Center</h2>
                <div className={styles.centerContent}>
                  <p>
                    Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui 
                    dolorem ipsum quia quased inventore veritatis et quasi architecto beatae vitae 
                    dicta sunt explicabo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do eiusmod 
                    remaining essentially unchanged Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className={styles.downloadButtons}>
                  <motion.button 
                    className={styles.pdfButton}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload className={styles.pdfIcon} />
                    Download Pdf File
                  </motion.button>
                  <motion.button 
                    className={styles.pdfButton}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload className={styles.pdfIcon} />
                    Download Pdf File
                  </motion.button>
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div 
                className={styles.faqSection}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.faqHeader}>
                  <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                  <p className={styles.faqDescription}>
                    Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui 
                    dolorem ipsum quia quased inventore veritatis et quasi architecto beatae vitae 
                    dicta sunt explicabo.
                  </p>
                </div>
                <div className={styles.faqList}>
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      className={styles.faqItem}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div
                        className={styles.faqQuestion}
                        onClick={() => handleFaqToggle(faq.id)}
                        whileHover={{ backgroundColor: '#f8fafc' }}
                      >
                        <div className={styles.questionContent}>
                          <FaQuoteLeft className={styles.quoteIcon} />
                          <span>{faq.question}</span>
                        </div>
                        <motion.div
                          animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown className={styles.chevronIcon} />
                        </motion.div>
                      </motion.div>
                      <AnimatePresence>
                        {openFaq === faq.id && (
                          <motion.div
                            className={styles.faqAnswer}
                            variants={faqVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          >
                            <p>{faq.answer}</p>
                            <FaCheckCircle className={styles.checkIcon} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.article>
          </div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer 
        className={styles.footer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <motion.h3 
                className={styles.footerLogo}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
              >
                Nexella
              </motion.h3>
              <p className={styles.footerDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonummy nibh 
                euismod dolore magna aliquam.
              </p>
            </div>

            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Quick Links</h4>
              <ul className={styles.footerLinks}>
                {['About Us', 'Our Team', 'Our Portfolio', 'Careers', 'Contact Us'].map((link, index) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <a href="#">{link}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Services</h4>
              <ul className={styles.footerLinks}>
                {techServices.map((service, index) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <a href="#">{service}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Contact Us</h4>
              <div className={styles.contactDetails}>
                <motion.div 
                  className={styles.contactItem}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring" }}
                >
                  <FaEnvelope className={styles.contactDetailIcon} />
                  <div>
                    <span>Mail Us:</span>
                    <a href="mailto:hanson@example.com">hanson@example.com</a>
                  </div>
                </motion.div>
                <motion.div 
                  className={styles.contactItem}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring" }}
                >
                  <FaMapMarkerAlt className={styles.contactDetailIcon} />
                  <div>
                    <span>Address:</span>
                    <p>4517 Washington Ave. Newyork 39495</p>
                  </div>
                </motion.div>
                <motion.div 
                  className={styles.contactItem}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring" }}
                >
                  <FaPhone className={styles.contactDetailIcon} />
                  <div>
                    <span>Phone:</span>
                    <a href="tel:+1234567890">(123) 456 - 7890</a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default ServiceDetailsPage;