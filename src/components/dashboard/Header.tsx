import { Leaf, Cpu } from "lucide-react";

const Header = () => {
  return (
    <header className="gradient-hero text-primary-foreground py-6 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
            <Leaf className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold flex items-center gap-2">
              AgriNova AI Dashboard
              <span className="text-primary-foreground/80 text-lg font-normal">| Smart Farming Assistant</span>
              <Cpu className="w-6 h-6 opacity-80" />
            </h1>
            <p className="text-primary-foreground/80 text-sm md:text-base">
              AI-Powered Crop Intelligence
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
