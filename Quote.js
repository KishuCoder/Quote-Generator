
let currentQuote = "";
// Array of quotes and authors
const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }
];

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // Display the random quote and author
  document.getElementById("quote").textContent = `"${quote.text}"`;
  document.getElementById("author").textContent = `- ${quote.author}`;

    // Save the quote for sharing later
    currentQuote = `"${quote.text}" - ${quote.author}`;

    // Show the Share button
    document.getElementById("shareButton").style.display = "inline-block";
}

function sharetwitte() {
    const twitte = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentQuote)}`;
    window.open(twitte,"_black");
}

function Instagram() {
    const Instagram = `https://www.instagram.com/create/story/?text=${encodeURIComponent(currentQuote)}`;
    window.open(Instagram,"_black");
}

function Facebook() {
    const facebook = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentQuote)}`;
    window.open(facebook,"_black");
}