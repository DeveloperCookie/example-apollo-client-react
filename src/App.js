import "./App.css";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import UseQueryExample from "./UseQueryExample";

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:3000/graphql" }),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UseQueryExample />
    </ApolloProvider>
  );
};

export default App;
