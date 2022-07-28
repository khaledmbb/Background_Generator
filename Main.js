let color_1 = document.getElementById("color_1");
let color_2 = document.getElementById("color_2");
let text = document.querySelector(".text_color p");
let body = document.querySelector("body");

if (
  window.localStorage.getItem("color1") &&
  window.localStorage.getItem("color2")
) {
  let color1 = window.localStorage.getItem("color1");
  let color2 = window.localStorage.getItem("color2");
  console.log(color1 + color2);
  text.innerHTML = `${color1} ${color2}`;
  body.style.backgroundImage = `linear-gradient(100deg, ${color1} 21%, ${color2} 84%)`;
  color_1.setAttribute("value", color1);
  color_2.setAttribute("value", color2);
}

function setBackGround() {
  body.style.backgroundImage = `linear-gradient(100deg, ${color_1.value} 21%, ${color_2.value} 84%)`;
  text.innerHTML = `${color_1.value} ${color_2.value}`;
  setInStorage();
}
color_1.addEventListener("input", setBackGround);
color_2.addEventListener("input", setBackGround);

function setInStorage() {
  window.localStorage.setItem("color1", color_1.value);
  window.localStorage.setItem("color2", color_2.value);
}
