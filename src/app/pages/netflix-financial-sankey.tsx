import  { useEffect, useRef } from "react";
import * as d3 from "d3";
import { sankey, sankeyLinkHorizontal } from "d3-sankey";
import { motion } from "framer-motion";
interface SankeyNode extends d3.SimulationNodeDatum {
  name: string;
  value?: number;
  growth?: string;
  category: "revenue" | "profit" | "cost";
  x0?: number;
  x1?: number;
  y0?: number;
  y1?: number;
}

interface SankeyLink {
  source: number | SankeyNode;
  target: number | SankeyNode;
  value: number;
  category: "revenue" | "profit" | "cost";
  width?: number;
}

export default function NetflixFinancialSankey() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    const margin = { top: 100, right: 180, bottom: 50, left: 100 };
    const width = 1200 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${
          height + margin.top + margin.bottom
        }`
      )
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Define the data
    const data = {
      nodes: [
        {
          name: "U.S & Canada",
          value: 4.3,
          growth: "16% Y/Y",
          category: "revenue",
        },
        {
          name: "Europe, M.East, Africa",
          value: 3.1,
          growth: "17% Y/Y",
          category: "revenue",
        },
        {
          name: "Latin America",
          value: 1.2,
          growth: "9% Y/Y",
          category: "revenue",
        },
        {
          name: "Asia-Pacific",
          value: 1.1,
          growth: "14% Y/Y",
          category: "revenue",
        },
        { name: "Revenue", value: 9.6, growth: "6% Y/Y", category: "revenue" },
        {
          name: "Gross profit",
          value: 4.7,
          growth: "25% Y/Y",
          category: "profit",
        },
        {
          name: "Cost of revenue",
          value: 5.1,
          growth: "11% Y/Y",
          category: "cost",
        },
        {
          name: "Operating profit",
          value: 2.9,
          growth: "7% Y/Y",
          category: "profit",
        },
        {
          name: "Operating cost",
          value: 1.8,
          growth: "6% Y/Y",
          category: "cost",
        },
        {
          name: "Net profit",
          value: 2.4,
          growth: "4% Y/Y",
          category: "profit",
        },
        { name: "Tax", value: 0.3, growth: "91% Y/Y", category: "cost" },
        { name: "Other", value: 0.2, growth: "-40% Y/Y", category: "cost" },
        { name: "Marketing", value: 0.6, growth: "3% Y/Y", category: "cost" },
        { name: "Tech & Dev", value: 0.7, growth: "8% Y/Y", category: "cost" },
        { name: "G&A", value: 0.4, growth: "6% Y/Y", category: "cost" },
      ],
      links: [
        { source: 0, target: 4, value: 4.3, category: "revenue" },
        { source: 1, target: 4, value: 3.0, category: "revenue" },
        { source: 2, target: 4, value: 1.2, category: "revenue" },
        { source: 3, target: 4, value: 1.1, category: "revenue" },
        { source: 4, target: 5, value: 4.4, category: "profit" },
        { source: 4, target: 6, value: 5.2, category: "cost" },
        { source: 5, target: 7, value: 2.6, category: "profit" },
        { source: 5, target: 8, value: 1.8, category: "cost" },
        { source: 7, target: 9, value: 2.1, category: "profit" },
        { source: 7, target: 10, value: 0.4, category: "cost" },
        { source: 7, target: 11, value: 0.089, category: "cost" },
        { source: 8, target: 12, value: 0.6, category: "cost" },
        { source: 8, target: 13, value: 0.7, category: "cost" },
        { source: 8, target: 14, value: 0.4, category: "cost" },
      ],
    };

    const sankeyGenerator = sankey<SankeyNode, SankeyLink>()
      .nodeWidth(20)
      .nodePadding(20)
      .extent([
        [0, 0],
        [width, height],
      ]);

    const { nodes, links } = sankeyGenerator(data);

    // Updated color scales
    const colorScale = {
      revenue: "#9CA3AF", // Grey for revenue
      profit: "#4CAF50", // Green for profits
      cost: "#FF5252", // Red for costs
    };

    // Add links
    svg
      .append("g")
      .selectAll("path")
      .data(links)
      .join("path")
      .attr("d", sankeyLinkHorizontal())
      .attr("fill", "none")
      .attr("stroke", (d: SankeyLink) => colorScale[d.category])
      .attr("stroke-width", (d: SankeyLink) => Math.max(1, d.width!))
      .attr("stroke-opacity", 0.3)
      .on("mouseover", function () {
        d3.select(this).attr("stroke-opacity", 0.5);
      })
      .on("mouseout", function () {
        d3.select(this).attr("stroke-opacity", 0.3);
      });

    svg
      .append("g")
      .selectAll("rect")
      .data(nodes)
      .join("rect")
      .attr("x", (d: SankeyNode) => d.x0!)
      .attr("y", (d: SankeyNode) => d.y0!)
      .attr("height", (d: SankeyNode) => d.y1! - d.y0!)
      .attr("width", (d: SankeyNode) => d.x1! - d.x0!)
      .attr("fill", (d: SankeyNode) => colorScale[d.category])
      .attr("opacity", 0.8);

    // Add labels
    const label = svg
      .append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .attr("x", (d: SankeyNode) => (d.x0! < width / 2 ? d.x1! + 6 : d.x0! - 6))
      .attr("y", (d: SankeyNode) => (d.y1! + d.y0!) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", (d: SankeyNode) => (d.x0! < width / 2 ? "start" : "end"))
      .attr("font-size", "12px")
      .attr("fill", "white");

    // Add main label
    label.append("tspan").text((d: SankeyNode) => `${d.name} ($${d.value}B)`);

    // Add growth rate
    label
      .append("tspan")
      .attr("x", (d: SankeyNode) => (d.x0! < width / 2 ? d.x1! + 6 : d.x0! - 6))
      .attr("dy", "1.2em")
      .attr("fill", "#999")
      .text((d: SankeyNode) => d.growth || "");

    // Add title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .attr("class", "text-xl font-semibold")
      .attr("fill", "#4CAF50")
      .text("Q3 FY24 Income Statement");

    // Add subtitle
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", -30)
      .attr("text-anchor", "middle")
      .attr("class", "text-sm")
      .attr("fill", "white")
      .text("Quarter ended Jul 30 2024");

    // Add source
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", -10)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .attr("class", "text-sm font-bold")
      .text("Source: Netflix investor relations");
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-background p-4 lg:p-8 rounded-lg shadow-lg flex flex-col items-center"
    >
      {/* Chart Section */}
      <div className="w-full lg:w-3/4 mb-8">
        <motion.svg
          ref={svgRef}
          className="w-full h-auto"
          style={{
            minHeight: "60vh", // Increased minimum height for better visibility on mobile
          }}
          aria-label="Netflix Q3 FY24 Income Statement Sankey Diagram"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Text Description Section with Enhanced Styling */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 60 }}
        className=" text-center text-white p-6 border border-primary rounded-lg shadow-lg bg-gradient-to-b "
      >
        <motion.h2
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-3xl font-extrabold mb-4 text-primary"
        >
          Netflix Financial Flow Analysis 💸
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg leading-relaxed mb-4"
        >
          This <span className="text-primary font-semibold">Sankey diagram</span> provides a
          <span className="font-semibold"> dynamic</span> view of Netflix's Q3 FY24 income,
          illustrating how <span className="text-primary font-semibold">regional revenue</span> translates into
          <span className="font-semibold"> costs</span> and <span className="font-semibold">profits</span>.
          Each path traces the financial flow, spotlighting Netflix's financial structure and pinpointing
          key resource allocations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg leading-relaxed"
        >
          By connecting <span className="text-primary font-semibold">financial insights</span> to
          <span className="font-semibold"> content trends</span> and user demographics, this diagram
          uncovers how Netflix can optimize <span className="text-primary font-semibold">content investments </span>
          across regions. It supports our project’s aim to align Netflix's content with global audience
          preferences for greater engagement and profitability.
        </motion.p>
      </motion.div>
    </motion.div>
  );
  
  
}
