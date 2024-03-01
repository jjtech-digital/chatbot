import Question from "./Question";
import Answer from "./Answer";

export interface Message {
  role : string, 
  content : string
}

function capitalizeFirstLetter(str : string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


const Chat = ({ messages, loading } : any) => {
  return (
    <div className="flex flex-col flex-grow h-0 p-10 overflow-auto">
      {messages.map((message : Message) => (
        <div key={message.content}>
          {message.role === "user" ? (
            <Question>{capitalizeFirstLetter(message.content)}</Question>
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
