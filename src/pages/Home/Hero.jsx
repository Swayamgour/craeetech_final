import styles from "../../style/Hero.module.css";
import HeroText from "../../components/HeroText";
import { motion } from "framer-motion";
import ParticleBackground from "../../components/ParticleBackground";



const Hero = () => {


    return (
        <>
            <section className={styles.hero}>
                <ParticleBackground />
                {/* <div className={styles.overlay}></div> */}

                <div className={styles.content}>
                    {/* Text */}
                    <HeroText />

                    {/* Image */}
                    <motion.div
                        className={styles.imageBox}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        <img src={'/assets/logo.gif'} alt="hero" />
                    </motion.div>
                </div>


                <div className={styles.wrapper}>
                    <motion.svg
                        className={styles.svg}
                        viewBox="0 0 200 200"
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "linear"
                        }}
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                            />
                        </defs>

                        <text className={styles.text}>
                            <textPath href="#circlePath">
                                ● DIGITAL MARKETING ● DIGITAL MARKETING
                            </textPath>
                        </text>
                    </motion.svg>

                    <div className={styles.centerIcon}>↓</div>
                </div>


            </section>
        </>
    );
};

export default Hero;
