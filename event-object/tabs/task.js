const tabs = [...document.querySelectorAll(".tab")];
const tabsContent = [...document.querySelectorAll(".tab__content")];

const tabActive = "tab_active";
const contentActive = "tab__content_active";

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach(tab => tab.classList.remove(tabActive));
    tabsContent.forEach(content => content.classList.remove(contentActive));

    tab.classList.add(tabActive);
    tabsContent[index].classList.add(contentActive);
  });
});