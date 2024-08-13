let bulbContainer = document.getElementById("bulbs");
let colors = [
  "#FF0000", // Bright Red
  "#FF6600", // Bright Orange
  "#FFFF00", // Bright Yellow
  "#00FF00", // Bright Green
  "#00FFFF", // Bright Cyan
  "#0000FF", // Bright Blue
  "#FF00FF", // Bright Magenta
  "#FF1493", // Bright Pink
  "#FFD700", // Bright Gold
  "#7FFF00", // Bright Chartreuse
  "#FF4500", // Bright Orange Red
  "#FF69B4", // Bright Hot Pink
  "#ADFF2F", // Bright Green Yellow
  "#00FF7F", // Bright Spring Green
  "#40E0D0", // Bright Turquoise
  "#1E90FF", // Bright Dodger Blue
  "#FF6347", // Bright Tomato
  "#FFA500", // Bright Orange
  "#DA70D6", // Bright Orchid
  "#8A2BE2", // Bright Blue Violet
];

function startFunction() {
  bulbContainer.innerHTML = "";
  let numberofrows = document.getElementById("numberofRows").value;
  bulbContainer.style.background = "#FFF";
  for (let i = 0; i < numberofrows; i++) {
    let bulbRow = document.createElement("div");
    bulbRow.id = `bulbrow${i}`;
    bulbRow.className = "bulbRow";
    let j = 1;
    do {
      let bulb = document.createElement("div");
      bulb.className = "bulb";
      bulbRow.appendChild(bulb);
      j += 1;
    } while (j < i + 2);
    bulbContainer.appendChild(bulbRow);
  }
}
let i = 0;
let timerId;
function runningLights() {
  let delay = document.getElementById("timeOfDelay").value;
  let numberofrows = document.getElementById("numberofRows").value;
  if (delay == 0) {
    alert("Enter delay");
  } else {
  document.querySelector(".start").style.display ="none";
    let j;
    timerId = null;
    timerId = setInterval(() => {
      if (i == 0) {
        j = numberofrows - 1;
      } else {
        j = i - 1;
      }

      let bulbRow = document.getElementById(`bulbrow${i}`);
      let bulbs = bulbRow.querySelectorAll(".bulb");
      bulbs.forEach((bulb) => {
        bulb.style.background = colors[0];
        bulb.style.boxShadow = `0px 4px 10px ${colors[0]}`;
        colors.sort((a, b) => 0.5 - Math.random());
      });
      let previousBulbRow = document.getElementById(`bulbrow${j}`);
      let previousBulbs = previousBulbRow.querySelectorAll(".bulb");
      previousBulbs.forEach((bulb) => {
        bulb.style.background = "#f5f1f1";
        bulb.style.boxShadow = "none";
      });
      if (i < numberofrows - 1) {
        i++;
      } else {
        i = 0;
      }
    }, delay);
    console.log(`running TImer id ${timerId}`);
    removeEventListener("")
  }
}
document
  .getElementById("numberofRows")
  .addEventListener("input", startFunction);
document.querySelector(".start").addEventListener("click", runningLights);
document.querySelector(".stop").addEventListener("click", () => {
  console.log(`xlosing timer id ${timerId}`);
  document.querySelector(".start").style.display ="block";
  clearInterval(timerId);
  console.log(`closed timer id ${timerId}`);
});
