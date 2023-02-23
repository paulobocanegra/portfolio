let buyers = document.getElementById("buyers")
let community = document.getElementById("community")
let aboutSection = document.getElementById("about")





// GLOBAL FUNCTIONS - CAROUSEL 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//About Picture rounding with scrolling

// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     let flight = document.getElementById("about-image")
//     if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
//         flight.style.borderRadius = "50%";
//     } else {
//         document.getElementById("about-image").style.borderRadius = "0%";
//     }
// }

// let typeIn = document.getElementById("type-in")
// let words = ["Software Developer", "Pilot", "Problem Solver", ]
// let word = ""


// function typer(){
//     let count = 0;
//     let demo = "AdventureKidpassword";
//     typeIn.innerHTML = ""

// }