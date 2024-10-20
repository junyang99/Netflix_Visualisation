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

const categoryData = [
    { name: "Action", value: 400 },
    { name: "Comedy", value: 300 },
    { name: "Drama", value: 200 },
    { name: "Sci-Fi", value: 100 }
];

const Netflix = () => {
    return (
        <Container>
            {/* Main grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* LineGraph and PieChart side by side on larger screens */}
                <div className="col-span-1 lg:col-span-2">
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

                <div className="col-span-1 lg:col-span-2">
                    <PieChartGraph
                        data={pieChartData} // Pie chart data
                        dataKey="percentage" // Data key for values
                        nameKey="type" // Key for labels
                        pieChartTitle="Movies vs TV Shows" // Pie chart title
                        pieChartDescription="Breakdown of content types" // Pie chart description
                    />
                </div>

                {/* Bar charts below the LineGraph and PieChart */}
                <div className="col-span-1 md:col-span-2 lg:col-span-4">
                    <ShadcnBarChart
                        data={categoryData}
                        xKey="name"
                        yKey="value"
                        height={200}
                        width={"100%"}
                        title="Detailed Category Distribution"
                        dataLabel="Category"
                        description="This chart shows the distribution of content across different categories on Netflix."
                    />
                </div>

                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <ShadcnBarChart
                        data={categoryData}
                        xKey="name"
                        yKey="value"
                        height={200}
                        width={"100%"}
                        title="Detailed Category Distribution"
                        dataLabel="Category"
                        description="This chart shows the distribution of content across different categories on Netflix."
                    />
                </div>

                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <ShadcnBarChart
                        data={categoryData}
                        xKey="name"
                        yKey="value"
                        height={200}
                        width={"100%"}
                        title="Detailed Category Distribution"
                        dataLabel="Category"
                        description="This chart shows the distribution of content across different categories on Netflix."
                    />
                </div>
            </div>
        </Container>
    );
};

export default Netflix;
