const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", () => {
  const newColor = randomHexColor();
  document.body.style.backgroundColor = newColor;
  color.textContent = newColor;
});

function randomHexColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
