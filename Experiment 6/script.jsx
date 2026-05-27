const heading = document.querySelector("#mainHeading");
const paragraph = document.querySelector("#paragraph");
const input = document.querySelector("#userInput");
let fontSize = 16;

document.querySelector("#changeTextBtn").addEventListener("click", () => {
  if (input.value.trim()) {
    heading.textContent = input.value;
  }
});

document.querySelector("#bgColorBtn").addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

document.querySelector("#fontSizeBtn").addEventListener("click", () => {
  fontSize += 2;
  paragraph.style.fontSize = `${fontSize}px`;
});

document.querySelector("#toggleBtn").addEventListener("click", () => {
  paragraph.style.display = (paragraph.style.display === "none") ? "block" : "none";
});

document.querySelector("#resetBtn").addEventListener("click", () => {
  heading.textContent = "Welcome to JavaScript Lab";
  paragraph.style.display = "block";
  paragraph.style.fontSize = "16px";
  document.body.style.backgroundColor = "#f4f4f4";
  input.value = "";
  fontSize = 16;
});
