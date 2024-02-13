import { BsSend } from "react-icons/bs";
import { useForm } from "react-hook-form";
import useSendMessage from "../hooks/useSendMessage";
import { IoImage } from "react-icons/io5";
import { useRef, useState } from "react";

const MessageInput = () => {
  const { loading, sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");
  const [imgFile, setImgFile] = useState();
  const imgPickerRef = useRef(null);

  const handleImageChange = (e) => {
    e.preventDefault();
    setImgFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // await sendMessage(data);
    if (!imgFile && !message) {
      console.log("no message body or image");
      return;
    }
    console.log(imgPickerRef.current.files[0]);
    const fd = new FormData();
    fd.append("message", message);
    fd.append("image", imgPickerRef.current.files[0]);
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/messages/sendImage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: fd,
      }
    );
    const data2 = await res.json();
    console.log(fd, data2);
    setMessage("");
    setImgFile(null);
  };

  return (
    <div className="flex w-full bg-[#202c33] pl-3">
      <form
        encType="multipart/form-data"
        className="px-2 bg-[#202c33] py-3 flex-1"
        onSubmit={onSubmit}>
        <div className="w-full relative flex gap-3">
          <input
            type="file"
            ref={imgPickerRef}
            hidden
            name="image"
            id="image"
            onChange={handleImageChange}
          />
          <button
            onClick={() => {
              imgPickerRef?.current?.click();
            }}
            className="">
            <IoImage className="text-3xl" />
          </button>
          <input
            type="text"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
            placeholder="Send a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="absolute inset-y-0 end-0 flex items-center pe-2">
            <button type="submit" className="bg-gray-600 p-2 rounded-full">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <BsSend />
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
