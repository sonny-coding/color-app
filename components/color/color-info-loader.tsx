import { Skeleton } from "@/components/ui/skeleton";

const Loader = () => {
  return (
    <div className="space-y-1">
      {[...Array(3)].map((_, index) => (
        <Skeleton
          key={index}
          className="bg-whiteLilac w-full max-w-md h-[84px] rounded-xl py-3 px-20"
        >
          <div className="bg-raven w-full" />
        </Skeleton>
      ))}
    </div>
  );
};

export default Loader;
