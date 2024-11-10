import { PieChart, Pie} from 'recharts'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '../ui/chart'

interface PieChartProps {
    data: Array<{ [key: string]: string | number }>
    dataKey: string;
    nameKey: string;
    pieChartTitle: string
    pieChartDescription: string
    generalTrendMessage: string
    detailsMessage: string
}

const PieChartGraph = ({ data, dataKey,nameKey,pieChartTitle,pieChartDescription, generalTrendMessage, detailsMessage }: PieChartProps) => {
    const colors = [
        "hsl(var(--chart-1))",
        "hsl(var(--chart-2))",
        "hsl(var(--chart-3))",
        "hsl(var(--chart-4))",
        "hsl(var(--chart-5))",
    ];

    // const configKeys = [
    //     "pie1",
    //     "pie2",
    //     "pie3",
    //     "pie4",
    //     "pie5"
    // ]

    
    const chartConfig = data.reduce((config, item, index) => {
        const key = item[nameKey];
        if (typeof key !== "string") {
          console.error(`Invalid key for item at index ${index}`, key);
          return config; // Skip invalid entries
        }
    
        const color = colors[index % colors.length]; // Ensure we always have a color
        
        config[data[index][nameKey]] = {
          label: key,
          color: color,
        };
    
        return config;
      }, {} as ChartConfig);

    console.log(chartConfig)
    
    return (
        <Card className="flex flex-col w-full  h-full lg:h-[500px]">
            <CardHeader className="items-start ">
                <CardTitle>{pieChartTitle}</CardTitle>
                <CardDescription>{pieChartDescription}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 ">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full h-full"
                >
                    <PieChart>
                        <ChartTooltip
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={data.slice(0, 5)} // Limit data to a max of 5 categories
                            dataKey={dataKey}
                            labelLine={false}
                            // fill={({ index }) => colors[index % colors.length]} // Dynamically assign color based on index

                            label={({ payload, ...props }) => {
                                return (
                                    <text
                                    x={props.x } // Offset to move label slightly right
                                    y={props.y }  // Offset to move label slightly up
                                   
                               textAnchor="middle" // Keeps the text centered
                            dominantBaseline="middle"
                                    fill="hsla(var(--foreground))"
                                  >
                                    {payload[dataKey]} %
                                
                                  </text>
                                )
                            }}
                            nameKey={nameKey}
                        />
                         <ChartLegend
                            content={
                                <ChartLegendContent />
                            }
                            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm items-start">
                <div className="flex items-center  gap-2 font-medium leading-none">
                    {generalTrendMessage}
                </div>
                <div className="leading-none text-muted-foreground">
                    {detailsMessage}
                </div>
            </CardFooter>
        </Card>
    )
}

export default PieChartGraph