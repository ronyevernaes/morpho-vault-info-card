import { notFound } from "next/navigation";
import Image from "next/image";

import ArrowIcon from "@/assets/icons/arrow.svg";
import { Button, Card } from "@/components/ui";
import { BLOCKCHAIN_EXPLORER_URL } from "@/constants";
import GET_VAULT_BY_ADDRESS from "@/graphql/getVaultByAddress";
import { formatAddress } from "@/lib/address";
import client from "@/lib/GraphQLClient";
import { formatMoney } from "@/lib/number";
import { Vault } from "@/types/vaults";

import "./styles.css";

type Props = {
  params: { address: string, chainId: string };
};

type Response = {
  vaultByAddress: Vault | null;
};

export default async function VaultPage({ params }: Props) {
  try {
    const { address, chainId } = await params;

    const data = await client.request<Response>(GET_VAULT_BY_ADDRESS, {
      address,
      chainId: Number(chainId),
    });

    if (!data.vaultByAddress) {
      notFound();
    }

    const { vaultByAddress: vault } = data;
    const explorerBaseUrl = BLOCKCHAIN_EXPLORER_URL[vault.chain.id];

    return (
      <Card className="w-[362px]">
        <div className="w-full flex flex-col gap-3 py-5">
          <div className="flex gap-3">
            <Image
              src={vault.metadata.image}
              width={80}
              height={80}
              alt=""
            />

            <div className="flex flex-col gap-0.5 py-[12.5px]">
              <span className="name">
                {vault.name}
              </span>

              {vault.metadata.curators?.length && (
                <span className="curator">
                  {vault.metadata.curators.reduce<string[]>(
                    (acc, { name }) => ([...acc, name]),
                    []
                  ).join(", ")}
                </span>
              )}
            </div>
          </div>

          <hr className="border-primary" />

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <span className="label">Total Supply (USD)</span>

              <span className="value">
                ${formatMoney(vault.state!.totalAssetsUsd)}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="label">Instant Net APY</span>

              <span className="value">
                {vault.state!.netApy.toFixed(2)}%
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="label">Vault Owner</span>

              {explorerBaseUrl ? (
                <Button
                  as="a"
                  className="value"
                  href={`${explorerBaseUrl}${vault.address}`}
                  target="_blank"
                  variant="tertiary"
                >
                  {formatAddress(vault.state!.owner)}

                  <Image src={ArrowIcon} width={20} height={20} alt="Open new tab" />
                </Button>
              ) : (
                <span className="value">
                  {formatAddress(vault.state!.owner)}
                </span>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
};
