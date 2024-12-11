import Image from "next/image";

import AlertIcon from "@/assets/icons/alert.svg";
import { TryAgainButton } from "./components";

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <h2>
          <Image src={AlertIcon} width={20} height={20} alt="" />
          Not Found
        </h2>

        <p>We could not find the page you were looking for.</p>
      </div>

      <TryAgainButton />
    </div>
  )
};
