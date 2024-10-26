import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="flex justify-between items-center p-4 bg-black bg-opacity-80 sticky top-0 z-50 shadow-md transition-all duration-300">
    {/* Logo container with animation */}
    <div className="flex items-center ml-8 animate-slideIn">
      <img
        className="nav_logo hover:scale-110 transition-transform duration-500"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
        style={{ height: '80px', width: 'auto' }}
      />
    </div>

    {/* Group Name with Netflix-style font */}
    <Link
      to="/"
      className="text-3xl font-bold text-white hover:text-red-500 transition-colors duration-300 netflix-font"
    >
      IS482-VA
    </Link>

    {/* Navigation Links */}
    <ul className="flex gap-8 text-lg text-white mr-8 netflix-font">
    <li>
        <Link
          to="/about"
          className="hover:text-red-500 hover:scale-105 transition-transform duration-300"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/netflix"
          className="hover:text-red-500 hover:scale-105 transition-transform duration-300"
        >
          Netflix
        </Link>
      </li>
      <li>
        <Link
          to="/user"
          className="hover:text-red-500 hover:scale-105 transition-transform duration-300"
        >
          User
        </Link>
      </li>
      <li>
        <Link
          to="/experiment"
          className="hover:text-red-500 hover:scale-105 transition-transform duration-300"
        >
          Experiment
        </Link>
      </li>
      <li>
        <Link
          to="/Tableau"
          className="hover:text-red-500 hover:scale-105 transition-transform duration-300"
        >
          Tableau
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
