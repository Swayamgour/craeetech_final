import React from 'react';
import styles from '../style/Blog.module.css';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
    {
        id: 1,
        title: "How to Create a Stunning",
        excerpt: "Explore our latest blog and articles for expert insights on web design.",
        date: "15 MAY 2026",
        author: "LIAM ANDERSON",
        image: "/assets/pic1.jpg" // Replace with your images
    },
    {
        id: 2,
        title: "Transform Your Ideas into Impact",
        excerpt: "Explore our latest blog and articles for expert insights on web design.",
        date: "15 MAY 2026",
        author: "ETHAN BENNETT",
        image: "/assets/pic1.jpg"
    },
    {
        id: 1,
        title: "How to Create a Stunning",
        excerpt: "Explore our latest blog and articles for expert insights on web design.",
        date: "15 MAY 2026",
        author: "LIAM ANDERSON",
        image: "/assets/pic1.jpg" // Replace with your images
    },
    {
        id: 2,
        title: "Transform Your Ideas into Impact",
        excerpt: "Explore our latest blog and articles for expert insights on web design.",
        date: "15 MAY 2026",
        author: "ETHAN BENNETT",
        image: "/assets/pic1.jpg"
    },
    {
        id: 1,
        title: "How to Create a Stunning",
        excerpt: "Explore our latest blog and articles for expert insights on web design.",
        date: "15 MAY 2026",
        author: "LIAM ANDERSON",
        image: "/assets/pic1.jpg" // Replace with your images
    },
    {
        id: 2,
        title: "Transform Your Ideas into Impact",
        excerpt: "Explore our latest blog and articles for expert insights on web design.",
        date: "15 MAY 2026",
        author: "ETHAN BENNETT",
        image: "/assets/pic1.jpg"
    },
    // Add more posts as needed...
];



const Blog = () => {

    const navigate = useNavigate()
    return (
        <section className={styles.blogSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Latest <br /><span>Blog & Article</span></h2>
                    <p className={styles.subtitle}>Explore our latest blog and articles for insights on web design, SEO, and digital trends.</p>
                    <button className={styles.allBtn}>All <span>→</span></button>
                </div>

                <div className={styles.grid}>
                    {blogPosts.map((post) => (
                        <article onClick={() => navigate('/BlogDetail')} key={post.id} className={styles.card}>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                <div className={styles.meta}>
                                    <span className={styles.date}>{post.date}</span>
                                    <span className={styles.separator}>/</span>
                                    <span className={styles.author}>BY {post.author}</span>
                                </div>
                            </div>
                            <div className={styles.imageWrapper}>
                                <img src={post.image} alt={post.title} className={styles.image} />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;