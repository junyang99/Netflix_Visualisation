import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CarousellPopUp from './CarousellPopUp';

const shows = [
    { id: 1, title: "Avatar", image: "https://lumiere-a.akamaihd.net/v1/images/avatar_800x1200_208c9665.jpeg?region=0%2C0%2C800%2C1200", revenue: 2787965087, year: 2009, context: "James Cameron’s groundbreaking epic about humanity's struggle on Pandora, blending sci-fi, adventure, and stunning visuals that revolutionized cinematic 3D experiences.", productionCompany: "20th Century Studios" },
    { id: 2, title: "Star Wars: The Force Awakens", image: "https://i.etsystatic.com/23402008/r/il/86eb07/2374193445/il_fullxfull.2374193445_1y0k.jpg", revenue: 2068223624, year: 2015, context: "The Force returns in this modern reawakening of Star Wars, where old heroes join forces with new ones against a powerful, dark resurgence.", productionCompany: "Walt Disney Pictures" },
    { id: 3, title: "Titanic", image: "https://c8.alamy.com/comp/BKB5RX/titanic-year-1997-director-james-cameron-kate-winslet-leonardo-dicaprio-BKB5RX.jpg", revenue: 1845034188, year: 1997, context: "A tragic romance aboard the doomed RMS Titanic, starring Leonardo DiCaprio and Kate Winslet in a timeless tale of love and survival.", productionCompany: "20th Century Studios" },
    { id: 4, title: "The Avengers", image: "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", revenue: 1519557910, year: 2012, context: "Marvel’s iconic superheroes unite for the first time, facing a global threat in a groundbreaking ensemble that redefined superhero cinema.", productionCompany: "Paramount Pictures" },
    { id: 5, title: "Jurassic World", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/df4ny9z-1d4723ce-a009-48f5-8225-c29a0bbd976d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGY0bnk5ei0xZDQ3MjNjZS1hMDA5LTQ4ZjUtODIyNS1jMjlhMGJiZDk3NmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FIWQP5ADrL5k5hRFPShprrB1HK36hjXKZYpUPu3z4K8", revenue: 1513528810, year: 2015, context: "Dinosaurs are back in this thrilling adventure set in a fully operational Jurassic theme park, with new genetically engineered monsters.", productionCompany: "Universal Pictures" },
    { id: 6, title: "Furious 7", image: "https://image.tmdb.org/t/p/original/3m5KOXy0vW4mlyRVmj3e6mKf9L7.jpg", revenue: 1506249360, year: 2015, context: "High-octane action as Dom and his crew take on a vengeful adversary, filled with breathtaking stunts and a heartfelt farewell.", productionCompany: "Universal Pictures" },
    { id: 7, title: "Avengers: Age of Ultron", image: "https://m.media-amazon.com/images/M/MV5BODBhYTg1NGQtNGVmNS00ZTdiLThjYTYtZDFkNzRiNTZmNDZjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", revenue: 1405403694, year: 2015, context: "The Avengers face a new threat in Ultron, a rogue AI bent on human extinction, pushing the team to its limits.", productionCompany: "Walt Disney Studios" },
    { id: 8, title: "Harry Potter and the Deathly Hallows: Part 2", image: "https://i.ebayimg.com/images/g/9WgAAMXQTgZQ9yvj/s-l640.jpg", revenue: 1342000000, year: 2011, context: "The final battle between Harry and Voldemort unfolds in this thrilling conclusion, where destinies are fulfilled in a world-altering showdown.", productionCompany: "Warner Bros" },
    { id: 9, title: "Frozen", image: "https://m.media-amazon.com/images/I/71jwCBe30hL._AC_UF894,1000_QL80_.jpg", revenue: 1274219009, year: 2013, context: "Disney’s enchanting tale of sisterhood, magic, and adventure, as Anna and Elsa discover love’s true power amid a frozen kingdom.", productionCompany: "Walt Disney Pictures" },
    { id: 10, title: "Beauty and the Beast", image: "https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg", revenue: 1262886337, year: 2017, context: "A live-action adaptation of the beloved classic, where a young woman finds beauty within the Beast, breaking his curse with love.", productionCompany: "The Walt Disney Company" }
];


const Carousell = () => {
    const [popUpStatus, setPopUpStatus] = useState(false);
    const [selectedShow, setSelectedShow] = useState(null);

    function togglePopup(show = null) {
        setSelectedShow(show);
        setPopUpStatus(!popUpStatus);
    }

    return (
        <div className="bg-background h-screen flex items-center justify-center">
            <div>
                {/* Responsive title with padding adjustment for mobile screens */}
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 px-4 md:px-0">Top 10 TV Programmes in Singapore Today</h2>
                
                <div className="relative w-full max-w-[90%] md:max-w-[95%] lg:max-w-full overflow-visible group text-center">
                    <Carousel className="relative w-full">
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {shows.map((show) => (
                                <CarouselItem
                                    key={show.id}
                                    className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/5" // Adjust item width for different screen sizes
                                    onClick={() => togglePopup(show)}
                                >
                                    <div className="relative">
                                        {/* Responsive ID text size and position */}
                                        <div 
                                            className="absolute -top-2 left-3 text-[60px] sm:text-[160px] md:text-[140px] lg:text-[120px] font-bold text-background leading-none z-10"
                                            style={{
                                                textShadow: '2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff',
                                            }}
                                        >
                                            {show.id}
                                        </div>
                                        <Card className="border-0 bg-transparent">
                                            <CardContent className="relative aspect-[3/4] p-0">
                                                <img
                                                    src={show.image}
                                                    alt={show.title}
                                                    className="w-full h-full object-cover rounded transition-transform duration-300 hover: bg-slate-400 "
                                                />
                                                {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded"></div> */}

                                            </CardContent>
                                        </Card>
                                        <h3 className="mt-2 text-white text-sm sm:text-base md:text-lg font-medium">{show.title}</h3>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Left Chevron with responsive positioning and size */}
                        <CarouselPrevious className="hidden md:flex absolute -left-16 sm:-left-20 md:-left-40 lg:-left-48 top-1/2 -translate-y-1/2 h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-white z-30 border-2 border-white transition-all duration-300 bg-black/70 hover:bg-black/90 rounded-full shadow-lg opacity-0 group-hover:opacity-100 group-hover:-left-12">
                            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
                        </CarouselPrevious>

                        {/* Right Chevron with responsive positioning and size */}
                        <CarouselNext className="hidden md:flex absolute -right-16 sm:-right-20 md:-right-40 lg:-right-48 top-1/2 -translate-y-1/2 h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-white z-30 border-2 border-white transition-all duration-300 bg-black/70 hover:bg-black/90 rounded-full shadow-lg opacity-0 group-hover:opacity-100 group-hover:-right-12">
                            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
                        </CarouselNext>
                    </Carousel>
                    
                    {popUpStatus && selectedShow && (
                        <CarousellPopUp
                            contentTitle={selectedShow.title}
                            contentSecondary={selectedShow.productionCompany}
                            contentMain={`Details for ${selectedShow.title}`}
                            image={selectedShow.image}
                            year={selectedShow.year}
                            revenue={selectedShow.revenue}
                            context={selectedShow.context}
                            isOpen={togglePopup}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Carousell;
