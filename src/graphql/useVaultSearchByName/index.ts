"use client";

import { gql, useQuery } from "@apollo/client";

import { VaultSearchResponse } from "@/types/vaults";

const GQL = gql`
  query VaultSearchByName($name: String!) {
    vaults(
      first: 10
      where: {
        whitelisted: true,
        search: $name
      }
    ) {
      items {
        id
        address
        chain {
          id
        }
        metadata {
          image
        }
        name
      }
    }
  }
`;

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
