"use client"

import Image from "next/image";

import AlertIcon from "@/assets/icons/alert.svg";
import { TryAgainButton } from "./components";
import { Card } from "@/components/ui";

export default function Error() {
  return (
    <Card className="w-[350px] h-1/2 flex justify-center items-center">
      <div className="error-page-container">
        <div>
          <h2>
            <Image src={AlertIcon} width={20} height={20} alt="" />
            Oops!
          </h2>

          <p>Something went wrong, please try again.</p>
        </div>

        <TryAgainButton />
      </div>
    </Card>
  )
};
