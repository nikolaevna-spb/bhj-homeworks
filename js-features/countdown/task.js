const elementTimer = document.getElementById("timer");
    const setTimer = function() {
        elementTimer.textContent -= 1;
        if (elementTimer.textContent === "0") {
            alert("Вы победили в конкурсе!");
            clearInterval(intervalId);
        }
    }

const intervalId = setInterval(setTimer, 1000);