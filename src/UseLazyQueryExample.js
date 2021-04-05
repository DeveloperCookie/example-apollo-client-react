import { useLazyQuery } from "@apollo/client";
import { GET_GREETING } from "./queries";

const useLazyQueryExample = () => {
  const [loadGreeting, { called, loading, data }] = useLazyQuery(GET_GREETING, {
    variables: { language: "english" },
  });
  if (called && loading) return <p>Loading ...</p>;
  if (!called) {
    return <button onClick={() => loadGreeting()}>Load greeting</button>;
  }
  return <h1>[Lazy Loading] Message = {data.greeting.message}!</h1>;
};

export default useLazyQueryExample;

/* Docs: https://www.apollographql.com/docs/react/api/react/hooks/#example-3 */
