import gql from "graphql-tag";

export const GET_NOTES = gql`
  query getNotes {
    notes {
      id
      content
    }
  }
`;
