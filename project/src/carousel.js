export default function carouselControl(){

    let myTimeout;

    function myStopFunction(){
        clearTimeout(myTimeout);
    }



    function autoSwitch()
    {

        const slides = Array.from(document.querySelectorAll(".slide"));
        
        const activeSlide = slides.find(slide => slide.dataset.active !== undefined);

        let newIndex = [...slides].indexOf(activeSlide) + 1;

        if (newIndex >= slides.length)
        {
            newIndex = 0;
        }

        slides[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

        myStopFunction();
        myTimeout = setTimeout(autoSwitch, 5000);
    }

    const buttons = document.querySelectorAll("[data-carousel-button]");

    

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            myStopFunction();

            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            const slides = document.querySelector("[data-slides]");

            const activeSlide = slides.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(activeSlide) + offset

            if (newIndex < 0) newIndex = slides.children.length -1;
            if (newIndex >= slides.children.length) newIndex = 0;

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;

            myTimeout = setTimeout(autoSwitch, 5000);

            
        })
    })

    

    

    autoSwitch();

    


}

