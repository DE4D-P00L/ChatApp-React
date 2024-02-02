import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
          placeholder="Send a message"
        />
        <div className="absolute inset-y-0 end-0 flex items-center pe-2">
          <button type="submit" className="bg-gray-600 p-2 rounded-full">
            <BsSend />
          </button>
        </div>
      </div>
    </form>
  );
};

export default MessageInput;
