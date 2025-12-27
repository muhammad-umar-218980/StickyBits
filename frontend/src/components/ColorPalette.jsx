import { CheckCircle2 } from "lucide-react";

const COLORS = [
  "#feff9c", // Default Yellow
  "#ff7eb9", // Pink
  "#7afcff", // Cyan
  "#fff740", // Bright Yellow
  "#98ff98", // Mint Green
  "#e6c9a8", // Beige
  "#e6e6fa", // Lavender
  "#d4a5a5", // Dusty Rose
  "#b0e0e6", // Powder Blue
  "#ffdab9", // Peach Puff
  "#1e293b", // Slate 800 (Dark)
  "#f43f5e", // Rose 500 (Vibrant)
];

const ColorPalette = ({ selectedColor, onSelect }) => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
      {COLORS.map((color) => (
        <button
          key={color}
          type="button"
          onClick={() => onSelect(color)}
          className={`
            w-10 h-10 rounded-full border-2 transition-all duration-200 flex items-center justify-center
            ${selectedColor === color ? "border-primary scale-110 shadow-lg" : "border-transparent hover:scale-105"}
          `}
          style={{ backgroundColor: color }}
          title={color}
        >
          {selectedColor === color && (
            <CheckCircle2 
              className={`w-5 h-5 ${
                ["#1e293b", "#f43f5e"].includes(color) ? "text-white" : "text-black"
              }`} 
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default ColorPalette;
