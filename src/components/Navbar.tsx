import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="flex justify-between bg-background items-center p-4 bg bg-opacity-80 sticky top-0 z-50 shadow-md transition-all duration-300">
    {/* Logo container with animation */}
     <Link
      to="/">
      <div className="flex items-center ml-8 animate-slideIn">
        <img
          className="nav_logo hover:scale-110 transition-transform duration-500"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
          style={{ height: '80px', width: 'auto' }}
        />
      </div>
      </Link>

    {/* Group Name with Netflix-style font */}
   

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
          to="/financial"
          className="hover:text-red-500 hover:scale-105 transition-transform duration-300"
        >
          Financial
        </Link>
      </li>
    
      {/* <li>
        <Link
          to="/Tableau"
          className="hover:text-red-500 hover:scale-105 transition-transform duration-300"
        >
          Tableau
        </Link>
      </li> */}
    </ul>
  </nav>
);

export default Navbar;
