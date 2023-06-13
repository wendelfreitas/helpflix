'use-client';
import React from 'react';
import Lottie from 'react-lottie-player';

interface LottieComponentProps {
  animationData: object;
  style: { wdith: number; height: number };
}
export const LottieComponent = ({
  animationData,
  style,
}: LottieComponentProps) => {
  return <Lottie loop animationData={animationData} play style={style} />;
};
