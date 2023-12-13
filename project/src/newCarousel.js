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
        const circles = Array.from(document.querySelectorAll(".circle"));

        for (let i = 0; i < slides.length; i+=1)
        {
            slides[i].id = (`img-${  i.toString()}`);
            circles[i].id = (`circle-${  i.toString()}`);
        }


        const activeSlide = slides.find(slide => slide.dataset.active !== undefined);
        let newIndex = [...slides].indexOf(activeSlide) + 1;

        

        const activeCircle = circles.find(circle => circle.dataset.active !== undefined);
        let newCircleIndex = [...circles].indexOf(activeCircle) + 1;


        if (newIndex >= slides.length)
        {
            newIndex = 0;
            newCircleIndex = 0;

        }


        slides[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

        circles[newCircleIndex].dataset.active = true;
        delete activeCircle.dataset.active;

        myStopFunction();
        myTimeout = setTimeout(autoSwitch, 5000);
  
    }

    autoSwitch();
}