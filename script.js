// script.js

const quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Sometimes later becomes never. Do it now.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Discipline is doing it even when you don't feel like it.",
    "The only bad workout is the one that didn’t happen.",
    "You are your only limit.",
    "Train like a beast, live like a warrior."
  ];
  
  let currentQuote = "";
  
  function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];
    document.getElementById("quoteText").textContent = currentQuote;
  }
  
  function saveQuote() {
    if (!currentQuote) return;
  
    let saved = JSON.parse(localStorage.getItem("savedQuotes")) || [];
  
    if (!saved.includes(currentQuote)) {
      saved.push(currentQuote);
      localStorage.setItem("savedQuotes", JSON.stringify(saved));
      displaySaved();
    }
  }
  
  function displaySaved() {
    const saved = JSON.parse(localStorage.getItem("savedQuotes")) || [];
    const list = document.getElementById("savedList");
    list.innerHTML = "";
  
    saved.forEach((q, i) => {
      let li = document.createElement("li");
      li.textContent = q;
      list.appendChild(li);
    });
  }
  
  // Load saved quotes on page load
  window.onload = displaySaved;
  