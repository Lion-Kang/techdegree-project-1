// Choose a random object from the 'quotes' array using randomNumber
function getRandomQuote() {
  var randomObject = quotes[Math.floor(Math.random() * quotes.length)];
  return randomObject;
}


// Use getRandomQuote() & create an empty html string variable
function printQuote() {
  var randomQuote = getRandomQuote();
  var htmlString = '';
  
  // Concatenate htmlString
  htmlString += 
    '<p class="quote">' + randomQuote['quote'] + 
    '<p class="source">' + randomQuote['source'] +
    '</p>';
  
  // Optional 'citation' and 'year' concatenation
  if (randomQuote['citation'] !== undefined) {
    htmlString += '<p class="citation">' + randomQuote['citation'];
  }
  if (randomQuote['year'] !== undefined) {
    htmlString += '<p class="year">' + randomQuote['year'];
    
  } 
  
  // Place htmlString variable in index.html using .innerHTML
  document.getElementById('quote-box').innerHTML = htmlString;
  
  return htmlString; 
}


// Choose random color
function randomColors() {
  var colorRandom = colors[Math.floor(Math.random() * colors.length)];
  return colorRandom;
}



// Change quote via 'Show another quote' button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//Tried changing color via button but Couldn't figure it out 
document.getElementById('loadQuote').addEventListener("click", randomColors, false);

// Automatically click 'Show another quote' buttom every 3 seconds
setInterval(function() {
document.getElementById('loadQuote').click(printQuote());}, 3000);

//Change background color every 3 seconds
setInterval(function() {
  document.body.style.backgroundColor = randomColors();
}, 3000);
