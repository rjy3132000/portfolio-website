import React, { useRef } from "react";
import "../../assests/css/portfolio.scss";
import LaptopImage from "../../assests/images/portfolio/portfolio.jpg";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: LaptopImage,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus provident ratione, earum temporibus minus debitis. Eveniet nihil atque deleniti quos, voluptatem est quod? Labore a veritatis earum nulla sint velit!",
  },
  {
    id: 2,
    title: "Next Commerce",
    img: LaptopImage,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus provident ratione, earum temporibus minus debitis. Eveniet nihil atque deleniti quos, voluptatem est quod? Labore a veritatis earum nulla sint velit!",
  },
  {
    id: 3,
    title: "React Commerce",
    img: LaptopImage,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus provident ratione, earum temporibus minus debitis. Eveniet nihil atque deleniti quos, voluptatem est quod? Labore a veritatis earum nulla sint velit!",
  },
  {
    id: 4,
    title: "Next Commerce",
    img: LaptopImage,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus provident ratione, earum temporibus minus debitis. Eveniet nihil atque deleniti quos, voluptatem est quod? Labore a veritatis earum nulla sint velit!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item?.img} alt={item?.title} />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item?.title}</h2>
            <p>{item?.desc}</p>
            <button>see demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portifolio1 = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio">
      <div className="wrapper" ref={ref}>
        <div className="progress">
          <h1>feature works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        <div className="mainCardContainer">
          {items?.map((item) => (
            <Single item={item} key={item?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portifolio1;
