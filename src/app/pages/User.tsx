import ShadcnBarChart from "@/components/Graph/ShadcnBarChart";
import Container from "@/components/Container";
import LineGraph from "@/components/Graph/LineGraph";
import PieChartGraph from "@/components/Graph/PieChartGraph";
import { useState } from "react";

const lineData = [
    { Age: 26, line1_data: 15},
    { Age: 27, line1_data: 12.65},
    { Age: 28, line1_data: 12.5},
    { Age: 29, line1_data: 12.66},
    { Age: 30, line1_data: 12.7},
    { Age: 31, line1_data: 12.28},
    { Age: 32, line1_data: 12.56},
    { Age: 33, line1_data: 12.48},
    { Age: 34, line1_data: 12.39},
    { Age: 35, line1_data: 12.61},
    { Age: 36, line1_data: 12.37},
    { Age: 37, line1_data: 12.39},
    { Age: 38, line1_data: 12.52},
    { Age: 39, line1_data: 12.58},
    { Age: 40, line1_data: 12.33},
    { Age: 41, line1_data: 12.69},
    { Age: 42, line1_data: 12.36},
    { Age: 43, line1_data: 12.65},
    { Age: 44, line1_data: 12.63},
    { Age: 45, line1_data: 12.66},
    { Age: 46, line1_data: 12.41},
    { Age: 47, line1_data: 12.66},
    { Age: 48, line1_data: 12.20},
    { Age: 49, line1_data: 12.51},
    { Age: 50, line1_data: 12.51},
    { Age: 51, line1_data: 12.22},
];

const pieChartData = [
    { type: "Male", percentage: 49.7, fill: "var(--color-Male)" },
    { type: "Female", percentage: 50.3, fill: "var(--color-Female)" },
];

const categoryData = [
    { name: "Smartphone", value: 621 },
    { name: "Tablet", value: 633 },
    { name: "Smart TV", value: 610 },
    { name: "Laptop", value: 636 }
];

const contentDistributionData = 
[{'country': 'United States', 'value': 5664},
    {'country': 'Spain', 'value': 5662},
    {'country': 'Canada', 'value': 3950},
    {'country': 'United Kingdom', 'value': 2318},
    {'country': 'France', 'value': 2307}]

const userCountryData = 
    [{'user_country': 'United States', 'value': 451},
    {'user_country': 'Spain', 'value': 451},
    {'user_country': 'Canada', 'value': 317},
    {'user_country': 'United Kingdom', 'value': 183},
    {'user_country': 'Australia', 'value': 183},
    {'user_country': 'Germany', 'value': 183},
    {'user_country': 'France', 'value': 183},
    {'user_country': 'Brazil', 'value': 183},
    {'user_country': 'Mexico', 'value': 183},
    {'user_country': 'Italy', 'value': 183}]

