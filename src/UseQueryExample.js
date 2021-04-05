import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

const GET_GREETING = gql`
  query GetGreeting($language: String!) {
    greeting(language: $language) {
      message
    }
  }
`;

const useQueryExample = () => {
  const { loading, error, data } = useQuery(GET_GREETING, {
    variables: { language: "korean" },
  });

  if (loading) return <p>Loading ...</p>;

  return <h1>Message = {data.greeting.message}!</h1>;
};

export default useQueryExample;
