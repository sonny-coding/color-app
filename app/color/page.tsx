import { Suspense } from "react";

import ColorInput from "@/components/color/color-input";
import ColorDisplay from "@/components/color/color-display";
import { isValidHex } from "@/utils/color-helper";
import ColorInfo from "@/components/color/color-info";

type PageProps = {
  searchParams: {
    query?: string;
  };
};

const Loading = () => {
  return <p>🌀 Loading...</p>;
};

const Page = ({ searchParams }: PageProps) => {
  const query = searchParams?.query || "";
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      // style={{ backgroundColor: isValidHex(query) ? query : "#ffffff" }}
    >
      <div className="w-full max-w-md space-y-4 bg-white">
        <ColorInput placeholder="#ffffff" />
        <ColorDisplay query={query} />
        {isValidHex(query) && (
          <Suspense fallback={<Loading />}>
            <ColorInfo query={query.slice(1)} />
          </Suspense>
        )}

        <p className="text-center"></p>
      </div>
    </div>
  );
};

export default Page;
