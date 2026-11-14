document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelector(".progress-bar");

  if (progressBar) {
    let width = 0;
    const interval = setInterval(() => {
      width += 4;
      progressBar.style.width = `${Math.min(width, 100)}%`;
      if (width >= 100) {
        clearInterval(interval);
      }
    }, 120);
  }
});
