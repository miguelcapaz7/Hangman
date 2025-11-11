import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResultLayout({
  title,
  subtitle,
  result,
  onImageClick,
  buttonText,
  colour
}) {
  
  const navigate = useNavigate();

  return (
    <div className={`${result}-page page-gradient`}>
      <h1 className={`color-change-${colour}`}>{title}!</h1>
      <audio src={`${import.meta.env.BASE_URL}audio/${result}/${result}.mp3`} id={result}></audio>
      <img src={`${import.meta.env.BASE_URL}images/${result}/${result}.gif`} id="image" onClick={onImageClick} alt={result} />
      <h2 className={`color-change-${colour}`}>CLICK ON IMAGE TO {subtitle}!</h2>
      <button className="page-button" onClick={() => navigate('/')}>{buttonText}</button>
    </div>
  );
}