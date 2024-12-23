const value = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const items = [...document.querySelectorAll(".dropdown__item")];

value.addEventListener("click", () => {
    list.classList.toggle("dropdown__list_active");
    return false;
});

items.forEach((item) => {
    item.addEventListener("click", () => {
        value.textContent = item.textContent;
        list.classList.remove("dropdown__list_active");
        return false;
    });
});