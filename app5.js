document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const successMsg = document.getElementById("successMsg");
  successMsg.style.display = "block";
  this.reset();
  setTimeout(() => {
    successMsg.style.display = "none";
  }, 3000);
});
z