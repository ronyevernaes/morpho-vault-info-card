import { gql } from "@apollo/client";

export default gql`
  query VaultData($address: String!, $chainId: Int!) {
    vaultByAddress(address: $address chainId: $chainId) {
      address
      chain {
        id
      }
      metadata {
        image
        curators {
          name
        }
      }
      name
      state {
        owner
        totalAssetsUsd
        netApy
      }
    }
  }
`;
