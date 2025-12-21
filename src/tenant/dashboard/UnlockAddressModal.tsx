import React from 'react';
import { X } from 'lucide-react';
import { BiCoinStack } from 'react-icons/bi';

interface UnlockAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  propertyName: string;
  tokenCost: number;
  balance: number;
}

const UnlockAddressModal: React.FC<UnlockAddressModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  propertyName,
  tokenCost,
  balance,
}) => {

  if (!isOpen) return null;

  const remainingBalance = balance - tokenCost;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[520px] max-w-[90%] border border-[#00000040]">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex flex-col">
            <h2 className="text-[14px] font-semibold flex items-center gap-2">
              <span className="text-[#0D0D12]">🔓</span> Unlock Property Address
            </h2>
            <p className="text-[#0D0D12] font-light text-[12px] mb-4">
              View the full address for <strong>{propertyName}</strong>
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <div className="border border-[#E1E4EA] shadow-sm shadow-[#0000000F] rounded-xl p-4 space-y-4">
            <div className="flex justify-between">
              <span className="text-[#7D8A9B]">Token Cost</span>
              <div className="flex items-center gap-1 border border-[#E0E1E1] px-3 py-1 rounded-full">
                <BiCoinStack color="#232AAB" />
                <span className="text-[#2C2E33]">{tokenCost} Tokens</span>
              </div>
            </div>

            <div className="flex justify-between text-gray-600">
              <span className="text-[#7D8A9B]">Your Balance</span>
              <div className="flex items-center gap-1 border border-[#E0E1E1] px-3 py-1 rounded-full">
                <BiCoinStack color="#232AAB" />
                <span className="text-[#2C2E33]">{balance} Tokens</span>
              </div>
            </div>

            <hr className="border-[#E0E1E180]" />

            <div className="flex justify-between font-medium text-gray-700">
              <span className="text-[#2C2E33] text-xs">Remaining Balance</span>
              <div className="flex items-center gap-1 bg-[#E0E1E180] px-3 py-1 rounded-full">
                <BiCoinStack color="#232AAB" />
                <span className="text-[#7D8A9B]">
                  {remainingBalance} Tokens
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-blue-100 px-6 py-4 bg-gray-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full border border-gray-300 text-[#2C2E33] font-medium hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-full bg-[#232AAB] text-white font-medium hover:bg-blue-700 shadow-md transition flex items-center gap-1"
          >
            🪙 Pay {tokenCost} Tokens
          </button>
        </div>
      </div>

    </div>
  );
};

export default UnlockAddressModal;
