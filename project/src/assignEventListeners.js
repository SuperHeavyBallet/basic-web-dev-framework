export default function assignEventListeners(menuIcon, menuElements, dropdownContent, displayClass,hideClass){

const menuButton = document.querySelector(menuIcon );
const menuElement = document.querySelectorAll(menuElements);
const menuButtonArray = [menuButton, ...menuElement];
const menuItems = document.querySelector(dropdownContent);
let myTimeout;

function isTouchDevice(){
    return "ontouchstart" in window 
    || navigator.maxTouchPoints > 0 
    || navigator.msMaxTouchPoints > 0;
}

function hasMouse(){
    return window.matchMedia("(pointer:fine)").matches;
}

function myStopFunction(){
    clearTimeout(myTimeout);
}

function hideMenu(){
    menuItems.classList.remove(displayClass);
    menuItems.classList.add(hideClass);
}

function forTouchScreen()
{
    menuButton.addEventListener("click", () =>
    {
        if (menuItems.classList.contains(hideClass))
        {
            menuItems.classList.remove(hideClass);
            menuItems.classList.add(displayClass);
        }
        else if (menuItems.classList.contains(displayClass))
        {
            menuItems.classList.remove(displayClass);
            menuItems.classList.add(hideClass);
        }
    });
}

function forMouse()
{
    

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

if (isTouchDevice()){
    console.log("Touch Device");
    forTouchScreen();
}
else if (hasMouse())
{
    console.log("This is a Desktop device with a mouse.");
    forMouse();
}
else
{
    console.log("Device Type is unknown");
    forMouse();
}
















}