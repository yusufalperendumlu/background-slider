const body = document.body;
const slides =document.querySelectorAll(".slide");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const text = document.getElementById("text");
const btn = document.querySelectorAll(".arrow");

let activeSlide = 0;



rightButton.addEventListener("click" , () => {
    activeSlide++ ;

    if(activeSlide > slides.length - 1)
    {
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
})

leftButton.addEventListener("click" , () => {
    activeSlide--;

    if(activeSlide < 0)
    {
        activeSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
})


function setBgToBody() {

    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {

    slides.forEach((slide) => slide.classList.remove("active"));

    slides[activeSlide].classList.add("active");
    text.classList.add("act");
}

btn.addEventListener("click" , () => {
    btn.forEach((arrow) => text.classList.toggle("act"));

    setBgToBody();
    setActiveSlide();
})