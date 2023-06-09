import React from 'react';

interface SubTitleProps {
  subTitle: string;
}

export const SubTitle = ({ subTitle }: SubTitleProps) => {
  return (
    <p className="text-center text-dark-grey text-sm mt-5 mb-10">{subTitle}</p>
  );
};