// const SubscriptionRatingData = 
//     [{'Subscription': 'Basic', 'percentage': 0.39, },
//     {'Subscription': 'Standard', 'percentage': 0.31},
//     {'Subscription': 'Premium', 'percentage': 0.29},
//     ]

    const SubscriptionRatingData = [
        { type: "Basic", percentage: 39, fill: "var(--color-Basic)" },
        { type: "Standard", percentage: 31, fill: "var(--color-Standard)" },
        { type: "Premium", percentage: 29, fill: "var(--color-Premium)" }
    ];
    
    const User = () => {
        const [showAnalysis, setShowAnalysis] = useState(false);
        const toggleAnalysis = () => setShowAnalysis((prev) => !prev);
      
        return (
          <Container>
  {/* Main grid layout for charts */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* LineGraph */}
        <div className="col-span-1 md:col-span-2 lg:col-span-8">
          <LineGraph
            data={lineData}
            line1_name="Age Viewership"
            line1_dkey="line1_data"
            line2_name=""
            line2_dkey=""
            x_dkey="Age"
            lineChartTitle="Platform Consumption"
            lineChartDesc="Netflix consumption by age group"
            generalTrendMessage="Consumption drops with age"
            detailsMessage="User engagement drops sharply after age 26, then stabilizes."
          />
        </div>

        {/* Gender Breakdown Pie Chart */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <PieChartGraph
            data={pieChartData}
            dataKey="percentage"
            nameKey="type"
            pieChartTitle="Gender Breakdown"
            pieChartDescription="Userbase by gender"
            generalTrendMessage="Balanced gender distribution"
            detailsMessage="Netflix attracts a nearly equal male and female audience."
          />
        </div>

        {/* Bar charts */}
        <div className="col-span-1 md:col-span-6 lg:col-span-6">
          <ShadcnBarChart
            data={contentDistributionData}
            xKey="country"
            yKey="value"
            title="Country Distribution by User Base"
            dataLabel="Country"
            description="Content availability by country"
            generalTrendMessage="Top availability in U.S., Spain, and Canada"
            detailsMessage="U.S., Spain, and Canada have the largest content libraries."
          />
        </div>

        <div className="col-span-1 md:col-span-6 lg:col-span-6">
          <ShadcnBarChart
            data={userCountryData}
            xKey="user_country"
            yKey="value"
            title="User by Country"
            dataLabel="Country"
            description="User distribution by country"
            generalTrendMessage="High engagement in North America & Europe"
            detailsMessage="Strong user engagement across North America and Europe"
          />
        </div>

        <div className="col-span-1 md:col-span-6 lg:col-span-4">
          <PieChartGraph
            data={SubscriptionRatingData}
            dataKey="percentage"
            nameKey="type"
            pieChartTitle="Subscription Type"
            pieChartDescription="Userbase by subscription"
            generalTrendMessage="Majority of users on Basic plan"
            detailsMessage="Basic plan is the most popular subscription choice"
            
          />
        </div>

        <div className="col-span-1 md:col-span-6 lg:col-span-8">
          <ShadcnBarChart
            data={categoryData}
            xKey="name"
            yKey="value"
            title="User Device"
            dataLabel="Device Use"
            description="Devices used to watch Netflix"
            generalTrendMessage="Preference for Smart TVs and laptops"
            detailsMessage="Smart TVs and laptops are the top streaming devices"
          />
        </div>
      </div>
      
            
            <div className="text-center mt-12">
  <button
    onClick={toggleAnalysis}
    className="px-8 py-4 text-xl font-bold text-white bg-red-600 rounded-full hover:bg-red-700 transition-transform duration-300 ease-in-out transform hover:scale-105 font-cursive shadow-lg"
  >
    {showAnalysis ? "Hide Analysis" : "Show Analysis"}
  </button>
</div>

<div
  className={`bg-black/50 text-white p-8 mt-6 rounded-lg shadow-md transform transition-all duration-500 ease-in-out ${
    showAnalysis ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'
  }`}
>
  {showAnalysis && (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center">Analysis and Insights</h2>
      <table className="w-full table-auto border border-gray-700 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-6 py-4 text-left text-lg font-semibold text-gray-300 border-b border-gray-600">Metric</th>
            <th className="px-6 py-4 text-left text-lg font-semibold text-gray-300 border-b border-gray-600">Insight</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          <tr className="bg-gray-900 hover:bg-gray-800 transition-colors duration-200 ease-in-out">
            <td className="px-6 py-4 text-gray-200 font-medium">Platform Content Growth</td>
            <td className="px-6 py-4 text-gray-400">
              Consumption tends to decrease significantly after the age of 26, suggesting that younger audiences are more engaged with Netflix content.
            </td>
          </tr>
          <tr className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200 ease-in-out">
            <td className="px-6 py-4 text-gray-200 font-medium">Gender Breakdown</td>
            <td className="px-6 py-4 text-gray-400">
              The gender distribution is almost equal, highlighting that Netflix appeals equally to both male and female users.
            </td>
          </tr>
          <tr className="bg-gray-900 hover:bg-gray-800 transition-colors duration-200 ease-in-out">
            <td className="px-6 py-4 text-gray-200 font-medium">Country Distribution</td>
            <td className="px-6 py-4 text-gray-400">
              The United States, Spain, and Canada lead in content availability, with the largest volume of Netflix content.
            </td>
          </tr>
          <tr className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200 ease-in-out">
            <td className="px-6 py-4 text-gray-200 font-medium">User Distribution by Country</td>
            <td className="px-6 py-4 text-gray-400">
              User engagement is strong not only in North America but also across Europe, with substantial engagement from Spain, Germany, and Italy.
            </td>
          </tr>
          <tr className="bg-gray-900 hover:bg-gray-800 transition-colors duration-200 ease-in-out">
            <td className="px-6 py-4 text-gray-200 font-medium">Subscription Types</td>
            <td className="px-6 py-4 text-gray-400">
              The Basic plan is the most popular subscription choice, which could indicate price sensitivity or lower demand for premium features.
            </td>
          </tr>
          <tr className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200 ease-in-out">
            <td className="px-6 py-4 text-gray-200 font-medium">Device Usage</td>
            <td className="px-6 py-4 text-gray-400">
              Users most frequently stream content on Smart TVs and laptops, followed by tablets and smartphones, indicating a preference for larger screens.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )}
</div>

          </Container>
        );
      };
      
      export default User;
      
      