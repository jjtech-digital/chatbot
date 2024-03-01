import Question from "./Question";
import Answer from "./Answer";
// import Loader from "./Loader";

const Chat = ({ messages, loading } : any) => {
  return (
    <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
      {messages.map((message : any, index : any) => (
        <div key={index}>
          {message.role === "user" ? (
            <Question>{message.content}</Question>
          ) : (
            <Answer>{message.content}</Answer>
          )}
        </div>
      ))}
      {loading && <Answer>loading...</Answer>}
    </div>
  );
};

export default Chat;
