import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../features/conversations/conversationsSlice";
import toast from "react-hot-toast";
import axios from "axios";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const messages = useSelector((state) => state.conversations.messages);
  const selectedConversation = useSelector(
    (state) => state.conversations.selectedConversation
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/messages/${
            selectedConversation._id
          }`
        );
        if (data.error) throw new Error(data.error);
        dispatch(setMessages(data));
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [dispatch, selectedConversation?._id]);

  return { loading, messages };
};

export default useGetMessages;
