import React from 'react';
import Container from '../../components/ui/Container/Container';

const Main: React.FC = () => {
    return (
        <Container>
           <div className="text-center py-16">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-pulse">
                    Welcome to the Main Page!
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Explore our features and enjoy the seamless experience we offer.
                </p>
                <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-500 transition duration-300 shadow-lg">
                    Get Started
                </button>
            </div>
        </Container>
    );
};

export default Main;