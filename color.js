const randomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

const colorChange = document.getElementById("changeBtn");
const textChange = document.getElementById("rgbValue");
colorChange.addEventListener("click", function () {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  rgbValue.innerText = newColor;
});
