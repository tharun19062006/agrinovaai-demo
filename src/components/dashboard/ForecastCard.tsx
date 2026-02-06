import { CloudRain, Sun, Thermometer, Sprout, Scissors, Clock } from "lucide-react";

interface ForecastDay {
  day: string;
  temp: string;
  condition: string;
  conditionColor: string;
  recommendation: string;
  icon: React.ReactNode;
}

const ForecastCard = () => {
  const forecast: ForecastDay[] = [
    {
      day: "Monday",
      temp: "32°C",
      condition: "Low rain",
      conditionColor: "text-secondary",
      recommendation: "Planting window open",
      icon: <CloudRain className="w-8 h-8 text-secondary" />,
    },
    {
      day: "Tuesday",
      temp: "34°C",
      condition: "High evaporation",
      conditionColor: "text-accent",
      recommendation: "Delay irrigation",
      icon: <Sun className="w-8 h-8 text-accent" />,
    },
    {
      day: "Wednesday",
      temp: "31°C",
      condition: "Ideal",
      conditionColor: "text-success",
      recommendation: "Harvest recommended",
      icon: <Sun className="w-8 h-8 text-success" />,
    },
  ];

  const getRecommendationIcon = (rec: string) => {
    if (rec.includes("Planting")) return <Sprout className="w-4 h-4" />;
    if (rec.includes("Harvest")) return <Scissors className="w-4 h-4" />;
    return <Clock className="w-4 h-4" />;
  };

  return (
    <div className="card-elevated p-5">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <Thermometer className="w-5 h-5 text-secondary" />
        72-Hour Forecast
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {forecast.map((day, index) => (
          <div 
            key={day.day}
            className="bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-colors duration-200 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-foreground">{day.day}</span>
              {day.icon}
            </div>
            
            <p className="text-2xl font-display font-bold text-foreground mb-1">
              {day.temp}
            </p>
            <p className={`text-sm font-medium ${day.conditionColor} mb-3`}>
              {day.condition}
            </p>
            
            <div className="flex items-center gap-2 p-2 bg-card rounded-lg border border-border">
              <span className="text-primary">
                {getRecommendationIcon(day.recommendation)}
              </span>
              <span className="text-xs font-medium text-foreground">
                {day.recommendation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
