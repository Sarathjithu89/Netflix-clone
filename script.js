const cards = document.querySelector(".cardone");
document.getElementById("card-button").addEventListener("click", function () {
  cards.style.justifyContent = "flex-end";
  cards.style.transition = "all 0.5s";
});
document.getElementById("card-button2").addEventListener("click", function () {
  cards.style.justifyContent = "flex-start";
  cards.style.transition = "all 0.5s";
});
