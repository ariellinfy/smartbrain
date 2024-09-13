"use client";

import { useActionState } from "react";
import { Session } from "next-auth";
import { Rank } from "@/ui/rank";
import { ImageForm } from "@/ui/image-form";
import { Result } from "@/ui/result";
import { faceDetection } from "@/app/lib/actions";
import { StatePrediction } from "@/app/lib/types";

export const DetectionOverview = ({ session }: { session: Session }) => {
  const initialState: StatePrediction = {
    response: undefined,
    error: undefined,
  };
  const [state, formAction, isPending] = useActionState(
    faceDetection,
    initialState
  );

  return (
    <div className="flex flex-col justify-center items-center gap-16 w-full min-w-[400px] py-12 px-12 md:px-24 md:pb-20">
      <Rank
        name={session?.user.name as string}
        entries={
          (state.response?.userEntries as number) ||
          (session?.user.entries as number)
        }
      />
      <ImageForm formAction={formAction} isPending={isPending} />
      <Result
        response={state.response}
        error={state.error}
        isPending={isPending}
      />
    </div>
  );
};
