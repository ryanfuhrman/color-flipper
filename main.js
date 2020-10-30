const colorSpan = document.querySelector(".color-span");
const colorBtn = document.querySelector(".color-btn");
const name = document.querySelector(".name");
const hex = document.querySelector(".hex");

let colorType = "name";

const colors = [
  { name: "red", hex: "#FF0000" },
  { name: "orange", hex: "#FFA500" },
  { name: "yellow", hex: "#FFFF00" },
  { name: "green", hex: "#008000" },
  { name: "blue", hex: "#0000FF" },
  { name: "purple", hex: "#800080" },
  { name: "cyan", hex: "#00FFFF" },
  { name: "darkblue", hex: "#0000A0" },
  { name: "lightblue", hex: "#ADD8E6" },
  { name: "lime", hex: "#00FF00" },
  { name: "magenta", hex: "#FF00FF" },
  { name: "silver", hex: "#C0C0C0" },
  { name: "grey", hex: "#808080" },
  { name: "brown", hex: "#A52A2A" },
  { name: "maroon", hex: "#800000" },
  { name: "olive", hex: "#808000" },
];

name.addEventListener("click", () => (colorType = "name"));
hex.addEventListener("click", () => (colorType = "hex"));

colorBtn.addEventListener("click", () => {
  const randomColor =
    colors[Math.floor(Math.random() * colors.length)][colorType];
  console.log(randomColor);
  colorSpan.innerHTML = randomColor;
  document.body.style = `background-color: ${randomColor}`;
});
