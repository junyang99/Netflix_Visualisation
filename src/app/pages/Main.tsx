import Carousell from '@/components/Carousell';
import Container from '../../components/Container';
import { Button } from '@/components/ui/button';

const Main = () => {
    return (
        <Container>
            <div className="text-center py-16">
                <h1 className="text-5xl font-extrabold  mb-4 animate-pulse">
                    Unveiling Netflix's Global Content Strategies                </h1>
                <p className="text-lg mb-8">
                    Analyzing patterns and trends in the streaming industry to empower decision-makers.
                </p>
                <Button>View Dashboard</Button>
            </div>

            <div>
                <Carousell />
            </div>
        </Container>
    );
};

export default Main;