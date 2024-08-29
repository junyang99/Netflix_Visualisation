import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
           <Link to="/" className="text-2xl font-bold hover:text-blue-300">IS482-VA</Link> {/* Change this text to the name of group */}
            <ul className="flex gap-8 text-lg">
                <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
                <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
        </nav>)

export default Navbar