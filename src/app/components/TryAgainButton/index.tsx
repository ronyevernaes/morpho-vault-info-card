"use client"

import { FC } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";

export const TryAgainButton: FC = () => {
  const router = useRouter();

  return (
    <Button
      className="!rounded-[32px]"
      onClick={() => router.refresh()}
    >
      Try again
    </Button>
  )
};