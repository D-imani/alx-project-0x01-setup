import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      {text}
    </button>
  );
};

export default Button;