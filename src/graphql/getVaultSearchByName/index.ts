import { gql } from "@apollo/client";

export default gql`
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
