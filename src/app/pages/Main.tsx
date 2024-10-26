import Container from '../../components/Container';
import { Button } from "@/components/ui/button"

const Main = () => {
    return (
        <Container>
           <div className="text-center py-16">
                <h1 className="text-5xl font-extrabold  mb-4 animate-pulse">
                    Welcome to the Main Page!
                </h1>
                <p className="text-lg mb-8">
                    Explore our features and enjoy the seamless experience we offer.
                </p>
                <Button className='font-bold'>Get Started</Button>
            </div>
        </Container>
    );
};

export default Main;