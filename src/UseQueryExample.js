import { useQuery } from "@apollo/client";
import { GET_GREETING } from "./queries";

const useQueryExample = () => {
  const { loading, error, data } = useQuery(GET_GREETING, {
    variables: { language: "korean" },
  });

  if (loading) return <p>Loading ...</p>;

  return <h1>Message = {data.greeting.message}!</h1>;
};

export default useQueryExample;
