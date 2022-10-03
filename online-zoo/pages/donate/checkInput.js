

let input = document.querySelector(".donate-range__input");
if (window.innerWidth <= 1200) {
  input.setAttribute("max", 7);
} else {
  input.setAttribute("max", 8); ;
}
window.addEventListener("resize", function () {
  if (window.innerWidth <= 1200) {
    input.setAttribute("max", 7); 
  } else {
    input.setAttribute("max", 8); 
  }
});
