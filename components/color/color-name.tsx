import Color from "@/types/Color";

type ColorNameProps = {
  query: string;
};

const ColorName = async ({ query }: ColorNameProps) => {
  async function fetchColorName<T>(query: string): Promise<T> {
    const response = await fetch(`https://www.thecolorapi.com/id?hex=${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
  const color: Color = await fetchColorName(query);
  return (
    <div className="max-w-md mx-auto p-4 bg-black rounded-md shadow-md">
      <div className="grid grid-cols-1 gap-2">
        <Foo name="hex" value={color.hex.value} />
        <Foo name="rgb" value={color.rgb.value} />
        <Foo name="hsl" value={color.hsl.value} />
        <Foo name="hsv" value={color.hsv.value} />
        <Foo name="cmyk" value={color.cmyk.value} />
        <Foo name="xyz" value={color.XYZ.value} />
      </div>
    </div>
  );
};

const Foo = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="w-full p-5 rounded-md bg-woodsmoke space-x-2 hover:cursor-pointer hover:scale-[101%] duration-300 ease-in-out">
      <span className="text-green uppercase">{name}:</span>
      <span className="text-alto">{value}</span>
    </div>
  );
};

export default ColorName;
