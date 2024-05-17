import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../assests/css/parallax.scss";

const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const yBG = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="Portfolio" className="Parallax">
      <div className="wrapper" ref={ref}>
        <motion.h3 style={{ y: yText }}>what we do?</motion.h3>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{ y: yBG }} className="planets"></motion.div>
        <motion.div style={{ x: yBG }} className="stars"></motion.div>
      </div>
    </section>
  );
};

export default Parallax;
