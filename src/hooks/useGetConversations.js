import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/users");
        if (data.error) throw new Error(data.error);
        setConversations(data);
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
