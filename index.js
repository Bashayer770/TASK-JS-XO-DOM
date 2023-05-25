// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");
let turn = 1;

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.

  let currentPlayer = "X";

  // currentPlayer = currentPlayer === 2 % "X" ? "O" : "X";
  turn % 2 === 0 ? (currentPlayer = "O") : (currentPlayer = "X");
  turn++;
  console.log(turn);

  //function game() {}

  //function cellSelected(cell, index) {}
  //function updateCell() {}
  fillButton(index, currentPlayer);

  function checkWinner(player) {
    const winners = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [3, 5, 7],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ];
    return winners.some((x) => {
      const [a, b, c] = x;
      const buttonA = document.getElementById(a).innerHTML;
      const buttonB = document.getElementById(b).innerHTML;
      const buttonC = document.getElementById(c).innerHTML;

      return buttonA === player && buttonB === player && buttonC === player;
    });
  }
  if (checkWinner(currentPlayer)) {
    winningAlert(currentPlayer);
    return;
  }

  function restartGame() {
    //for()
  }
  /**
   * (Optional) It's always a good idea to make a function for every single purpose.
   */
  // function checkWinner
  // function restartGame
}
