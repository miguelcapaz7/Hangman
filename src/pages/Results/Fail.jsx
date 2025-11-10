import React from 'react';
import playSound from '../../utils/playSound';
import ResultLayout from '../../layouts/Results/ResultLayout';

export default function Fail() {
  const handleClick = () => playSound("fail")

  return (
    <ResultLayout 
      title="WRONG"
      subtitle="ACCEPT DEFEAT"
      result="fail"
      onImageClick={handleClick}
      buttonText="Go Back"
      colour="red"
    />
  );
}