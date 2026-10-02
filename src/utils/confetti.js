import confetti from 'canvas-confetti';

export function fireAchievementConfetti() {
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.8 },
    colors: ['#00F0FF', '#00FF9D', '#FFB800', '#FFFFFF'],
    ticks: 200,
    gravity: 1.2,
    decay: 0.94,
    startVelocity: 30,
    shapes: ['square', 'circle'],
    scalar: 0.9
  });
}

export function fireEasterEggConfetti() {
  const duration = 2.5 * 1000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#00F0FF', '#00FF9D', '#FF0055', '#FFB800']
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#00F0FF', '#00FF9D', '#FF0055', '#FFB800']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  frame();
}
