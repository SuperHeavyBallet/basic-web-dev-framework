export default function assignEventListeners(){

const menuButton = document.querySelector(".menu-icon");
console.log(menuButton);
const menuItems = document.querySelector(".menu-items");
let menuShown = false;

menuButton.addEventListener("click", () => {

    if (menuShown === false)
    {
        menuShown = true;
        menuItems.classList.remove("menu-items-hidden");
        menuItems.classList.add("menu-items-display");

    }
    else if (menuShown === true)
    {
        menuShown = false;
        menuItems.classList.remove("menu-items-display");
        menuItems.classList.add("menu-items-hidden");
    }
})
}