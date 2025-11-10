import { useState, useEffect } from 'react';

export default function useHangman() {
  const [toGuess, setToGuess] = useState('');
  const [hint, setHint] = useState('');
  const [displayWord, setDisplayWord] = useState('');
  const [usedLetters, setUsedLetters] = useState('');
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://www.wordgamedb.com/api/v2/words/random');
      if (!res.ok) throw new Error('Failed to fetch word');
      const data = await res.json();

      const word = data.word?.toUpperCase() || '';
      const wordHint = data.hint || 'No hint available.';

      setToGuess(word);
      setDisplayWord('#'.repeat(word.length));
      setHint(wordHint);
      setUsedLetters('');
      setWrongGuesses(0);
      setScore(0);
    } catch (e) {
      console.error('Error fetching word:', e);
      setHint('Error fetching word. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getLetters = (letter) => {
    if (usedLetters.includes(letter) || loading) return;

    setUsedLetters(prev => prev + letter);

    if (toGuess.includes(letter)) {
      const updated = displayWord.split('').map((ch, i) =>
        toGuess[i] === letter ? letter : ch
      );
      setDisplayWord(updated.join(''));
      setScore(prev => prev + 1);
    } else {
      setWrongGuesses(prev => prev + 1);
      setScore(prev => prev - 1);
    }
  };

  return {
    toGuess,
    hint,
    displayWord,
    usedLetters,
    wrongGuesses,
    score,
    loading,
    startNewGame,
    getLetters
  };
}