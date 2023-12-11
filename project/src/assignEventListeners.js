export default function assignEventListeners(menuIcon, menuElements, dropdownContent, displayClass,hideClass){

const menuButton = document.querySelectorAll(menuIcon );
const menuElement = document.querySelectorAll(menuElements);
const menuButtonArray = [...menuButton, ...menuElement];
const menuItems = document.querySelector(dropdownContent);
let myTimeout;

function myStopFunction(){
    clearTimeout(myTimeout);
}

function hideMenu(){
    menuItems.classList.remove(displayClass);
    menuItems.classList.add(hideClass);
}





menuButtonArray.forEach((element) =>
{
    element.addEventListener("mousemove", () => {

        menuItems.classList.remove(hideClass);
        menuItems.classList.add(displayClass);
        myStopFunction();


    });

    element.addEventListener("mouseout", () => {

        
        myTimeout = setTimeout(hideMenu, 300);
    });



});







}