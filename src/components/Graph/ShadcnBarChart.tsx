import { useEffect, useState, useCallback } from 'react'
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart } from 'recharts'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltipContent } from '@/components/ui/chart'

interface BarChartProps {
  data: Array<{ [key: string]: string | number }>
  xKey: string
  yKey: string
  dataLabel: string
  title: string
  description: string
  generalTrendMessage: string
  detailsMessage: string
}

export default function ShadcnBarChart({ 
  data, 
  xKey, 
  yKey, 
  title, 
  description, 
  dataLabel, 
  generalTrendMessage,
  detailsMessage 
}: BarChartProps) {
  const chartConfig = {
    value: {
      label: `${dataLabel}`,
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

  const [textSize, setTextSize] = useState(12)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTextSize(13)
      } else if (window.innerWidth < 1024) {
        setTextSize(10)
      } else {
        setTextSize(8)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const renderCustomAxisTick = useCallback(({ x, y, payload }) => {
    const maxLength = 10 // Maximum number of characters to display
    let label = payload.value
    if (label.length > maxLength) {
      label = `${label.substring(0, maxLength)}...`
    }

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="hsl(var(--foreground))"
          fontSize={textSize}
          transform="rotate(-25)"
        >
          {label}
        </text>
      </g>
    )
  }, [textSize])

  const renderChart = () => (
    <ChartContainer config={chartConfig} className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={30} margin={{ top: 20, right: 20, left: 20, bottom: 40 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey={xKey}
            tickLine={false}
            axisLine={true}
            tick={renderCustomAxisTick}
            height={60}
            interval={0}
          />
          <YAxis
            allowDecimals={false}
            axisLine={true}
            tickLine={false}
            tickMargin={10}
            tick={{ fontSize: textSize, fill: 'hsl(var(--foreground))' }}
            width={40}
          />
          <Tooltip content={<ChartTooltipContent indicator="line" />} cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }} />
          <Bar dataKey={yKey} fill="var(--color-value)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )

  return (
    <Card className="w-full h-full flex flex-col overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow px-4 py-2">
        <div className="h-full">
          {renderChart()}
        </div>
      </CardContent>
      <CardFooter className="px-4">
        <div className="w-full text-sm space-y-1">
          <p className='font-bold'>{generalTrendMessage}</p>
          <p className="text-muted-foreground">{detailsMessage}</p>
        </div>
      </CardFooter>
    </Card>
  )
  
  
}