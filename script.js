// changing footer heart on click

const colorChange = (event) => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  event.target.style.color = randomColor;
};

const heart = document.getElementById("heart");
heart.onclick = colorChange;
