import React from "react";
import { motion } from "framer-motion";
import styles from "../style/CareerPage.module.css";
import { FaBriefcase, FaUsers, FaRocket } from "react-icons/fa";

const jobs = [
  {
    id: "001",
    title: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    desc: "Build modern UI using React and Framer Motion.",
  },
  {
    id: "002",
    title: "Backend Developer",
    location: "Bangalore",
    type: "Full Time",
    desc: "Develop scalable APIs with Node.js and MongoDB.",
  },
  {
    id: "003",
    title: "UI/UX Designer",
    location: "Delhi",
    type: "Contract",
    desc: "Design creative and user-friendly experiences.",
  },
  {
    id: "004",
    title: "Digital Marketing Specialist",
    location: "Remote",
    type: "Full Time",
    desc: "Create data-driven marketing strategies.",
  },
];

const CareerPage = () => {
  return (
    <div className={styles.careerPage}>

      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Join Our Team</h1>
        <p>Build your future with us</p>
      </motion.section>

      {/* STATS */}
      <motion.section className={styles.stats}>
        <div className={styles.statsGrid}>
          <motion.div whileHover={{ scale: 1.05 }} className={styles.statCard}>
            <FaUsers />
            <h3>50+</h3>
            <span>Team Members</span>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className={styles.statCard}>
            <FaBriefcase />
            <h3>120+</h3>
            <span>Projects</span>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className={styles.statCard}>
            <FaRocket />
            <h3>10+</h3>
            <span>Years Experience</span>
          </motion.div>
        </div>
      </motion.section>

      {/* JOB LIST */}
      <section className={styles.jobsSection}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Open Positions
        </motion.h2>

        <div className={styles.jobsGrid}>
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              className={styles.jobCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className={styles.jobId}>{job.id}</span>
              <h3>{job.title}</h3>
              <p>{job.desc}</p>

              <div className={styles.jobMeta}>
                <span>{job.location}</span>
                <span>{job.type}</span>
              </div>

              <button>Apply Now →</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Ready to Start Your Career?</h2>
        <p>Send your resume and become part of our creative team.</p>
        <button>Send Resume</button>
      </motion.section>

    </div>
  );
};

export default CareerPage;
