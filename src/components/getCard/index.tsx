import { useEffect, useState } from "react";

import apiService from "@/utils/service/api.ts";

import { Switch } from "@/components/ui/switch.tsx";
import { toast } from "sonner";

import { Ban, Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton.tsx";

export default function GetCard() {
  const [hasDelay, setHasDelay] = useState(false);
  const [hasError, setHasError] = useState(false);

  const URL = `${hasError ? "/api/unknown/24" : "/api/users/"}${hasDelay ? "?delay=5" : ""}`;

  const { response, error, isLoading } = apiService.get(URL);

  useEffect(() => {
    if (response) {
      toast.success("Done! All set.", {
        description: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      });
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong!", {
        description: error.message,
      });
    }
  }, [error]);

  return (
    <div className="bg-[#262626] h-[18rem] w-[24rem] gap-6 text-white p-4 rounded-md flex justify-between flex-col">
      <div className="flex justify-between items-center w-full">
        <div>
          <h4 className="text-lg font-semibold">Get handler</h4>
          <small className="opacity-75">url: {URL}</small>
        </div>

        {isLoading && <Loader2 className="animate-spin size-4" />}
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Loader2 className="size-3 opacity-75" />

          <p>Load time</p>
        </div>
        <div>
          <Switch
            disabled={isLoading}
            checked={hasDelay}
            onCheckedChange={() => setHasDelay(!hasDelay)}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Ban className="size-3 opacity-75" />

          <p>Error</p>
        </div>

        <div>
          <Switch
            disabled={isLoading}
            checked={hasError}
            onCheckedChange={() => setHasError(!hasError)}
          />
        </div>
      </div>

      <div className={`grid w-full gap-1.5 transition-opacity `}>
        <small>Request response</small>

        {isLoading ? (
          <Skeleton className="w-full h-10" />
        ) : (
          <div className="bg-zinc-900/50 truncate p-2 rounded">
            {error ? (
              <code className="text-xs">
                No response received something went wrong...
              </code>
            ) : (
              <code className="text-xs">{JSON.stringify(response?.data)}</code>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
