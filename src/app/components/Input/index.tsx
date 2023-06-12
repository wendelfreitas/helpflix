import React from 'react';

interface InputProps {
  placeHolder: string;
  required?: boolean;
  label: string;
}
export const Input = ({ placeHolder, label, required }: InputProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        {required && (
          <span className="text-medium-gray text-base font-medium">*</span>
        )}
        <label
          htmlFor={label}
          className="text-medium-gray text-base font-medium"
        >
          {label}
        </label>
      </div>

      <input
        type="text"
        id={label}
        className="border border-light-grey h-11 w-full rounded-lg placeholder-light-grey px-4"
        placeholder={placeHolder}
      />
    </div>
  );
};
