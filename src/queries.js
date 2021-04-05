import gql from "graphql-tag";

export const GET_GREETING = gql`
  query GetGreeting($language: String!) {
    greeting(language: $language) {
      message
    }
  }
`;

export const ADD_GREETING = gql`
  mutation AddGreeting($language: String, $message: String) {
    addGreeting(language: $language, message: $message) {
      id
      language
      message
    }
  }
`;
