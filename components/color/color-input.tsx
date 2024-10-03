"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// import { useDebouncedCallback } from "use-debounce";

type ColorInputProps = {
  placeholder: string;
};

const ColorInput = ({ placeholder }: ColorInputProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <input
      className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
      type="text"
      placeholder={placeholder}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get("query")?.toString()}
      maxLength={7}
    />
  );
};

export default ColorInput;
