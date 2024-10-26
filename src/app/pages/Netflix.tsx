import ShadcnBarChart from "@/components/Graph/ShadcnBarChart";
import Container from "@/components/Container";
import LineGraph from "@/components/Graph/LineGraph";
import PieChartGraph from "@/components/Graph/PieChartGraph";

const lineData = [
    { year: 2008, line1_data: 2 },
    { year: 2009, line1_data: 2 },
    { year: 2010, line1_data: 1 },
    { year: 2011, line1_data: 13 },
    { year: 2012, line1_data: 3 },
    { year: 2013, line1_data: 11 },
    { year: 2014, line1_data: 24 },
    { year: 2015, line1_data: 82 },
    { year: 2016, line1_data: 426 },
    { year: 2017, line1_data: 1185 },
    { year: 2018, line1_data: 1648 },
    { year: 2019, line1_data: 2016 },
    { year: 2020, line1_data: 1879 },
    { year: 2021, line1_data: 1498 },
];

const pieChartData = [
    { type: "Movie", percentage: 69.7, fill: "var(--color-Movie)" },
    { type: "TV", percentage: 30.3, fill: "var(--color-TV)" },

    // Max only 5 piecharts
];


const contentDistributionData = 
[{'country': 'United States', 'value': 2809},
    {'country': 'India', 'value': 972},
    // {'country': 'Unknown ', 'value': 829},
    {'country': 'United Kingdom', 'value': 418},
    {'country': 'Japan', 'value': 243},
    {'country': 'South Korea', 'value': 199},
    {'country': 'Canada', 'value': 181},
    {'country': 'Spain', 'value': 145},
    {'country': 'France', 'value': 124},
    {'country': 'Mexico', 'value': 110}]

const directorFrequencyData = 
    [{'director': 'Rajiv Chilaka', 'value': 19},
    {'director': 'Raúl Campos, Jan Suter', 'value': 18},
    {'director': 'Suhas Kadav', 'value': 16},
    {'director': 'Marcus Raboy', 'value': 16},
    {'director': 'Jay Karas', 'value': 14},
    {'director': 'Cathy Garcia-Molina', 'value': 13},
    {'director': 'Martin Scorsese', 'value': 12},
    {'director': 'Jay Chapman', 'value': 12},
    {'director': 'Youssef Chahine', 'value': 12},
    {'director': 'Steven Spielberg', 'value': 11}]

const tvRatingData = 
    [{'rating': 'TV-MA', 'value': 3205},
    {'rating': 'TV-14', 'value': 2157},
    {'rating': 'TV-PG', 'value': 861},
    {'rating': 'R', 'value': 799},
    {'rating': 'PG-13', 'value': 490},
    {'rating': 'TV-Y7', 'value': 333},
    {'rating': 'TV-Y', 'value': 306},
    {'rating': 'PG', 'value': 287},
    {'rating': 'TV-G', 'value': 220},
    {'rating': 'NR', 'value': 79}
    ]

const genreData = [{'genre': 'International Movies', 'value': 2752},
    {'genre': 'Dramas', 'value': 2426},
    {'genre': 'Comedies', 'value': 1674},
    {'genre': 'International TV Shows', 'value': 1349},
    {'genre': 'Documentaries', 'value': 869},
    {'genre': 'Action & Adventure', 'value': 859},
    {'genre': 'TV Dramas', 'value': 762},
    {'genre': 'Independent Movies', 'value': 756},
    {'genre': 'Children & Family Movies', 'value': 641},
    {'genre': 'Romantic Movies', 'value': 616}]
    


const Netflix = () => {
    return (
        <Container>
            {/* Main grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                
                {/* LineGraph and PieChart side by side on larger screens */}
                <div className=" col-span-1 md:col-span-1 lg:col-span-4">
                    <LineGraph
                        data={lineData} // Line chart data
                        line1_name="Content Growth"
                        line1_dkey="line1_data"
                        x_dkey="year"
                        lineChartTitle="Platform Content Growth Over Time"
                        lineChartDesc="Analysis of content growth between 2008 and 2021"
                        generalTrendMessage="Significant growth, peaking in 2018"
                        detailsMessage="The chart shows the rapid increase in content published on the platform, especially in the past decade."
                    />
                </div>

                <div className="col-span-1 md:col-span-1 lg:col-span-2">
                    <PieChartGraph
                        data={pieChartData} // Pie chart data
                        dataKey="percentage" // Data key for values
                        nameKey="type" // Key for labels
                        pieChartTitle="Movies vs TV Shows" // Pie chart title
                        pieChartDescription="Breakdown of content types" // Pie chart description
                        generalTrendMessage="Movies are 30.3% more than TV shows "
                        detailsMessage="Stronger emphasis placed on movies as compared to TV shows"
                    />
                </div>

                {/* Bar charts below the LineGraph and PieChart */}
                <div className="col-span-1 md:col-span-1 lg:col-span-3">
                    <ShadcnBarChart
                        data={contentDistributionData}
                        xKey="country"
                        yKey="value"
                        title="Top 9 Countries by Content Count"
                        dataLabel="Country"
                        description="Content distribution by country on Netflix"
                    />
                </div>

                <div className="col-span-1 md:col-span-1 lg:col-span-3">
                    <ShadcnBarChart
                        data={directorFrequencyData}
                        xKey="director"
                        yKey="value"
                        title="Top 9 Directors by Frequency"
                        dataLabel="Director"
                        description="Director distribution of content on Netflix"
                    />
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-3">
                    <ShadcnBarChart
                        data={tvRatingData}
                        xKey="rating"
                        yKey="value"
                        title="Top 10 Ratings by Frequency"
                        dataLabel="Rating"
                        description="Rating distribution of content on Netflix"
                    />
                </div>

                <div className="col-span-1 md:col-span-1 lg:col-span-3">
                    <ShadcnBarChart
                        data={genreData}
                        xKey="genre"
                        yKey="value"
                        title="Top 10 Genres by Frequency"
                        dataLabel="Genre"
                        description="Genre distribution of content on Netflix"
                    />
                </div>



            </div>
        </Container>
    );
};

export default Netflix;
