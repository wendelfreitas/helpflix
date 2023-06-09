import React from 'react';

interface ButtonProps {
  name: string;
}

export const Button = ({ name }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="h-14 bg-gradient-to-r from-secondary-800 to-secondary-400 rounded-lg text-lg font-bold text-white"
    >
      {name}
    </button>
  );
};
