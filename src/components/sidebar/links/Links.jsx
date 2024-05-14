import React from "react";
import {motion} from "framer-motion"

const Links = () => {
  const variants = {
    open: {
      transition: {
        staggerChldren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChldren: 0.05,
        staggerDirection : -1
      },
    },
  };

  const itemVariants = {
    open: {
      y : 0,
      opacity : 1,
    },
    closed: {
      y : 50,
      opacity : 0,
    },
  };

  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale : 1.1}} whileTap={{scale : .95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
