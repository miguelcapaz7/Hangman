import { useNavigate } from 'react-router-dom';
import useHangman from '../../hooks/useHangman';
import HangmanImage from '../../components/Hangman/HangmanImage'
import DisplayField from '../../components/Hangman/DisplayField';
import LetterButtons from '../../components/Hangman/LetterButtons';

export default function Hangman() {
  const {
    displayWord,
    hint,
    usedLetters,
    wrongGuesses,
    score,
    loading,
    startNewGame,
    getLetters
  } = useHangman();

  const navigate = useNavigate();

  if (!loading && displayWord && !displayWord.includes('#')) {
    navigate('/victory');
  } else if (wrongGuesses === 10) {
    navigate('/fail');
  }

  return (
    <div className="hangman-container">
      <b id="score" className="white">Score: {score}</b>
      <h2>Hangman</h2>

      <HangmanImage wrongGuesses={wrongGuesses} />

      <DisplayField label="Display Word" value={displayWord} />
      <div id="hint" className="hint">Hint: {hint}</div>
      <DisplayField label="Used Letters" value={usedLetters} />

      <button onClick={startNewGame} className="button-base restart-btn">Restart Game</button>

      <p className="paragragh"><label>Choose a letter:</label></p>
      <LetterButtons usedLetters={usedLetters} getLetters={getLetters} />
    </div>
  );
}
