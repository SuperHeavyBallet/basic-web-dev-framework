export default function imageCarousel()
{

    /// /// /// /// /// /// /// /
    // Timeout Initialization //
    /// /// /// /// /// /// ///

    let myTimeout;
    const waitBetweenSlides = 5000;

    function myStopFunction()
    {
        clearTimeout(myTimeout);
    }


    /// /// /// /// /// /// /// /// /// /// /
    // Updating Active Slides and Circles //
    /// /// /// /// /// /// /// /// /// ///
    
    const slides = Array.from(document.querySelectorAll(".slide"));
    const circles = Array.from(document.querySelectorAll(".circle"));

    function setSlideAndCircleActive(slideIndex)
    {
        const activeSlide = document.querySelector(".slide[data-active=true]");
        const activeCircle = document.querySelector(".circle[data-active=true]");

        activeSlide.removeAttribute("data-active");
        activeCircle.removeAttribute("data-active");

        slides[slideIndex].setAttribute("data-active", "true");
        circles[slideIndex].setAttribute("data-active", "true");

    }


    /// /// /// /// /// /// /// /// //
    // Automatic image progression //
    /// /// /// /// /// /// /// ////
    
    function autoSwitch(indexShift)
    {
        // Get the active slide in the HTML, or if not: Set the index to 0 to avoid errors from none found
        const activeSlideIndex = slides.findIndex(slide => slide.getAttribute("data-active") === "true") || 0;

        // % To Ensure the index loops back around to the start
        const newIndex = (activeSlideIndex + indexShift + slides.length) % slides.length;

        setSlideAndCircleActive(newIndex);
        myStopFunction();

        myTimeout = setTimeout(() => 
        {
            autoSwitch(1);
        }, waitBetweenSlides);
        
    }


    // Set the initial image progression
    autoSwitch(1);


    /// /// /// /// /// /// /// /// /// /// ///
    // Clickable next/previous image buttons /
    /// /// /// /// /// /// /// /// /// /// /

    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    nextButton.addEventListener("click", () =>
    {
        myStopFunction();
        autoSwitch(1);
    }
    );

    prevButton.addEventListener("click", () =>
    {
        myStopFunction();
        autoSwitch(-1);
    }
    );


    /// /// /// /// /// /// /// /// /// /// /// /// ///
    // Clickable Circles to change displayed image ///
    /// /// /// /// /// /// /// /// /// /// /// /// /

    function clickedCircle(i)
    {
        myStopFunction();
        setSlideAndCircleActive(i);
     
        myTimeout = setTimeout(() => 
        {
            autoSwitch(1);
        }, waitBetweenSlides);
    }

    for (let i = 0; i < circles.length; i += 1)
    {
        circles[i].addEventListener(("click"), () => 
        {
            clickedCircle(i);
        });
    }
}