import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../features/conversations/conversationsSlice";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const messages = useSelector((state) => state.conversations.messages);
  const selectedConversation = useSelector(
    (state) => state.conversations.selectedConversation
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const sendMessage = async (message) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `/api/messages/send/${selectedConversation._id}`,
        message
      );
      if (data.error) throw new Error(data.error);
      dispatch(setMessages([...messages, data]));
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};

export default useSendMessage;
