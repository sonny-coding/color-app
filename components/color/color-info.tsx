import Color from "@/types/Color";
import { fetchColor } from "@/lib/fetch-color";
import { toCamelCase } from "@/utils/text-helper";

type ColorNameProps = {
  query: string;
};

const ColorInfo = async ({ query }: ColorNameProps) => {
  const color: Color = await fetchColor(query);
  return (
    <div className="text-center space-y-1">
      <Info value={toCamelCase(color.name.value)} />
      <Info value={color.hex.value} />
      <Info value={color.rgb.value} />
      <Info value={color.hsl.value} />
      <Info value={color.hsv.value} />
      <Info value={color.cmyk.value} />
      <Info value={color.XYZ.value} />
    </div>
  );
};

const Info = ({ value }: { value: string }) => {
  return (
    <p className="text-base cursor-pointer text-raven font-semibold p-2 hover:bg-whiteLilac">
      {value}
    </p>
  );
};

export default ColorInfo;
