import { useSelector } from "react-redux";
import { extractTime } from "../utils/extractTime";

const Message = ({ message }) => {
  const user = useSelector((state) => state.auth.user);
  const selectedConversation = useSelector(
    (state) => state.conversations.selectedConversation
  );
  const fromMe = user._id === message.senderId;
  const chatStyle = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? user.profilePic : selectedConversation.profilePic;
  const chatBg = fromMe ? "bg-[#005c4b]" : "bg-[#202c33]";
  const messageCreatedAt = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatStyle}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${chatBg} pb-2`}>
        {message.message}
      </div>
      <div
        className={`chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-300`}>
        {messageCreatedAt}
      </div>
    </div>
  );
};

export default Message;
