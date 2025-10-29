window.addEventListener("scroll", () => {
  const members = document.querySelectorAll(".member");
  members.forEach((member) => {
    const top = member.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      member.style.opacity = "1";
      member.style.transform = "translateY(0)";
      member.style.transition = "all 0.8s ease";
    }
  });
});