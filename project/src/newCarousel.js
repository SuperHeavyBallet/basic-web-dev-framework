export default function newCarousel()
{




    let myTimeout;

    function myStopFunction()
    {
        clearTimeout(myTimeout);
    }

    function autoSwitch(indexShift)
    {
        const slides = Array.from(document.querySelectorAll(".slide"));
        const circles = Array.from(document.querySelectorAll(".circle"));

        for (let i = 0; i < slides.length; i+=1)
        {
            slides[i].id = (`img-${  i.toString()}`);
            circles[i].id = (`circle-${  i.toString()}`);
        }



        const activeSlide = slides.find(slide => slide.getAttribute("data-active") === "true");
        const activeCircle = circles.find(circle => circle.getAttribute("data-active") === "true");

        if (!activeSlide || !activeCircle)
        {
            slides[0].setAttribute("data-active", "true");
            circles[0].setAttribute("data-active", "true");
   
        }
        else
        {


            let newIndex = slides.indexOf(activeSlide) + indexShift;
            let newCircleIndex = circles.indexOf(activeCircle) + indexShift;
            
           

            if (newIndex >= slides.length)
            {
                newIndex = 0;
                newCircleIndex = 0;
            }

            else if (newIndex < 0)
            {
                newIndex = slides.length - 1;
                newCircleIndex = circles.length - 1;
            }

           
        
            slides[newIndex].setAttribute("data-active", "true");
            delete activeSlide.dataset.active;

            circles[newCircleIndex].setAttribute("data-active", "true");
            delete activeCircle.dataset.active;
        }
     


        

        myStopFunction();

        myTimeout = setTimeout(() => 
        {
            autoSwitch(1);
        }, 5000);
        
    }

    autoSwitch(1);


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

    

    function clickedCircle(i, slides, circles)
    {
        myStopFunction();
            const activeSlide = slides.find(slide => slide.getAttribute("data-active") === "true");
            const activeCircle = circles.find(circle => circle.getAttribute("data-active") === "true");

            delete activeSlide.dataset.active;
            delete activeCircle.dataset.active;

            console.log(slides[i]);
            slides[i].setAttribute("data-active", "true");
            circles[i].setAttribute("data-active", "true");
            
            myTimeout = setTimeout(() => 
        {
            autoSwitch(1);
        }, 5000);
    }

    const slides = Array.from(document.querySelectorAll(".slide"));
    const circles = Array.from(document.querySelectorAll(".circle"));

    for (let i = 0; i < circles.length; i += 1)
    {
        circles[i].addEventListener(("click"), () => 
        {
            
            clickedCircle(i, slides, circles);

        });
            
       
    }
}