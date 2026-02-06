import { Cloud, Droplets, Wind, Thermometer } from "lucide-react";

const WeatherCard = () => {
  return (
    <div className="card-elevated p-5">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <Cloud className="w-5 h-5 text-secondary" />
        Current Weather
      </h3>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center">
            <Cloud className="w-10 h-10 text-secondary" />
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-foreground">28°C</p>
            <p className="text-muted-foreground text-sm">Partly Cloudy</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3">
          <Droplets className="w-4 h-4 text-secondary" />
          <div>
            <p className="text-xs text-muted-foreground">Humidity</p>
            <p className="text-sm font-semibold text-foreground">65%</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3">
          <Wind className="w-4 h-4 text-secondary" />
          <div>
            <p className="text-xs text-muted-foreground">Wind</p>
            <p className="text-sm font-semibold text-foreground">12 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
