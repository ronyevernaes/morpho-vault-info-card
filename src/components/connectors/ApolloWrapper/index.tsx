"use client";

import { FC, ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";

import client from "../../../lib/ApolloClient";

type Props = {
  children: ReactNode;
};

export const ApolloWrapper: FC<Props> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};
