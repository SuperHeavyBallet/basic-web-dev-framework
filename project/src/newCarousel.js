export default function newCarousel()
{
    const imageSlides = document.querySelectorAll(".slide");
    const arrayOfImageSlides = [...imageSlides];

    console.log(arrayOfImageSlides);

    let myTimeout;

    function myStopFunction()
    {
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

    autoSwitch();
}