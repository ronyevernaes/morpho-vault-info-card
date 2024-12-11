"use client";

import { useQuery } from "@apollo/client";

import GQL from "@/graphql/getVaultSearchByName";
import { VaultSearchResponse } from "@/types/vaults";

export const useVaultSearchByName = (name: string) => {
  const { data, loading, error } = useQuery<VaultSearchResponse>(
    GQL,
    {
      variables: { name },
      skip: !name
    },
  );

  return { vaults: data?.vaults?.items?? [], loading, error };
};
