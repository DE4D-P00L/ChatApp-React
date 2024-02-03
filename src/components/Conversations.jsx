import useGetConversations from "../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? <span className="loading loading-spinner"></span> : null}
      {!loading &&
        conversations.map((conversation, i) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIndex={i === conversations.length - 1}
          />
        ))}
    </div>
  );
};

export default Conversations;
