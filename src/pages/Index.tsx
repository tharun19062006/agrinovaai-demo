import Header from "@/components/dashboard/Header";
import Footer from "@/components/dashboard/Footer";
import WeatherCard from "@/components/dashboard/WeatherCard";
import SoilMoistureCard from "@/components/dashboard/SoilMoistureCard";
import FarmerInfoCard from "@/components/dashboard/FarmerInfoCard";
import AIAlertCard from "@/components/dashboard/AIAlertCard";
import ForecastCard from "@/components/dashboard/ForecastCard";
import CropCalendarCard from "@/components/dashboard/CropCalendarCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6 md:py-8">
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Panel */}
          <div className="space-y-8 animate-slide-up">
            <WeatherCard />
            <SoilMoistureCard />
            <FarmerInfoCard />
          </div>
          
          {/* Right Panel */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <AIAlertCard />
            <CropCalendarCard />
          </div>
        </div>
        
        {/* 72-Hour Forecast */}
        <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
          <ForecastCard />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
