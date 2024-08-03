const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
let cookie = true;


image.onclick = function() {
  clickerCounter.textContent = +clickerCounter.textContent + 1;
  if (cookie) {
    image.width += 20;
    cookie = false;
  } else {
    image.width -= 20;
    cookie = true;
  }
}