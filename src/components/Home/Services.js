import React from "react";
import { motion } from "framer-motion";
import "../../assests/css/services.scss";

const Services = () => {
  const varaiantsRight = {
    initial: {
      x: 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        straggerChildren: 0.1,
      },
    },
  };

  const varaiantsLeft = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        straggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="Services" className="Services">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={varaiantsRight}
          initial={"initial"}
          whileInView={"animate"}
        >
          <h3>
            <span>I focus on learn new techchnology, build skills, </span>
            <span>and move ahead.</span>
          </h3>
          <div className="lineContainer">
            <span>line</span>
          </div>
        </motion.div>
        <div className="titleContainer">
          <motion.h3
            variants={varaiantsLeft}
            initial={"initial"}
            whileInView={"animate"}
          >
            recent projects
          </motion.h3>
          <motion.button
            variants={varaiantsLeft}
            initial={"initial"}
            whileInView={"animate"}
          >
            view more
          </motion.button>
        </div>
        <motion.div
          className="listContainer"
          variants={varaiantsRight}
          initial={"initial"}
          whileInView={"animate"}
        >
          <ul className="box">
            <li>
              <h4>project name</h4>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                similique non, deleniti architecto nulla maiores, iste provident
                iure recusandae minus reprehenderit totam! Optio odio veritatis
                debitis quae, est ipsa itaque.
              </p>
            </li>
            <li>
              <button>go</button>
            </li>
          </ul>
          <ul className="box">
            <li>
              <h4>project name</h4>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                similique non, deleniti architecto nulla maiores, iste provident
                iure recusandae minus reprehenderit totam! Optio odio veritatis
                debitis quae, est ipsa itaque.
              </p>
            </li>
            <li>
              <button>go</button>
            </li>
          </ul>
          <ul className="box">
            <li>
              <h4>project name</h4>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                similique non, deleniti architecto nulla maiores, iste provident
                iure recusandae minus reprehenderit totam! Optio odio veritatis
                debitis quae, est ipsa itaque.
              </p>
            </li>
            <li>
              <button>go</button>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
