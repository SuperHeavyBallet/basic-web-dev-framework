export default function assignEventListeners(){

const menuButton = document.querySelectorAll(".menu-icon");
const menuButtonArray = [...menuButton];
const menuItems = document.querySelector(".dropdown-content");
let myTimeout;

function myStopFunction(){
    clearTimeout(myTimeout);
}

function hideMenu(){
    menuItems.classList.remove("dropdown-content-display");
    menuItems.classList.add("dropdown-content-hidden");
}





menuButtonArray.forEach((element) =>
{
    element.addEventListener("mousemove", () => {

        menuItems.classList.remove("dropdown-content-hidden");
        menuItems.classList.add("dropdown-content-display");
        myStopFunction();


    });

    element.addEventListener("mouseout", () => {

        
        myTimeout = setTimeout(hideMenu, 350);
    });



});







}