const divs = [...document.querySelectorAll(".reveal")];

function block(element) {
    const { top, bottom } = element.getBoundingClientRect();
    if (bottom < 0) {
        return false;
    }

    if (top > window.innerHeight) {
        return false;
    }
    element.classList.add("reveal_active");
}

divs.forEach((div) => {
    document.addEventListener("scroll", 
        function () {
            block(div);
    });
})