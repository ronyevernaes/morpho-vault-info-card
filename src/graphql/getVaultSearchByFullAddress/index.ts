import { gql } from "@apollo/client";

export default gql`
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
