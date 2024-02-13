import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../features/conversations/conversationsSlice";
import toast from "react-hot-toast";

const useSendImage = () => {
  const messages = useSelector((state) => state.conversations.messages);
  const user = useSelector((state) => state.auth.user);
  const selectedConversation = useSelector(
    (state) => state.conversations.selectedConversation
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const sendImage = async (message, image) => {
    try {
      setLoading(true);
      const { data } = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/messages/sendImage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: messageText,
            recipientId: selectedConversation.userId,
            img: imgUrl,
          }),
        }
      );
      console.log(data);
      if (data.error) throw new Error(data.error);
      dispatch(setMessages([...messages, data]));
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendImage };
};

export default useSendImage;
