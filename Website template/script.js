// script.js
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
const startButton = document.getElementById("startButton");
let bikeX = canvas.width / 2;
let bikeY = canvas.height - 50;
let bikeWidth = 50;
let bikeHeight = 30;
let bikeSpeed = 5;
let obstacles = [];
let gameInterval;
let obstacleInterval;
let score = 0;
let isGameRunning = false;

startButton.addEventListener("click", startGame);

function startGame() {
  score = 0;
  scoreElement.textContent = "Score: " + score;
  bikeX = canvas.width / 2;
  bikeY = canvas.height - 50;
  obstacles = [];
  isGameRunning = true;
  startButton.disabled = true;

  gameInterval = setInterval(updateGame, 20);
  obstacleInterval = setInterval(generateObstacles, 1500);
}

function updateGame() {
  if (!isGameRunning) return;

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the bike
  ctx.fillStyle = "#0000FF";
  ctx.fillRect(bikeX, bikeY, bikeWidth, bikeHeight);

  // Move the bike based on key presses
  if (keys["ArrowLeft"] && bikeX > 0) {
    bikeX -= bikeSpeed;
  }
  if (keys["ArrowRight"] && bikeX + bikeWidth < canvas.width) {
    bikeX += bikeSpeed;
  }

  // Update obstacles
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 2; // Speed of obstacles falling

    // Draw obstacles
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(
      obstacles[i].x,
      obstacles[i].y,
      obstacles[i].width,
      obstacles[i].height
    );

    // Check for collision
    if (collisionDetection(obstacles[i])) {
      endGame();
    }

    // Remove obstacles that are off the screen
    if (obstacles[i].y > canvas.height) {
      obstacles.splice(i, 1);
      score++;
      scoreElement.textContent = "Score: " + score;
      i--;
    }
  }
}

function generateObstacles() {
  const obstacleWidth = Math.random() * 100 + 30;
  const obstacleX = Math.random() * (canvas.width - obstacleWidth);
  obstacles.push({
    x: obstacleX,
    y: 0,
    width: obstacleWidth,
    height: 20,
  });
}

function collisionDetection(obstacle) {
  return (
    bikeX < obstacle.x + obstacle.width &&
    bikeX + bikeWidth > obstacle.x &&
    bikeY < obstacle.y + obstacle.height &&
    bikeY + bikeHeight > obstacle.y
  );
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(obstacleInterval);
  isGameRunning = false;
  startButton.disabled = false;
  alert("Game Over! Your score was: " + score);
}

// Handle keypresses
const keys = {};
document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});
document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});
