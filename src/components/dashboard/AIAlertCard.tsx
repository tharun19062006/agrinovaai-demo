import { AlertTriangle, Droplets, Calendar, BarChart3, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIAlertCard = () => {
  const handleScheduleIrrigation = () => {
    alert("🌊 Irrigation Scheduled!\n\nNext irrigation: Wednesday, Jan 24 at 6:00 AM\nDuration: 45 minutes\nZones: All fields\n\n✅ You will save 1,200L water per acre by waiting for rain!");
  };

  const handleViewCropPlan = () => {
    alert("🌾 Crop Plan - Winter Wheat\n\n📅 Current Stage: Tillering (Week 4)\n📈 Progress: 35% complete\n\nUpcoming:\n• Week 6: First fertilizer application\n• Week 8: Pest inspection\n• Week 12: Heading stage begins\n\n🎯 Expected harvest: March 15-20");
  };

  const handleViewAnalytics = () => {
    alert("📊 Farm Analytics Summary\n\n🌡️ Avg Temperature: 18°C (optimal)\n🌧️ Monthly Rainfall: 45mm\n💧 Soil Moisture: 68% (good)\n🌾 Yield Prediction: 4.2 tons/acre\n\n📈 Trend: +12% vs last season");
  };

  return (
    <div className="card-elevated p-5">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-accent" />
        AI Recommendations
      </h3>
      
      {/* Alert Box */}
      <div className="gradient-alert rounded-xl p-4 mb-4 border border-accent/20">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm mb-1">
              ⚠️ Delay irrigation until Wednesday
            </p>
            <p className="text-muted-foreground text-sm">
              Rain predicted Monday - save resources
            </p>
          </div>
        </div>
        
        <div className="mt-3 p-3 bg-success/10 rounded-lg flex items-center gap-2">
          <Droplets className="w-4 h-4 text-success" />
          <span className="text-sm font-medium text-success">
            Save 1,200L water per acre
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button 
          variant="action" 
          className="w-full"
          onClick={handleScheduleIrrigation}
        >
          <Calendar className="w-4 h-4" />
          Schedule Irrigation
        </Button>
        
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            onClick={handleViewCropPlan}
          >
            <Wheat className="w-4 h-4" />
            View Crop Plan
          </Button>
          <Button 
            variant="secondary" 
            onClick={handleViewAnalytics}
          >
            <BarChart3 className="w-4 h-4" />
            View Analytics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIAlertCard;
