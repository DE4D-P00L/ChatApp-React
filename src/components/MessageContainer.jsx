import { useDispatch, useSelector } from "react-redux";
import Messages from "../components/Messages";
import MessageInput from "./MessageInput";
import { setSelectedConversation } from "../features/conversations/conversationsSlice";
import { useEffect } from "react";

const MessageContainer = () => {
  const dispatch = useDispatch();
  const selectedConversation = useSelector(
    (state) => state.conversations.selectedConversation
  );

  useEffect(() => {
    return () => {
      dispatch(setSelectedConversation(null));
    };
  }, [dispatch]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To: </span>
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullname}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 JohnDoe ❄</p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
};
