import { User, MapPin, Wheat } from "lucide-react";

const FarmerInfoCard = () => {
  return (
    <div className="card-elevated p-5">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <User className="w-5 h-5 text-primary" />
        Farmer Profile
      </h3>
      
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center">
          <User className="w-7 h-7 text-primary-foreground" />
        </div>
        <div>
          <p className="font-semibold text-foreground text-lg">Ramesh Kumar</p>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin className="w-3 h-3" />
            <span>5-acre wheat farm</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-primary/5 rounded-lg flex items-center gap-2">
        <Wheat className="w-5 h-5 text-primary" />
        <span className="text-sm text-foreground font-medium">Primary Crop: Wheat</span>
      </div>
    </div>
  );
};

export default FarmerInfoCard;
