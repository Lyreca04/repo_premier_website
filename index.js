const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".navbar ul");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");

  hamburger.classList.toggle("active");

  if (hamburger.classList.contains("active")) {
    hamburger.textContent = "x";
  } else {
    hamburger.textContent = "☰";
  }
});
