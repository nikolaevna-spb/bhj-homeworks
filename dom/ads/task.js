const spans = [...document.querySelectorAll(".rotator__case")];

function rotation(spans) {
    for (let i = 0; i < spans.length; i++) {
        if (spans[i].classList.contains("rotator__case_active")) {
            spans[i].classList.remove("rotator__case_active");
            nextSpan = spans[i].nextElementSibling;
            if (!nextSpan) {
                spans[0].classList.add("rotator__case_active");
            } else {
                nextSpan.classList.add("rotator__case_active");
                break;
            }
        }
    }
}

setInterval(() => {
    rotation(spans);
}, 1000);