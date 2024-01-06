// Get the canvas element and its context
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Set the canvas size to the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define some constants
const DOT_COUNT = 100; // Number of dots
const DOT_SIZE = 5; // Size of each dot
const DOT_COLOR = "red"; // Color of each dot
const MIN_SPEED = 0.5; // Minimum speed factor
const MAX_SPEED = 5; // Maximum speed factor
const SPEED_RANGE = MAX_SPEED - MIN_SPEED; // Range of speed factors

// Create an array to store the dots
let dots = [];

// Create a function to generate a random number between min and max
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Create a function to create a dot object
function createDot() {
  // Generate random initial position, direction and duration
  let x = random(0, canvas.width);
  let y = random(0, canvas.height);
  let dx = random(-250, 250);
  let dy = random(-250, 250);
  let duration = random(2, 5);

  // Return the dot object
  return {
    x, // Current x position
    y, // Current y position
    dx, // Horizontal displacement
    dy, // Vertical displacement
    duration, // Animation duration
    speed: 1, // Speed factor
  };
}

// Create a function to draw a dot on the canvas
function drawDot(dot) {
  // Save the current context state
  ctx.save();

  // Set the fill style to the dot color
  ctx.fillStyle = DOT_COLOR;

  // Draw a circle with the dot size and position
  ctx.beginPath();
  ctx.arc(dot.x, dot.y, DOT_SIZE, 0, Math.PI * 2);
  ctx.fill();

  // Restore the context state
  ctx.restore();
}

// Create a function to update a dot's position and speed
function updateDot(dot) {
  // Calculate the progress of the animation based on the duration and speed factor
  let progress = (Date.now() % (dot.duration * 1000)) / (dot.duration * 1000) * dot.speed;

  // Calculate the new position based on the progress and direction
  let x = dot.x + dot.dx * progress;
  let y = dot.y + dot.dy * progress;

  // Wrap the position around the canvas edges
  if (x < 0) x += canvas.width;
  if (x > canvas.width) x -= canvas.width;
  if (y < 0) y += canvas.height;
  if (y > canvas.height) y -= canvas.height;

  // Update the dot's position
  dot.x = x;
  dot.y = y;
}

// Create a function to animate the dots
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Loop through the dots array
  for (let dot of dots) {
    // Update and draw each dot
    updateDot(dot);
    drawDot(dot);
  }

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Create a function to handle the mousemove event
function handleMousemove(event) {
  // Get the cursor position relative to the canvas
  let x = event.clientX - canvas.offsetLeft;
  let y = event.clientY - canvas.offsetTop;

  // Calculate the distance from the center of the canvas
  let distance = Math.sqrt(
    Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
  );

  // Calculate the speed factor based on the distance
  // The closer to the center, the faster the animation
  let speed = MIN_SPEED + (SPEED_RANGE * distance) / (canvas.width / 2);

  // Loop through the dots array
  for (let dot of dots) {
    // Update the speed factor of each dot
    dot.speed = speed;
  }
}

// Create the initial dots
for (let i = 0; i < DOT_COUNT; i++) {
  dots.push(createDot());
}

// Add the mousemove event listener to the canvas
canvas.addEventListener("mousemove", handleMousemove);

// Start the animation
animate();
