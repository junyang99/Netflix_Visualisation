import ShadcnBarChart from "@/components/Graph/ShadcnBarChart";
import Container from "@/components/Container";
import LineGraph from "@/components/Graph/LineGraph";
import PieChartGraph from "@/components/Graph/PieChartGraph";

const lineData = [
    { Age: 26, line1_data: 15},
    { Age: 27, line1_data: 12.65},
    { Age: 28, line1_data: 12.5},
    { Age: 29, line1_data: 12.66},
    { Age: 30, line1_data: 12.7},
    { Age: 31, line1_data: 12.28},
    { Age: 32, line1_data: 12.56},
    { Age: 33, line1_data: 12.48},
    { Age: 34, line1_data: 12.39},
    { Age: 35, line1_data: 12.61},
    { Age: 36, line1_data: 12.37},
    { Age: 37, line1_data: 12.39},
    { Age: 38, line1_data: 12.52},
    { Age: 39, line1_data: 12.58},
    { Age: 40, line1_data: 12.33},
    { Age: 41, line1_data: 12.69},
    { Age: 42, line1_data: 12.36},
    { Age: 43, line1_data: 12.65},
    { Age: 44, line1_data: 12.63},
    { Age: 45, line1_data: 12.66},
    { Age: 46, line1_data: 12.41},
    { Age: 47, line1_data: 12.66},
    { Age: 48, line1_data: 12.20},
    { Age: 49, line1_data: 12.51},
    { Age: 50, line1_data: 12.51},
    { Age: 51, line1_data: 12.22},
];

const pieChartData = [
    { type: "Male", percentage: 49.7, fill: "var(--color-Movie)" },
    { type: "Female", percentage: 50.3, fill: "var(--color-TV)" },

    // Max only 5 piecharts
];

const categoryData = [
    { name: "Smartphone", value: 621 },
    { name: "Tablet", value: 633 },
    { name: "Smart TV", value: 610 },
    { name: "Laptop", value: 636 }
];

const contentDistributionData = 
[{'country': 'United States', 'value': 2809},
    {'country': 'India', 'value': 972},
    {'country': 'United Kingdom', 'value': 418},
    {'country': 'Japan', 'value': 243},
    {'country': 'South Korea', 'value': 199},
    {'country': 'Canada', 'value': 181},
    {'country': 'Spain', 'value': 145},
    {'country': 'France', 'value': 124},
    {'country': 'Mexico', 'value': 110}]

const userCountryData = 
    [{'user_country': 'United States', 'value': 451},
    {'user_country': 'Spain', 'value': 451},
    {'user_country': 'Canada', 'value': 317},
    {'user_country': 'United Kingdom', 'value': 183},
    {'user_country': 'Australia', 'value': 183},
    {'user_country': 'Germany', 'value': 183},
    {'user_country': 'France', 'value': 183},
    {'user_country': 'Brazil', 'value': 183},
    {'user_country': 'Mexico', 'value': 183},
    {'user_country': 'Italy', 'value': 183}]

const SubscriptionRatingData = 
    [{'Subscription': 'Basic', 'value': 999},
    {'Subscription': 'Standard', 'value': 768},
    {'Subscription': 'Premium', 'value': 733},
    ]
    


const User = () => {
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
                        data={userCountryData}
                        xKey="Country"
                        yKey="value"
                        title="User by Country"
                        dataLabel="Director"
                        description="User distribution of content by country"
                    />
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-3">
                    <ShadcnBarChart
                        data={SubscriptionRatingData}
                        xKey="Subscription Type"
                        yKey="value"
                        title="Subscription Type"
                        dataLabel="Rating"
                        description="Subscription type by Gender"
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

export default User;
