// 1. Create a List of Favorite Foods
const foods = ["Pasta", "Steak", "Ramen", "Tacos", "Ice Cream"]; // Changed food items
const list = document.getElementById("foodList");

for (let i = 0; i < foods.length; i++) {
  const li = document.createElement("li");
  li.textContent = foods[i];
  list.appendChild(li);
}

// 2. Random Quote Generator
const quotes = [
  "The best is yet to come.", // Changed quotes
  "You are stronger than you think.",
  "Believe you can and you're halfway there.",
  "Small steps lead to big changes.",
  "Every moment is a fresh beginning."
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").textContent = quotes[randomIndex];
}

// 3. Search for a Value in an Array
const names = ["Kayla", "Chris", "Jordan", "Ava", "Miles"];

function searchName() {
  const userInput = document.getElementById("searchBox").value.trim();
  const result = names.includes(userInput);
  document.getElementById("searchResult").textContent = result
    ? `${userInput} is in the list.`
    : `${userInput} was not found.`;
}

// 4. Image Gallery with Next/Prev Buttons
const images = [
  "pexels-magic-k-24827758-6732033.jpg",
  "pexels-alina-chernii-682289345-31861424.jpg",
  "pexels-mistermacri-31208115.jpg"
];
let index = 0;

function showImage() {
  document.getElementById("gallery").src = images[index];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

showImage(); // Initial display

// 5. Change Page Background Color
const colors = ["#F94144", "#F3722C", "#F8961E", "#F9C74F", "#90BE6D"]; // Changed colors to a different palette
let colorIndex = 0;

function changeColor() {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}
