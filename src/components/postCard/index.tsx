import { useState } from "react";

import apiService from "@/utils/service/api.ts";
import { Switch } from "@/components/ui/switch.tsx";
import { Button } from "@/components/ui/button.tsx";

import { Ban, Loader2 } from "lucide-react";

export default function PostCard() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const URL = `/api/register`;
  const request = hasError
    ? { email: "sydney@fife" }
    : { email: "eve.holt@reqres.in", password: "pistol" };

  const fetch = () => {
    setIsLoading(true);
    const { response, error } = apiService.post(URL, request);
    console.log(response);
    console.log(error);
  };

  return (
    <div className="bg-[#262626] h-[18rem] w-[24rem] gap-6 transition-all text-white p-4 rounded-md flex justify-between flex-col">
      <div className="flex justify-between items-center w-full">
        <div>
          <h4 className="text-lg font-semibold">Post handler</h4>
          <small className="opacity-75">url: {URL}</small>
        </div>

        {isLoading && <Loader2 className="animate-spin size-4" />}
      </div>

      <div>
        <small className="opacity-75">Request: </small>

        <div className="bg-zinc-900/50 p-2 rounded truncate">
          <code className="text-xs">{JSON.stringify(request)}</code>
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

      <Button disabled={isLoading} onClick={fetch}>
        TEST
      </Button>
    </div>
  );
}
