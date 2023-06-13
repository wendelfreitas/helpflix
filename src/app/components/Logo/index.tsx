import React from 'react';
import logo from '../../../../public/img/logo.svg';
import Image from 'next/image';

interface HelpFlixLogoProps {
  className?: string;
}

export const HelpFlixLogo = ({ className }: HelpFlixLogoProps) => {
  return (
    <div className={`flex gap-2 justify-center ${className}`}>
      <p className="text-xs text-medium-gray">Power by</p>
      <Image src={logo} width={85} height={10} alt=" helpflix logo" />
    </div>
  );
};
