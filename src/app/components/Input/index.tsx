import React from 'react';

interface InputProps {
  placeHolder: string;
  required?: boolean;
  inputName: string;
}
export const Input = ({ placeHolder, inputName, required }: InputProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        {required && (
          <span className="text-medium-gray text-base font-medium">*</span>
        )}
        <p className="text-medium-gray text-base font-medium">{inputName}</p>
      </div>

      <input
        type="text"
        className="border border-light-grey h-11 w-full rounded-lg placeholder-light-grey px-4"
        placeholder={placeHolder}
      />
    </div>
  );
};
