import { Leaf, Sparkles, Smartphone } from "lucide-react";
import qrCode from "@/assets/qrcode.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const isMobile = useIsMobile();
  
  const handleOpenOnPhone = () => {
    window.open("https://agrinova-ai.lovable.app/", "_blank");
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-6 px-4 mt-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">
              © 2026 AgriWeather AI
            </span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              🏆 NEXTGEN-AI 2026 | Team AgriNova AI
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleOpenOnPhone}
              variant="outline"
              className="gap-2"
            >
              <Smartphone className="w-4 h-4" />
              📱 Open on Phone
            </Button>
            
            {!isMobile && (
              <div className="flex items-center gap-3 px-4 py-3 bg-background rounded-xl border border-border shadow-sm">
                <img 
                  src={qrCode} 
                  alt="QR Code to access dashboard on mobile" 
                  className="w-16 h-16 rounded"
                />
                <span className="text-sm font-semibold text-foreground">
                  📱 Scan to try on your phone!
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
