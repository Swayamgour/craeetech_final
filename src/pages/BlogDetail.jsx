import React from 'react';
import styles from '../style/BlogDetail.module.css';

const BlogDetail = () => {
    return (
        <div className={styles.wrapper}>
            {/* 1. Header/Hero Section */}
            <header className={styles.header}>
                <div className={styles.metaTop}>
                    <span>15 MAY 2026</span>
                    <span className={styles.divider}>/</span>
                    <span>BY LIAM ANDERSON</span>
                </div>
                <h1 className={styles.title}>Where Creativity Meets Execution</h1>
            </header>

            {/* 2. Featured Image */}
            <div className={styles.featuredImageContainer}>
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                    alt="Team working"
                    className={styles.featuredImage}
                />
            </div>

            {/* 3. Article Body */}
            <article className={styles.content}>
                <p className={styles.intro}>
                    Design is more than aesthetics; it is the bridge between imagination and reality,
                    between problems and solutions.
                </p>

                <h2 className={styles.subheading}>The Power of Inspiration</h2>
                <ul className={styles.list}>
                    <li>A walk through nature, observing patterns and textures.</li>
                    <li>Art, architecture, or cultural motifs that speak to a designer's soul.</li>
                    <li>Everyday problems that demand innovative solutions.</li>
                </ul>

                <div className={styles.tags}>
                    <span>Tags:</span>
                    <a href="#">Business</a>
                    <a href="#">Startups</a>
                    <a href="#">Marketing</a>
                </div>
            </article>

            {/* 4. Reply Form Section */}
            <section className={styles.replySection}>
                <h3 className={styles.replyTitle}>Leave a Reply</h3>
                <p className={styles.replyNote}>Your email address will not be published.</p>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="Full name*" required className={styles.input} />
                        <input type="email" placeholder="Email address*" required className={styles.input} />
                    </div>
                    <textarea placeholder="Comments*" className={styles.textarea}></textarea>
                    <button type="submit" className={styles.submitBtn}>
                        Submit <span className={styles.arrow}>→</span>
                    </button>
                </form>
            </section>

            {/* 5. Related Articles Preview */}
            {/* <section className={styles.related}>
                <div className={styles.relatedHeader}>
                    <h2>More Related Articles</h2>
                    <button className={styles.viewAll}>View All <span className={styles.arrow}>→</span></button>
                </div>
                <div className={styles.relatedGrid}></div>
            </section> */}
        </div>
    );
};

export default BlogDetail;