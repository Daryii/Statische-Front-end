const button = document.getElementById("Button");
const heading = document.getElementById("welcome");
let clicked = false;

button.addEventListener("click", function () {
  if (!clicked) {
    heading.innerHTML = "Welkom 'jouw naam'";
    clicked = true;
  } else {
    button.style.display = "none";
  }
});