import { useEffect, useState } from 'react'
import { Bar, BarChart as RechartsBarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart } from 'recharts'
import Popup from '../Popup'
import { Card, CardContent } from '../ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'

interface BarChartProps {
  data: Array<{ [key: string]: string | number }>
  xKey: string
  yKey: string
  width?: number | string
  height?: number | string
  title: string
  description: string
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const ShadcnBarChart =  ({ data, xKey, yKey, width, height , title, description }: BarChartProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const handleClick = () => {setIsPopupOpen(true)
    console.log("clicked")
  }
  const handleClose = () =>  {setIsPopupOpen(false)
    console.log("false")
  }

  const [textSize, setTextSize] = useState(12); // Default text size

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTextSize(10); // Smaller screen
      } else if (window.innerWidth < 1024) {
        setTextSize(12); // Medium screen
      } else {
        setTextSize(14); // Larger screen
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set the initial text size

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const renderChart = () => (
<ChartContainer config={chartConfig}>
  <BarChart accessibilityLayer data={data}>
    <CartesianGrid vertical={false} />
    
    {/* XAxis Configuration */}
    <XAxis
      dataKey={xKey}  // Assuming xKey holds something like 'month'
      tickLine={false}
      tickMargin={10}
      axisLine={true}
      tickFormatter={(value) => value.slice(0, 3)}  // Example of formatting X-axis labels
    />

    {/* YAxis Configuration */}
    <YAxis
      allowDecimals={false}  // As per your previous configuration
      axisLine={true}       // Remove the axis line for a cleaner look
      tickLine={false}       // Hide tick lines for Y-axis
      tickMargin={10}        // Add margin for ticks to avoid crowding
    />

    {/* Tooltip */}
    <ChartTooltip
      cursor={false}
      content={<ChartTooltipContent hideLabel />}
    />

    {/* Bar chart */}
    <Bar dataKey={yKey} fill="var(--color-primary)" radius={8} />
  </BarChart>
</ChartContainer>

  )

  return (
    <>
      <div >
      {renderChart()}

      </div>
     

      <Popup onClose={handleClose} isOpen={isPopupOpen}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="mb-4">{description}</p>
            {renderChart()}
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Data Breakdown:</h3>
              <ul className="list-disc pl-5">
                {data.map((item, index) => (
                  <li key={index}>
                    {item[xKey]}: {item[yKey]} ({((item[yKey] as number) / data.reduce((sum, curr) => sum + (curr[yKey] as number), 0) * 100).toFixed(2)}%)
                  </li>
                ))}
              </ul>
              </div>
        </Popup>
    
    </>
  )
}

export default ShadcnBarChart