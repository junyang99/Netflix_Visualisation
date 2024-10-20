import { LineChart, CartesianGrid, XAxis, YAxis, Line } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';

interface LineGraphProps {
    data: Array<{ [key: string]: string | number }>
    line1_name: string;
    line2_name: string | null;
    line1_dkey: string;
    line2_dkey: string | null;
    x_dkey: string | number;
    lineChartTitle: string;
    lineChartDesc: string;
    generalTrendMessage: string;
    detailsMessage: string;

}


// Able to convert between 2 types 
const LineGraph = ({ data, line1_name, line2_name = null, line1_dkey, line2_dkey = null, x_dkey, lineChartDesc, lineChartTitle, generalTrendMessage, detailsMessage }: LineGraphProps) => {

    const chartConfig = {
        line1_data: {
            label: `${line1_name}`,
            color: "hsl(var(--chart-1))",
        },
        ...(line2_dkey != null && {
            line2_data: {
                label: `${line2_name}`,
                color: "hsl(var(--chart-2))",
            },
        })

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
                    {
                        <XAxis
                            dataKey={x_dkey}
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => {
                                if (typeof value === "string") {
                                    return value.slice(0, 3); // If it's a string, slice the first 3 characters
                                } else if (typeof value === "number") {
                                    return value.toString(); // If it's a number, convert to string
                                } else {
                                    return value; // If it's another type, return as-is
                                }
                            }}
                        />
                    }



                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => `${value}`}  // Optional: format ticks
                    />

                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} 
                    wrapperStyle={{
                        width: "150px",
                        borderRadius: "5px",
                        padding: "10px",
                    }}/>

                    { }
                    <Line
                        dataKey={line1_dkey}
                        type="linear"
                        stroke="var(--color-line1_data)"
                        strokeWidth={2}
                        dot={false}
                    />
                    {line2_dkey != null && (
                        <Line
                            dataKey={line2_dkey}
                            type="monotone"
                            stroke="var(--color-line2_data)"
                            strokeWidth={2}
                            dot={false}
                        />)
                    }

                </LineChart>
            </ChartContainer>
        );
    }

    return (
        <>

            <Card>
                <CardHeader>
                    <CardTitle>{lineChartTitle}</CardTitle>
                    <CardDescription>{lineChartDesc}</CardDescription>
                </CardHeader>
                <CardContent>
                    {renderChart()}
                </CardContent>
                <CardFooter>
                    <div className="flex w-full items-start gap-2 text-sm">
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2 font-medium leading-none">
                                {generalTrendMessage}
                            </div>
                            <div className="flex items-center gap-2 leading-none text-muted-foreground">
                                {detailsMessage}
                            </div>
                        </div>
                    </div>
                </CardFooter>
            </Card>

        </>
    )
}

export default LineGraph