import { ApolloClient, InMemoryCache } from "@apollo/client";

import { GRAPHQL_SERVER_URL } from "../../constants";

const client = new ApolloClient({
  uri: GRAPHQL_SERVER_URL,
  cache: new InMemoryCache()
});

export default client;
