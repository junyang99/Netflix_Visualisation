import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 p-6 md:p-10 lg:p-12">
            <Outlet />
        </main>
        {/* <footer className="bg-gray-800 text-white py-4 mt-auto">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 MyApp. All rights reserved.</p>
            </div>
        </footer> */}
    </div>
    )
}

export default Layout