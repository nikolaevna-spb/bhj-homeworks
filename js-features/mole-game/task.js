const deadMole = document.getElementById("dead");
const lostMole = document.getElementById("lost");

for (let i = 1; i < 10; i++) {
  const hole = document.getElementById("hole" + i);
  hole.onclick = function () {
    if (hole.classList.contains("hole_has-mole")) {
      deadMole.textContent = +deadMole.textContent + 1;
    } else {
      lostMole.textContent = +lostMole.textContent + 1;
    }

    if (+deadMole.textContent === 10) {
      alert("You Win!");
    }

    if (+lostMole.textContent === 5) {
      alert("Game over!");
    }

    if (+deadMole.textContent > 9 || +lostMole.textContent > 4) {
      deadMole.textContent === 0;
      lostMole.textContent === 0;
    }
  };
}