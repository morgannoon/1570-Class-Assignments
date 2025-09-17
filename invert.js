function invertColors() {
  const body = document.body;
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "black"; // restore original
    body.style.filter = "invert(0)";
  } else {
    body.style.backgroundColor = "white"; // invert background
    body.style.filter = "invert(1)";
  }
}
const invertButton = document.getElementById("invertBtn");
invertButton.addEventListener("click", invertColors);

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});