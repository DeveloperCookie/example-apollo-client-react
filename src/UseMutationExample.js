import { useMutation } from "@apollo/client";
import { ADD_GREETING } from "./queries";

const useMutationExample = () => {
  let languageInput, messageInput;
  const [addGreeting, { data }] = useMutation(ADD_GREETING);

  return (
    <div>
      Data: {JSON.stringify(data)}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addGreeting({
            variables: {
              language: languageInput.value,
              message: messageInput.value,
            },
          }).then((r) => {
            console.log(r.data);
          });
          languageInput.value = "";
          messageInput.value = "";
        }}
      >
        <input
          aria-label={"Language"}
          ref={(node) => {
            languageInput = node;
          }}
        />
        <input
          ref={(node) => {
            messageInput = node;
          }}
        />
        <button type="submit">Add New Greeting</button>
      </form>
    </div>
  );
};

export default useMutationExample;
