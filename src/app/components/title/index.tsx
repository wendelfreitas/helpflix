import React from 'react';

interface TitleProps {
  title: string;
}
export const Title = ({ title }: TitleProps) => {
  return (
    <h2 className="text-2xl font-bold text-black text-center mb-5">{title}</h2>
  );
};
