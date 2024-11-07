import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const currentYear = new Date().getFullYear();
    const teamMembers = ["Faruq", "Jie Peng", "Jun Kai", "Jun Yang", "Lin Tao"];

    return (
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 p-3 md:p-10 lg:p-12">
            <Outlet />
        </main>
        {/* <footer className="bg-gray-800 text-white py-4 mt-auto">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 MyApp. All rights reserved.</p>
            </div>
        </footer> */}
    <footer className="border-t border-gray-700 mt-20  text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12 lg:px-8 text-center space-y-4">
                {/* Main Footer Content */}
                <p className="text-lg font-semibold tracking-wide text-gray-400">
                    © {currentYear} <span className="text-white">IS482-G2</span> - All rights reserved.
                </p>
                
                {/* Decorative Divider */}
                <div className="flex justify-center items-center space-x-2">
                    <div className="w-10 h-px bg-gray-500"></div>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Visualization Gods</span>
                    <div className="w-10 h-px bg-gray-500"></div>
                </div>
                
                {/* Team Members */}
                <p className="text-base text-gray-400">
                    {teamMembers.join(' • ')}
                </p>
            </div>
        </footer>
    </div>
    )
}

export default Layout