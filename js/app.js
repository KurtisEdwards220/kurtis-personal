// QUOTE GENERATOR
const quotes = [
  {
    quote: "First, solve the problem. Then, write the code.",
    author: " - John Johnson",
  },
  {
    quote: "Make it work, make it right, make it fast.",
    author: " - Kent Beck",
  },
  {
    quote: "Testing leads to failure, and failure leads to understanding.",
    author: " - Burt Rutan",
  },
  {
    quote: "It's harder to read code than to write it.",
    author: " - Joel Spolsky",
  },
];
let arrayIndex = 0;
function cycleArray() {
  let array = quotes[arrayIndex];
  document.getElementById("quotes").innerHTML = array.quote;
  document.getElementById("author").innerHTML = array.author;

  arrayIndex++;

  if (arrayIndex === quotes.length) {
    arrayIndex = 0;
  }
}
window.onload = function () {
  cycleArray();
  setInterval(cycleArray, 7000);
};
