// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error))

// fetch('https://restcountries.com/v3.1/name/united')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error))
// Fetch Advice API data
async function fetchAdvice() {
    try {
      const response = await fetch("http://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error("Failed to fetch advice.");
      }
      const data = await response.json();
      displayAdvice(data.slip);
    } catch (error) {
      console.error("Error fetching advice:", error);
      document.getElementById("adviceText").textContent = "Failed to fetch advice. Try again!";
    }
  }
  
  function displayAdvice(advice) {
    const adviceText = document.getElementById("adviceText");
    adviceText.textContent = `"${advice.advice}"`;
  }
  
  // Fetch Quote API data
  async function fetchQuote() {
    try {
      const response = await fetch("http://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Failed to fetch quote.");
      }
      const data = await response.json();
      displayQuote(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
      document.getElementById("quoteText").textContent = "Failed to fetch quote. Try again!";
    }
  }
  
  function displayQuote(quote) {
    const quoteText = document.getElementById("quoteText");
    const quoteAuthor = document.getElementById("quoteAuthor");
    quoteText.textContent = `"${quote.content}"`;
    quoteAuthor.textContent = `— ${quote.author}`;
  }
  
  // Automatically fetch new quotes every 10 seconds
  function startQuoteUpdates() {
    fetchQuote(); // Fetch the first quote immediately
    setInterval(fetchQuote, 10000); // Fetch a new quote every 10 seconds
  }
  
  // Initialize the page
  function main() {
    fetchAdvice(); // Fetch initial advice
    startQuoteUpdates(); // Start fetching quotes
  }
  
  main();
  // fetch('http://dog-api.kinduff.com')
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error))