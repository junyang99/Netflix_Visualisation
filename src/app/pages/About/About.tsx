'use client'

import { useState, useEffect } from 'react';
import Container from "@/components/Container";
import styles from "./styles.module.css"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, TrendingUp, PieChart } from "lucide-react"

const About = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor(false);
    }, 1000); // Adjust this value to match your typing animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      {/* Main Content Section */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-5xl font-extrabold mb-6">
            <span className={styles.typingone}>Netflix Analysis Project</span>
            {showCursor && <span className={styles.cursor}></span>}
          </h2>
          <p className="text-lg leading-7 mb-6">
            A comprehensive visualization and analysis of Netflix's business strategy and market position. This project explores the challenges faced by Netflix in today's competitive streaming landscape and the strategies employed to maintain its market leadership.
          </p>
        </div>

        {/* Netflix Icon / Graphic Section */}
        <div className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
            alt="Netflix Logo"
            className="w-1/2"
          />
        </div>
      </main>

      <hr className="border-gray-700 my-12" />

      {/* Milestones Section */}
      <section className="my-12">
        <h2 className="text-4xl font-bold mb-8">Key Milestones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-black/40 border-red-900">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Founded in 1997</h3>
              <p className="text-gray-400">Evolved from DVD rental service to a leading global streaming platform with nearly 300 million subscribers</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-red-900">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Expansion</h3>
              <p className="text-gray-400">Expanded to 190 countries in 7 years, growing from 1 country in 2010 to 190 countries by 2017</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-red-900">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mb-4">
                <PieChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">$35 Billion Revenue</h3>
              <p className="text-gray-400">90% from subscriptions and partnerships, 10% from advertising, growing from $2B in 2010</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <hr className="border-gray-700 my-12" />

      {/* Problem Statement Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="https://futureparty.com/wp-content/uploads/2022/04/netflix_ad_april_21.214759.gif"
            alt="Netflix Icon"
            className="w-2/3"
          />
        </div>

        <div>
          <h2 className="text-5xl font-extrabold mb-6">
            <span className={styles.typingtwo}>The Challenge</span>
            {showCursor && <span className={styles.cursor}></span>}
          </h2>
          <p className="text-lg leading-7 mb-6">
            "Netflix faces stagnant subscriber growth in saturated markets and increasing competition from emerging streaming platforms,
            challenging its ability to sustain market share and drive long-term growth"
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Market Saturation: Mature markets like the U.S. and Canada, subscriber growth has slowed due to high penetration rates.</li>
            <li>Intensifying Competition: The streaming landscape is becoming increasingly crowded, with platforms such as Disney+, Amazon Prime Video, and HBO Max vying for market share.</li>
          </ul>
        </div>
      </section>

      <hr className="border-gray-700 my-12" />

      {/* Strategy Section */}
      <section className="my-12">
        <h2 className="text-4xl font-bold mb-8">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-black/40 border-red-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">International Expansion</h3>
              <p className="text-gray-400">Netflix is focusing on international expansion, particularly in regions with lower market penetration, to tap into new subscriber bases</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-red-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Differentiation</h3>
              <p className="text-gray-400">Netflix invests heavily in original content to differentiate its offerings and retain subscribers</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <hr className="border-gray-700 my-12" />

      {/* Solution Overview Section */}
      <section className="my-12">
        <h2 className="text-4xl font-bold mb-8">Solution Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-black/40 border-red-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Market Expansion through Proven Content</h3>
              <p className="text-gray-400">Analyzes the performance metrics of shows and movies, highlighting titles with strong viewer engagement and retention rates</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-red-900">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Genre and Production Insights</h3>
              <p className="text-gray-400">Delivers insights into the popularity of specific genres across different regions, enabling Netflix to align content offerings with localized preferences</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <hr className="border-gray-700 my-12" />

      {/* Data Sources Section */}
      <section className="my-12">
        <h2 className="text-4xl font-bold mb-8">Data Sources</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            <a href="https://www.kaggle.com/datasets/shivamb/netflix-shows" className="text-red-500 underline hover:text-red-600">
              Netflix Shows Dataset
            </a>
          </li>
          <li>
            <a href="https://www.kaggle.com/datasets/arnavsmayan/netflix-userbase-dataset" className="text-red-500 underline hover:text-red-600">
              Netflix Userbase
            </a>
          </li>
          <li>
            <a href="https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset/data" className="text-red-500 underline hover:text-red-600">
              Most-Watched Movies
            </a>
          </li>
        </ul>
      </section>
    </Container>
  );
};

export default About;