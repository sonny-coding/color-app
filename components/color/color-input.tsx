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
      className="p-4 w-full text-3xl focus:outline-none focus:ring-offset-0 rounded-lg shadow-md bg-whiteLilac"
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
