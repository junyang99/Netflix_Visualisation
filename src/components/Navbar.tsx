import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavItems: React.FC = () => (
    <div className='bg-background flex flex-col sm:flex-row sm:space-x-3 sm:text-lg'>
      <motion.li  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/about"
          className="block px-4 py-2 text-md  hover:text-red-500"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/financial"
          className="block px-4 py-2 text-md  hover:text-red-500 "
          onClick={() => setIsOpen(false)}
        >
          Financial
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} >
        <Link
          to="/netflix"
          className="block px-4 py-2 text-md  hover:text-red-500 "
          onClick={() => setIsOpen(false)}
        >
          Netflix
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/user"
          className="block px-4 py-2 text-md  hover:text-red-500 "
          onClick={() => setIsOpen(false)}
        >
          User
        </Link>
      </motion.li>
    </div>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-background" // Set background color here
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="flex items-center">
              <img
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                alt="Netflix"
                className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto transition-transform duration-300 hover:scale-110"
                />
            </Link>
          </motion.div>
          <nav className="hidden sm:flex">
            <motion.ul
              className="flex space-x-4"
        
            >
              <NavItems />
            </motion.ul>
          </nav>
          <motion.div className="sm:hidden" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-red-500 focus:outline-none transition-colors duration-300" // Adjust text color if needed
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavItems />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
     


export default Navbar;
