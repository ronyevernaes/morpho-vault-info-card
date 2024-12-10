import { FC } from "react";
import Image from "next/image";

import ArrowIcon from "@/assets/icons/arrow.svg";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui";

export const Header: FC = () => {
  return (
    <header>
      <div className="flex gap-8">
        <Image src={Logo} width={24} height={24} alt="Morpho Labs" />

        <span className="title">Morpho Test</span>
      </div>

      <Button
        as="a"
        href="https://github.com/ronyevernaes/morpho-vault-info-card"
        target="_blank"
        variant="secondary"
      >
        Go to GitHub Repo

        <Image src={ArrowIcon} width={20} height={20} alt="Open new tab" />
      </Button>
    </header>
  );
};
