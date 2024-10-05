"use client";
import copy from "copy-text-to-clipboard";
import toast from "react-hot-toast";

const ColorValue = ({ value }: { value: string }) => {
  const notify = () => toast.success("Copied Successfully");
  const handleClick = () => {
    copy(value);
    notify();
  };
  return (
    <button
      onClick={handleClick}
      className="text-3xl cursor-pointer text-raven font-semibold p-3 hover:scale-[99%] hover:bg-whiteLilac rounded-xl  duration-150 ease-in w-full"
    >
      {value}
    </button>
  );
};

export default ColorValue;
