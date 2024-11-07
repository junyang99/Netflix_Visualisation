import { Button } from "@/components/ui/button";
import Carousell from "@/components/Carousell";
import { Info } from "lucide-react";

export default function Main() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[100vh] sm:h-[85vh] w-full">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('@/assets/netflixlanding.webp')] bg-cover bg-center" />

          {/* Horizontal gradient with brighter center */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/10 to-background" />

          {/* Vertical gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30" />

          {/* Corner gradients */}
          <div className="absolute inset-0 bg-gradient-to-tr from-background" />
          <div className="absolute inset-0 bg-gradient-to-bl from-background" />
        </div>

        {/* Hero Content */}
        <div className="relative pt-[15vh] sm:pt-[20vh] px-6 sm:px-8 md:px-16 lg:px-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white max-w-2xl mb-4">
            Unveiling Netflix's Global Content Strategies
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg mb-8">
            Analyzing patterns and trends in the streaming industry to empower
            decision-makers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
        
            <Button
              size="lg"
              variant="outline"
              className="bg-primary hover:bg-red-800 text-white w-full sm:w-auto"
            >
              <Info className="mr-2 h-5 w-5 sm:h-6 sm:w-6" /> View Dashboard
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-20 relative z-10 bg-gradient-to-b from-transparent via-background to-background  ">
        {/* Top 10 Section */}
        <section>
          <Carousell />
        </section>

        
      </div>

      
    </div>
  );
}
