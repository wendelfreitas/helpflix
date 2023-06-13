import React from 'react';

interface TitleProps {
  title: string;
  className?: string;
}
export const Title = ({ title, className }: TitleProps) => {
  return (
    <h2 className={`text-2xl font-bold text-black text-center ${className}`}>
      {title}
    </h2>
  );
};
