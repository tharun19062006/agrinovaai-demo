import { Calendar } from "lucide-react";

const CropCalendarCard = () => {
  return (
    <div className="card-elevated p-5">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-primary" />
        Crop Calendar
      </h3>
      
      <table className="w-full text-sm table-fixed">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-2 text-muted-foreground font-medium w-20">Date</th>
            <th className="text-left py-2 text-muted-foreground font-medium">Activity</th>
            <th className="text-right py-2 text-muted-foreground font-medium w-24">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border/50">
            <td className="py-3 text-foreground">Jan 22</td>
            <td className="py-3 text-foreground">Winter Wheat Planting</td>
            <td className="py-3 text-right">
              <span className="px-2 py-1 rounded-full text-xs bg-accent/20 text-accent font-medium">Today</span>
            </td>
          </tr>
          <tr className="border-b border-border/50">
            <td className="py-3 text-foreground">Jan 25</td>
            <td className="py-3 text-foreground">Irrigation Cycle #12</td>
            <td className="py-3 text-right">
              <span className="px-2 py-1 rounded-full text-xs bg-primary/20 text-primary font-medium">Upcoming</span>
            </td>
          </tr>
          <tr>
            <td className="py-3 text-foreground">Jan 28</td>
            <td className="py-3 text-foreground">Fertilizer Application</td>
            <td className="py-3 text-right">
              <span className="px-2 py-1 rounded-full text-xs bg-primary/20 text-primary font-medium">Upcoming</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CropCalendarCard;
