export default function LetterButtons({ usedLetters, getLetters }) {
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  return (
    <div>
      {letters.map(letter => (
        <button
          className="button-base hangman-btn"
          key={letter}
          onClick={() => getLetters(letter)}
          disabled={usedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}