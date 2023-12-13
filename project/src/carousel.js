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

// 1 const buttons is the two buttons, prev and next in an array

// for each button in that array (prev and next) add the following
// event listener

// const offset is the current button's dataset which will be either prev or next
// if it is next, then the offset = 1
// if it is prev, then the offset = -1

// const slides is the current button's closest relative with the data of carousel,
// then within that relative's scope, search for the closes elemenent with the
// data of 'slides'

// const activeSlide is  a querySelector within that 'data-slide' element
// for the child element currently with 'data-active' assigned to it

// let newIndex is an array of all the children of 'slides' (the image holding list elements)
// choosing the specifc element at the indexOf 'activeSlide', so - picking the
// currently active list element image
// and then from that current element, add the offset value

// So, on clicking, the newIndex will become the currently displayed element
// if the button is next, it will be currentIndex + 1
// if the button is prev, it will be currentIndex -1

// If newIndex is less than 0, for example position 0 was currently shown,
// and prev was clicked - then newIndex is set to the maximal length of
// the children of slides elements -1, so the last element

// If newIndex is greater than the length of the array of slides, for example
// position 3(last element) was currently displayed, and the next button was pressed
// then newIndex is set to 0, so the very first element at the beginning

// The child of slies at the index of the newIndex value now has the
// dataset-active set to true

// The previous current element, stored as activeSlide, now has the
// dataset-active deleted

// In the CSS, the slide elements without dataset-active are set at
// 0 opacity, ie invisible
// While the slide element with dataset-active=true has opacity set to 1
// ie visible
