
// Fetch Advice API data
async function fetchAdvice() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
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
  // Updates the DOM to display the fetched piece of advice.
  function displayAdvice(advice) {
    const adviceText = document.getElementById("adviceText");
    adviceText.textContent = `"${advice.advice}"`;
  }
  
  // Fetch Quote API data
  async function fetchQuote() {
    try {
      const response = await fetch("http://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Failed to fetch quote. Two eyes, one mouth");
      }
      const data = await response.json();
      displayQuote(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
      document.getElementById("quoteText").textContent = "Failed to fetch quote. Enjoy the Silence for a Moment!";
    }
  }
  // Updates the DOM to display the fetched quote and its author.
  function displayQuote(quote) {
    const quoteText = document.getElementById("quoteText");
    const quoteAuthor = document.getElementById("quoteAuthor");
    quoteText.textContent = `"${quote.content}"`;
    quoteAuthor.textContent = `— ${quote.author}`;
  }
  
  // Automatically fetch new quotes every 10 seconds and just to show I can create and use an arrow function correctly
  const startQuoteUpdates = () => {
    fetchQuote(); // Fetch the first quote immediately
    setInterval(fetchQuote, 10000); // Fetch a new quote every 10 seconds
  };
  
  
  // Initialize the page
  function main() {
    fetchAdvice(); // Fetch initial advice
    startQuoteUpdates(); // Start fetching quotes
  }
  
  main();
