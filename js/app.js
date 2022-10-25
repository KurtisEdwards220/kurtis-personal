// QUOTE GENERATOR

const generateQuote = function () {
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
  let arrayIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
  document.getElementById("author").innerHTML = quotes[arrayIndex].author;
};
window.onload = function () {
  generateQuote();
  setInterval(generateQuote, 1000);
};
