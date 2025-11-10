import React from 'react';
import playSound from '../../utils/playSound';
import ResultLayout from '../../layouts/Results/ResultLayout';

export default function Victory() {
  const handleClick = () => playSound("victory")

  return (
    <ResultLayout 
      title="CONGRATULATIONS"
      subtitle="CELEBRATE"
      result="victory"
      onImageClick={handleClick}
      buttonText="Let's Play Again"
      colour="green"
    />
  );
}