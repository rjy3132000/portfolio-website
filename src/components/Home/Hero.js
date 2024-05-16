import Navbar from "../navbar/Navbar";
import { profileImage } from "../../assests/constants/constants";
import { motion } from "framer-motion";
import "../../assests/css/hero.scss";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  const imageVariants = {
    initial: {
      x: 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="Homepage">
      <Navbar />

      <div className="hero">
        <div className="wrapper">
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="textContainer"
          >
            <motion.h3 variants={textVariants}>heavy developer</motion.h3>
            <motion.h4 variants={textVariants}>
              web developer and mobile developer
            </motion.h4>
            <motion.div variants={textVariants} className="buttons">
              <motion.button variants={textVariants}>
                see the latest works
              </motion.button>
              <motion.button variants={textVariants}>contact me</motion.button>
            </motion.div>
            <motion.img
              variants={textVariants}
              src={profileImage.scroll}
              animate="scrollButton"
              alt="SCROLL VIEW"
            />
          </motion.div>
          <motion.div
            className="slidingContainer"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
          >
            web and app developer
          </motion.div>
          <motion.div
            className="imageContainer"
            variants={imageVariants}
            initial="initial"
            animate="animate"
          >
            <motion.img
              variants={imageVariants}
              src={profileImage.image}
              alt="Rajesh"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
