export default function HangmanImage({ wrongGuesses }) {
  return (
    <div id="p">
      <img
        src={`${import.meta.env.BASE_URL}images/hm/hm${wrongGuesses + 1}.gif`}
        height="140"
        width="200"
        alt="hangman"
      />
    </div>
  );
}