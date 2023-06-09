import React from 'react';
import logo from '../../../../static/assets/img/logo.svg';
import Image from 'next/image';

export const HelpFlixLogo = () => {
  return (
    <div className="flex gap-2 mt-5  justify-center">
      <p className="text-xs text-medium-gray">Power by</p>
      <Image src={logo} width={85} height={10} alt=" helpflix logo" />
    </div>
  );
};
