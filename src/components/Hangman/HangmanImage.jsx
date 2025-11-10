export default function HangmanImage({ wrongGuesses }) {
  return (
    <div id="p">
      <img
        src={`/images/hm/hm${wrongGuesses + 1}.gif`}
        height="140"
        width="200"
        alt="hangman"
      />
    </div>
  );
}