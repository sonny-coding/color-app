import Color from "@/types/Color";
import { fetchColor } from "@/lib/fetch-color";
import { toCamelCase } from "@/utils/text-helper";
import ColorValue from "./color-value";

type ColorNameProps = {
  query: string;
};

const ColorInfo = async ({ query }: ColorNameProps) => {
  const color: Color = await fetchColor(query);
  return (
    <div className="text-center space-y-1">
      <ColorValue value={toCamelCase(color.name.value)} />
      <ColorValue value={color.hex.value} />
      <ColorValue value={color.rgb.value} />
      <ColorValue value={color.hsl.value} />
      {/* <Info value={color.hsv.value} /> */}
      {/* <Info value={color.cmyk.value} /> */}
      {/* <Info value={color.XYZ.value} /> */}
    </div>
  );
};

export default ColorInfo;
