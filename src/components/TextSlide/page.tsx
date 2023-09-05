"use client";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Slide.module.css";

function TextSlide() {
  return (
    <AnimatePresence>
      <motion.section
        className={styles.container}
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
      >
        <div
          className={`${styles.scroll_text_container} text-6xl md:text-8xl font-jbExtrabolditalic`}
        >
          <div className={styles.scroll_text}>
            <p className="flex items-center">COMING SOON</p>
            <img
              src="/assets/logo/sosc-white.png"
              className="h-10 px-2 md:h-16"
              alt="/"
            />
            <p className="flex items-center">COMING SOON</p>
            <img
              src="/assets/logo/logo-white.png"
              className="h-20 md:h-32"
              alt="/"
            />
            <p className="flex items-center">COMING SOON</p>
            <img
              src="/assets/logo/sosc-white.png"
              className="h-10 px-2 md:h-16"
              alt="/"
            />
          </div>
          <div className={styles.scroll_text}>
            <p className="flex items-center">COMING SOON</p>
            <img
              src="/assets/logo/logo-white.png"
              className="h-20 md:h-32"
              alt="/"
            />
            <p className="flex items-center">COMING SOON</p>
            <img
              src="/assets/logo/sosc-white.png"
              className="h-10 px-2 md:h-16"
              alt="/"
            />
            <p className="flex items-center">COMING SOON</p>
            <img
              src="/assets/logo/logo-white.png"
              className="h-20 md:h-32"
              alt="/"
            />
          </div>
          <div className={styles.scroll_text}>
            <p className="flex items-center">COMING SOON</p>
            <img
              src="/assets/logo/sosc-white.png"
              className="h-10 px-2 md:h-16"
              alt="/"
            />
            <p className="flex items-center">COMING SOON</p>
            <img
              src="/assets/logo/logo-white.png"
              className="h-20 md:h-32"
              alt="/"
            />
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

export default TextSlide;
