import { Droplet } from "lucide-react";

const SoilMoistureCard = () => {
  const moistureLevel = 42;
  
  return (
    <div className="card-elevated p-5">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <Droplet className="w-5 h-5 text-primary" />
        Soil Moisture
      </h3>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-display font-bold text-foreground">{moistureLevel}%</span>
          <span className="px-3 py-1 bg-destructive/10 text-destructive text-xs font-semibold rounded-full">
            LOW
          </span>
        </div>
        
        <div className="space-y-2">
          <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
            <div 
              className="h-full bg-destructive transition-all rounded-full"
              style={{ width: `${moistureLevel}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0%</span>
            <span>Optimal: 60-80%</span>
            <span>100%</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mt-2">
          Soil moisture is below optimal levels. Monitor closely.
        </p>
      </div>
    </div>
  );
};

export default SoilMoistureCard;
