import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../assests/css/parallax.scss";

const Parallax1 = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const yBG = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="Parallax1">
      <div className="wrapper" ref={ref}>
        <motion.h3 style={{ y: yText }}>what we did</motion.h3>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{ y: yBG }} className="planets"></motion.div>
        <motion.div style={{ x: yBG }} className="stars"></motion.div>
      </div>
    </section>
  );
};

export default Parallax1;
