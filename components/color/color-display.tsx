import { isValidHex } from "@/utils/color-helper";
import { isDarkColor } from "@/utils/color-helper";

type ColorDisplayProps = {
  query: string;
};

const ColorDisplay = async ({ query }: ColorDisplayProps) => {
  const color = query;
  const displayTextColor = isValidHex(color) ? color : "#ffffff";
  return (
    <div
      className="w-full h-40 rounded-xl shadow-md hover:scale-[99%] duration-150 ease-in hover:cursor-pointer p-3 flex flex-col justify-end"
      style={{ backgroundColor: isValidHex(color) ? color : "#ffffff" }}
      aria-label={`Color display: ${color}`}
    >
      <p
        className={`text-3xl ${
          isDarkColor(color) ? "text-white" : "text-raven"
        }`}
      >
        {displayTextColor}
      </p>
    </div>
  );
};

export default ColorDisplay;
