import ShadcnBarChart from "@/components/Graph/ShadcnBarChart";
import Container from "@/components/Container";
import LineGraph from "@/components/Graph/LineGraph";

const lineData = [
    { "month": "January", "line1_data": 186, "line2_data": 80 },
    { "month": "February", "line1_data": 305, "line2_data": 200 },
    { "month": "March", "line1_data": 237, "line2_data": 120 },
    { "month": "April", "line1_data": 73, "line2_data": 190 },
    { "month": "May", "line1_data": 209, "line2_data": 130 },
    { "month": "June", "line1_data": 214, "line2_data": 140 }
  ];
  

const categoryData = [
    { name: 'Action', value: 400 },
    { name: 'Comedy', value: 300 },
    { name: 'Drama', value: 200 },
    { name: 'Sci-Fi', value: 100 },
    { name: 'Comedy', value: 300 },
    { name: 'Drama', value: 200 },
    { name: 'Sci-Fi', value: 100 },
    { name: 'Comedy', value: 300 },
    { name: 'Drama', value: 200 },
    { name: 'Sci-Fi', value: 100 },
    { name: 'Comedy', value: 300 },
    { name: 'Drama', value: 200 },
    { name: 'Sci-Fi', value: 100 },
];

const Netflix = () => {
    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2 lg:col-span-4">
                    <ShadcnBarChart
                        data={categoryData}
                        xKey="name"
                        yKey="value"
                        height={200}
                        width={"100%"}
                        title="Detailed Category Distribution"
                        dataLabel="Category"
                        description="This chart shows the distribution of content across different categories on Netflix. Understanding this distribution helps in content strategy and acquisition decisions."
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
                        description="This chart shows the distribution of content across different categories on Netflix. Understanding this distribution helps in content strategy and acquisition decisions."
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
                        description="This chart shows the distribution of content across different categories on Netflix. Understanding this distribution helps in content strategy and acquisition decisions."
                    />
                </div>

                <div className="col-span-1 md:col-span-2 lg:col-span-4">
                    <LineGraph data={lineData} line1_name="line1" line2_name="line2" line1_dkey="line1_data" line2_dkey="line2_data" x_dkey="month" />
                </div>
                
            </div>
        </Container>
    );
};

export default Netflix;
