let rand, attempts;

function startGame() {
  const max = parseInt(document.getElementById("maxNumber").value);
  if (!max || max <= 1) {
    alert("Please enter a valid number greater than 1");
    return;
  }

  rand = Math.floor(Math.random() * max) + 1;
  attempts = 0;
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";

  console.log("Random Number:", rand); // For testing
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (isNaN(guess)) {
    document.getElementById("message").textContent = "❌ Please enter a valid number.";
    return;
  }

  if (guess === rand) {
    document.getElementById("message").textContent = 
      `🎉 Correct! The number was ${rand}. You guessed it in ${attempts} attempts.`;
  } else if (guess < rand) {
    document.getElementById("message").textContent = "📉 Too small! Try again.";
  } else {
    document.getElementById("message").textContent = "📈 Too large! Try again.";
  }
}