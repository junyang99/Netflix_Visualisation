import { LineChart, CartesianGrid, XAxis, Line } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';

interface LineGraphProps {
    data: Array<{ [key: string]: string | number }>
    line1_name: string;
    line2_name: string;
    line1_dkey: string;
    line2_dkey: string;
    x_dkey: string;

}


const LineGraph = ({ data, line1_name, line2_name, line1_dkey, line2_dkey, x_dkey}: LineGraphProps) => {

    const chartConfig = {
        line1_data: {
            label: `${line1_name}`,
            color: "hsl(var(--chart-1))",
        },
        line2_data: {
            label: `${line2_name}`,
            color: "hsl(var(--chart-2))",
        },
    } satisfies ChartConfig

    const renderChart = () => {
        return (
            <ChartContainer config={chartConfig}>
                <LineChart
                    accessibilityLayer
                    data={data}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey={x_dkey}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <Line
                        dataKey={line1_dkey}
                        type="monotone"
                        stroke="var(--color-line1_data)"
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        dataKey={line2_dkey}
                        type="monotone"
                        stroke="var(--color-line2_data)"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ChartContainer>
        );
    }

    return (
        <>

            <Card>
                <CardHeader>
                    <CardTitle>Line Chart - Multiple</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                   {renderChart()}
                </CardContent>
                <CardFooter>
                    <div className="flex w-full items-start gap-2 text-sm">
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2 font-medium leading-none">
                                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                            </div>
                            <div className="flex items-center gap-2 leading-none text-muted-foreground">
                                Showing total visitors for the last 6 months
                            </div>
                        </div>
                    </div>
                </CardFooter>
            </Card>

        </>
    )
}

export default LineGraph