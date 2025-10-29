window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});