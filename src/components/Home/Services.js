import React from "react";
import { motion } from "framer-motion";
import "../../assests/css/services.scss";

const Services = () => {
  return (
    <section id="Services" className="Services">
      <motion.div className="wrapper">
        <motion.div className="textContainer">
          <h3>
            <span>I focus on learn new techchnology, build skills, </span>
            <span>and move ahead.</span>
          </h3>
          <div className="lineContainer">
            <span>line</span>
          </div>
        </motion.div>
        <motion.div className="titleContainer">
          <h3>recent projects</h3>
          <button>view more</button>
        </motion.div>
        <motion.div className="listContainer">
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
      </motion.div>
    </section>
  );
};

export default Services;
