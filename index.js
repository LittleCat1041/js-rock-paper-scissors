const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playgame(playerChoices) {
  // สุ่มเลข 0-2 เพื่อเลือก Move จาก Array 'choices' จำลองการตัดสินใจของคอมพิวเตอร์
  const computerChoices = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoices === computerChoices) {
    result = "It's a TIE!";
  } else {
    switch (playerChoices) {
      // ใช้ Ternary Operator แทน if-else เพื่อเขียนเงื่อนไขแพ้-ชนะให้สั้นและอ่านง่าย
      case "rock":
        result = computerChoices === "scissors" ? "You WIN!" : "You LOSE!";
        break;
      case "paper":
        result = computerChoices === "rock" ? "You WIN!" : "You LOSE!";
        break;
      case "scissors":
        result = computerChoices === "paper" ? "You WIN!" : "You LOSE!";
        break;
    }
  }
  playerDisplay.textContent = `Player: ${playerChoices}`;
  computerDisplay.textContent = `Computer: ${computerChoices}`;
  resultDisplay.textContent = result;

  // ลบ Class สีเก่าออกก่อน เพื่อป้องกันการแสดงผลสีซ้อนกันหรือผิดพลาดในรอบถัดไป
  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "You WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}
