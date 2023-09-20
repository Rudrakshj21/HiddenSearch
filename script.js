const btn = document.querySelector(".btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input");
console.log("a");
btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
