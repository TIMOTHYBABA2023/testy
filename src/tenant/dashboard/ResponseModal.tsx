import React from "react";
import { CheckCircle, X } from "lucide-react";

interface ResponseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const ResponseModal: React.FC<ResponseModalProps> = ({
  isOpen,
  onClose,
  title = "Success!",
  message = "Address unlocked successfully!",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[400px] max-w-[90%] p-6 text-center border border-green-200">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
        >
          <X size={20} />
        </button>

        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-500 w-14 h-14" />
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>

        <button
          onClick={onClose}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ResponseModal;
