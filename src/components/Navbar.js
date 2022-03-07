import React from 'react';
import './Navbar.css';
import { MdOutlineDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <h1>
            <Link to="/">
              My Country Info
            </Link>
        </h1>

        <p>
            < MdOutlineDarkMode />
            Dark Mode
        </p>
    </nav>
  )
}

export default Navbar