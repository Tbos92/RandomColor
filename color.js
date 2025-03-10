const randomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let L = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  return [r, g, b, L];
};

const colorChange = document.getElementById("changeBtn");
const textChange = document.getElementById("rgbValue");

colorChange.addEventListener("click", function () {
  const [r, g, b, L] = randomColor();
  const resultColor = `rgb(${r}, ${g}, ${b})`;

  document.body.style.backgroundColor = resultColor;

  textChange.innerText = resultColor;

  textChange.style.color = L <= 0.5 ? "white" : "black";
});
