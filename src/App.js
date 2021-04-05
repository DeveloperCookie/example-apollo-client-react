import "./App.css";

import React from "react";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

import { ApolloProvider } from "@apollo/client";
import UseQueryExample from "./UseQueryExample";
import UseLazyQueryExample from "./UseLazyQueryExample";
import UseMutationExample from "./UseMutationExample";

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:3000/graphql" }),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UseQueryExample />
      <UseLazyQueryExample />
      <hr />
      <hr />
      <UseMutationExample />
    </ApolloProvider>
  );
};

export default App;
