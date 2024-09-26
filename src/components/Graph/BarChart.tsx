import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Set up dimensions
    const margin = { top: 30, right: 30, bottom: 70, left: 60 };
    const width = 460 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Load data
    d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv").then(data => {
      // Parse data
      const parsedData = data.map(d => ({
        Country: d.Country as string,
        Value: +d.Value!,
      }));

      // Scales
      const x = d3.scaleBand()
        .domain(parsedData.map(d => d.Country))
        .range([0, width])
        .padding(0.2);

      const y = d3.scaleLinear()
        .domain([0, 13000])
        .range([height, 0]);

      const svg = d3.select(svgRef.current);      // X Axis
      svg.select<SVGGElement>(".x-axis")
      .style("transform", `translateY(${height}px)`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");

      // Y Axis
      svg.select<SVGGElement>(".y-axis")
      .call(d3.axisLeft(y));

      // Bars
      svg.selectAll(".bar")
        .data(parsedData)
        .join("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.Country)!)
        .attr("y", d => y(d.Value))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.Value))
        .attr("fill", "#69b3a2");


      console.log(svg);
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      width={460}
      height={400}
    >
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default BarChart;
