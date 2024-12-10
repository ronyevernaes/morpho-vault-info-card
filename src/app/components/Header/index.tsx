import { FC } from "react";
import Image from "next/image";

export const Header: FC = () => {
  return (
    <header>
      <div className="flex gap-8">
        <Image src="/logo.png" width={24} height={24} alt="Morpho Labs" />

        <span className="title">Morpho Test</span>
      </div>
    </header>
  );
};
