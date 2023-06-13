import React from 'react';

interface SubTitleProps {
  subTitle: string;
  className?: string;
}

export const SubTitle = ({ subTitle, className }: SubTitleProps) => {
  return (
    <p className={`text-center text-dark-grey text-sm ${className}`}>
      {subTitle}
    </p>
  );
};
