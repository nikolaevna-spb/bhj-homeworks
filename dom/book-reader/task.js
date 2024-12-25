const book = document.querySelector(".book");
const fontSize = [...document.querySelectorAll(".font-size")];

const fontSizeSmall = "font-size_small";
const fontSizeBig = "font-size_big";
const fontSizeActive = "font-size_active";

function stopActive(event) {
    event.preventDefault();
  }

fontSize.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        if (index === 0) {
            book.classList.add(fontSizeSmall);
            tab.classList.add(fontSizeActive);
            fontSize[1].classList.remove(fontSizeActive);
            fontSize[2].classList.remove(fontSizeActive)
            book.classList.remove(fontSizeBig);
        } else if (index === 1) {
            book.classList.add("book");
            tab.classList.add(fontSizeActive);
            book.classList.remove(fontSizeSmall);
            book.classList.remove(fontSizeBig);
            fontSize[0].classList.remove(fontSizeActive);
            fontSize[2].classList.remove(fontSizeActive);
        } else {
            book.classList.add(fontSizeBig);
            tab.classList.add(fontSizeActive);
            book.classList.remove(fontSizeSmall);
            fontSize[0].classList.remove(fontSizeActive);
            fontSize[1].classList.remove(fontSizeActive);
        }
        e.preventDefault();
    }, false)
})

