export default function playSound(audioId) {
  const audio = document.getElementById(audioId);
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch((err) => {
      console.warn(`Failed to play sound '${audioId}':`, err);
    });
  } else {
    console.warn(`Audio element with id '${audioId}' not found.`);
  }
}