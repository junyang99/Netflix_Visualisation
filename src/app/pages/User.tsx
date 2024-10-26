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
          <Container className="w-full max-w-[1600px] mx-auto px-6">
            {/* Main grid layout for charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
              {/* LineGraph */}
              <div className="col-span-1 md:col-span-2 lg:col-span-8">
                <LineGraph
                  data={lineData}
                  line1_name="Age Viewership"
                  line1_dkey="line1_data"
                  x_dkey="Age"
                  lineChartTitle="Platform Content Growth Over Time"
                  lineChartDesc="Analysis of user's Netflix consumption by age"
                  generalTrendMessage="Decline in User as Age increases"
                  detailsMessage="There is a sharp decline in user consumption after Age 26 and consumption steadily stagnates afterwards"
                />
              </div>
      
              {/* Gender Breakdown Pie Chart */}
              <div className="col-span-1 md:col-span-2 lg:col-span-4">
                <PieChartGraph
                  data={pieChartData}
                  dataKey="percentage"
                  nameKey="type"
                  pieChartTitle="Gender Breakdown"
                  pieChartDescription="Breakdown of userbase by gender"
                  generalTrendMessage="Equal Gender Distribution between guys and girls"
                  detailsMessage="Equal Gender Distribution between guys and girls"
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
                  description="Content distribution by country on Netflix"
                />
              </div>
      
              <div className="col-span-1 md:col-span-6 lg:col-span-6">
                <ShadcnBarChart
                  data={userCountryData}
                  xKey="user_country"
                  yKey="value"
                  title="User by Country"
                  dataLabel="Country"
                  description="User distribution of content by country"
                />
              </div>
      
              <div className="col-span-1 md:col-span-6 lg:col-span-4">
                <PieChartGraph
                  data={SubscriptionRatingData}
                  dataKey="percentage"
                  nameKey="type"
                  pieChartTitle="Subscription Type"
                  pieChartDescription="Breakdown of userbase by subscription"
                  generalTrendMessage="Majority of users are subscribed to the Basic Plan"
                />
              </div>
      
              <div className="col-span-1 md:col-span-6 lg:col-span-8">
                <ShadcnBarChart
                  data={categoryData}
                  xKey="name"
                  yKey="value"
                  title="User Device"
                  dataLabel="Devices Use"
                  description="User's device used to watch Netflix"
                />
              </div>
            </div>
      
            
            <div className="text-center mt-12">
              <button
                onClick={toggleAnalysis}
                className="px-8 py-4 text-xl font-bold text-white bg-red-600 rounded-full hover:bg-red-700 transition-all font-cursive shadow-lg"
              >
                {showAnalysis ? "Hide Analysis" : "Show Analysis"}
              </button>
            </div>
      
            
            {showAnalysis && (
  <div className="bg-black/50 text-white p-8 mt-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Analysis and Insights</h2>
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr className="text-left">
          <th className="pb-2 text-lg font-medium text-gray-300">Metric</th>
          <th className="pb-2 text-lg font-medium text-gray-300">Insight</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-700">
        <tr>
          <td className="py-4 text-gray-200">Platform Content Growth</td>
          <td className="py-4 text-gray-400">
            Consumption tends to decrease significantly after the age of 26, suggesting that younger
            audiences are more engaged with Netflix content.
          </td>
        </tr>
        <tr>
          <td className="py-4 text-gray-200">Gender Breakdown</td>
          <td className="py-4 text-gray-400">
            The gender distribution is almost equal, highlighting that Netflix appeals equally to
            both male and female users.
          </td>
        </tr>
        <tr>
          <td className="py-4 text-gray-200">Country Distribution</td>
          <td className="py-4 text-gray-400">
            The United States, Spain, and Canada lead in content availability, with the largest
            volume of Netflix content.
          </td>
        </tr>
        <tr>
          <td className="py-4 text-gray-200">User Distribution by Country</td>
          <td className="py-4 text-gray-400">
            User engagement is strong not only in North America but also across Europe, with
            substantial engagement from Spain, Germany, and Italy.
          </td>
        </tr>
        <tr>
          <td className="py-4 text-gray-200">Subscription Types</td>
          <td className="py-4 text-gray-400">
            The Basic plan is the most popular subscription choice, which could indicate price
            sensitivity or lower demand for premium features.
          </td>
        </tr>
        <tr>
          <td className="py-4 text-gray-200">Device Usage</td>
          <td className="py-4 text-gray-400">
            Users most frequently stream content on Smart TVs and laptops, followed by tablets and
            smartphones, indicating a preference for larger screens.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)}


          </Container>
        );
      };
      
      export default User;
      
      