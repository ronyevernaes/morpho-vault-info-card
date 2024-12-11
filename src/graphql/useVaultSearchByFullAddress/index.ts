"use client";

import { gql, useQuery } from "@apollo/client";

import { VaultSearchResponse } from "@/types/vaults";

const GQL = gql`
  query VaultSearchByFullAddress($address: String!) {
    vaults(
      first: 10
      where: {
        whitelisted: true,
        address_in: [$address]
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
