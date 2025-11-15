import React from "react";

type AddPropertyButtonProps = {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const AddPropertyButton = ({
  label = "Button",
  onClick,
  className = "",
  type = "button",
}: AddPropertyButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center px-6 py-2 border border-[#232AAB] text-[16px] font-medium rounded-[12px] text-[#232AAB] cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
};

export default AddPropertyButton;
