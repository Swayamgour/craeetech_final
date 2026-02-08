import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../style/FAQ.module.css";

const faqs = [
    {
        question: "Am I a good candidate for plastic surgery?",
        answer:
            "A good candidate is someone in good health with realistic expectations. A consultation with a certified professional is essential."
    },
    {
        question: "How do I prepare for surgery?",
        answer:
            "Preparation may include medical tests, stopping certain medications, and following your surgeon’s pre-op instructions."
    },
    {
        question: "What is the difference between cosmetic and surgery?",
        answer:
            "Cosmetic surgery focuses on appearance, while reconstructive surgery restores function and normal appearance."
    }
];

const FAQ = () => {
    const [active, setActive] = useState(0);

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>

                {/* LEFT IMAGE */}
                <motion.div
                    className={styles.imageBox}
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                        alt="FAQ"
                    />
                </motion.div>

                {/* RIGHT CONTENT */}
                <div className={styles.content}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Frequently <br /> Asked Questions
                    </motion.h2>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        We have professional experts around world.
                    </motion.p>

                    {/* FAQ LIST */}
                    <div className={styles.faqList}>
                        {faqs.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.faqItem}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <button
                                    className={styles.question}
                                    onClick={() => setActive(active === index ? -1 : index)}
                                >
                                    {item.question}
                                    <span
                                        className={`${styles.icon} ${active === index ? styles.active : ""
                                            }`}
                                    >
                                        ✓
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {active === index && (
                                        <motion.div
                                            className={styles.answer}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <p>{item.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
