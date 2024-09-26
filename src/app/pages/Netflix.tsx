import ShadcnBarChart from "@/components/Graph/ShadcnBarChart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Container from "@/components/Container"
const categoryData = [
    { name: 'Action', value: 400 },
    { name: 'Comedy', value: 300 },
    { name: 'Drama', value: 200 },
    { name: 'Sci-Fi', value: 100 },
]

const Netflix = () => {
    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md pt-4 w-full md:col-span-2">
                    <ShadcnBarChart
                        data={categoryData}
                        xKey="name"
                        yKey="value"
                        height={200}
                        width={"100%"}
                        title="Detailed Category Distribution"
                        description="This chart shows the distribution of content across different categories on Netflix. Understanding this distribution helps in content strategy and acquisition decisions."
                    />
                </div>

                <div className="bg-white rounded-lg shadow-md pt-4">
                    <ShadcnBarChart
                        data={categoryData}
                        xKey="name"
                        yKey="value"
                        height={200}
                        width={"100%"}
                        title="Detailed Category Distribution"
                        description="This chart shows the distribution of content across different categories on Netflix. Understanding this distribution helps in content strategy and acquisition decisions."
                    />
                </div>

                <div className="bg-white rounded-lg shadow-md pt-4">
                    <ShadcnBarChart
                        data={categoryData}
                        xKey="name"
                        yKey="value"
                        height={200}
                        width={"100%"}
                        title="Detailed Category Distribution"
                        description="This chart shows the distribution of content across different categories on Netflix. Understanding this distribution helps in content strategy and acquisition decisions."
                    />
                </div>







            </div>
        </Container>
    )
}

export default Netflix