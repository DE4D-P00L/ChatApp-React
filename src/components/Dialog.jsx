import { IoClose } from "react-icons/io5";

function MyModal({ children, isOpen, setIsOpen, handleClose, handleOpen }) {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <div>
      <dialog
        open={isOpen}
        onClose={handleClose}
        className="z-10 relative flex flex-col p-2 rounded-md bg-gray-600">
        <button
          onClick={handleClose}
          className="bg-gray-700 hover:bg-gray-400 text-white p-1.5 rounded-md self-end">
          <IoClose />
        </button>
        <div className="p-4 max-w-[400px]">{children}</div>
      </dialog>
      <div
        onClick={handleBackdropClick}
        className={`top-0 left-0 w-full h-full bg-gray-950/50 z-1 cursor-pointer ${
          isOpen ? "fixed" : "hidden"
        }`}
      />
    </div>
  );
}

export default MyModal;
