import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import {motion} from "framer-motion"
import { LOGOIMAGE, NavLinks } from './NavbarData';
import "./navbar.scss";

function Navbar() {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className="wrapper">
        <motion.h1 initial={{opacity : 0, scale : .3}} animate={{opacity : 1, scale : 1}} transition={{duration : 1}}>{LOGOIMAGE}</motion.h1>
        <nav>
          <ul>
            {
              NavLinks.map((nav) => (
                <li key={nav.id}><a href={nav.path} title={nav.name} rel="noreferrer" target="_blank"><img src={nav.logo} alt={nav.name} /></a></li>
              ))
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;