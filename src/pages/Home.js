import React from "react";
import Hero from "../components/Home/Hero";
import Parallax from "../components/Home/Parallax";
import Services from "../components/Home/Services";
import Parallax1 from "../components/Home/Parallax1";
import Portifolio1 from "../components/Home/Portifolio1";
import Portifolio2 from "../components/Home/Portifolio2";
import Portifolio3 from "../components/Home/Portifolio3";
import Contact from "../components/Home/Contact";
import "../assests/css/app.scss";

const Home = () => {
  return (
    <div>
      <Hero />
      <Parallax />
      <Services />
      <Parallax1 />
      <Portifolio1 />
      <Portifolio2 />
      <Portifolio3 />
      <Contact />
    </div>
  );
};

export default Home;
