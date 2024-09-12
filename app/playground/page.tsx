"use client";

import { useActionState, useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import { Rank } from "@/ui/rank";
import { ImageForm } from "@/ui/image-form";
import { Result } from "@/ui/result";
import { faceDetection } from "../lib/actions";
import { StatePrediction } from "../lib/types";

export default function Playground() {
  const [sessionData, setSessionData] = useState<Session>();
  const initialState: StatePrediction = {
    response: undefined,
    error: undefined,
  };
  const [state, formAction, isPending] = useActionState(
    faceDetection,
    initialState
  );

  useEffect(() => {
    // Forcing session refresh after signing in
    const refreshSession = async () => {
      await getSession().then((res) => setSessionData(res as Session));
    };

    refreshSession();
  }, []);

  if (!sessionData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading data, please wait...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-16 w-full min-w-[400px] py-12 px-12 md:px-24 md:pb-20">
      <Rank
        name={sessionData?.user.name as string}
        entries={
          (state.response?.userEntries as number) ||
          (sessionData?.user.entries as number)
        }
      />
      <ImageForm formAction={formAction} />
      <Result
        response={state.response}
        error={state.error}
        isPending={isPending}
      />
    </div>
  );
}
