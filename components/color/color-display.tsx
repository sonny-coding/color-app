import { isValidHex } from "@/utils/color-helper";

type ColorDisplayProps = {
  query: string;
};

const ColorDisplay = ({ query }: ColorDisplayProps) => {
  const color = query;
  return (
    <div
      className="w-full h-40 rounded-md shadow-md"
      style={{ backgroundColor: isValidHex(color) ? color : "#000000" }}
      aria-label={`Color display: ${color}`}
    />
  );
};

export default ColorDisplay;
