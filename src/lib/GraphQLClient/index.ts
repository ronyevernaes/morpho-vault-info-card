import { GraphQLClient } from "graphql-request";

import { GRAPHQL_SERVER_URL } from "../../constants";

const client = new GraphQLClient(GRAPHQL_SERVER_URL);

export default client;
