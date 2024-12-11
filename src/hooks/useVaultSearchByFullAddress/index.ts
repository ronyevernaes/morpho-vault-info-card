"use client";

import { useQuery } from "@apollo/client";

import GQL from "@/graphql/getVaultSearchByFullAddress";
import { VaultSearchResponse } from "@/types/vaults";

export const useVaultSearchByFullAddress = (address: string) => {
  const { data, loading, error } = useQuery<VaultSearchResponse>(
    GQL,
    {
      variables: { address },
      skip: !address
    },
  );

  return { vaults: data?.vaults?.items?? [], loading, error };
};
