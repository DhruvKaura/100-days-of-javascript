# 🎨 Day 3 – Random Hex Color Generator

This project generates random colors in **hexadecimal format** (like `#A1B2C3`) every time you click the **"Generate Color"** button.  
It also changes the background color of the page to the generated color dynamically.

---
![gif](https://raw.githubusercontent.com/DhruvKaura/100-days-of-javascript/refs/heads/main/assets/colorflipper.gif)
## 🧠 How It Works

The key part of the project is the `randomHexColor()` function, which creates a random color code using hexadecimal digits (`0-9` and `A-F`).

### Function Explanation

```js
function randomHexColor() {
  const hex = "0123456789ABCDEF"; // all possible hex digits
  let color = "#"; // color starts with #
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]; 
    // Math.random() gives a random number between 0–1
    // Multiplying by 16 gives range 0–15
    // Math.floor() converts it to an integer
    // Then we pick the corresponding character from 'hex'
  }
  return color; // final color code like "#3FA2D1"
}
