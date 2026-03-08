const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const bgImage = document.createElement("img");
document.body.appendChild(bgImage);

function changeBackground() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  bgImage.src = `IMG/${chosenImage}`;
}

changeBackground();

const shuffleButton = document.querySelector("#shuffle-bg");
shuffleButton.addEventListener("click", changeBackground);