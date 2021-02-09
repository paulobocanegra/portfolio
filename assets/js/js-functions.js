let buyers = document.getElementById("buyers")
let community = document.getElementById("community")
let aboutSection = document.getElementById("about")


// let flight = document.getElementById("about-image")
// flight.addEventListener("click", () => {
//     flight.innerHTML = `<iframe src="https://giphy.com/embed/9eo6uX7FcxJFjqdfOl" width="480" height="270" class="giphy-embed" id="gif"
//     allowFullScreen></iframe>`
//     flight.style.backgroundImage = "none"
//     aboutSection.appendChild(blocker1)
// })


// function renderBuyerInfo(){
//     let section = document.getElementById("section-swap")
//     section.style.flexDirection = 'row'
//     let alternator = document.getElementById("alternator");
//     let image = document.getElementById("image-swap")
//     image.style.backgroundImage = `url("images/gold.jpg")`
//     image.style.backgroundSize = "cover"
//     buyers.style.backgroundColor = "#115C5B"
//     community.style.backgroundColor = "rgb(28, 27, 27)"
//     alternator.style.borderRadius = "5%"
//     // community.style.opacity = .8
    
//     alternator.innerText = 'Each buy has a buy fee that will go into a prize pool, buy fee is calculated by buy weight. More buy = less fee. Much money. Every 10th buy that buyer gets the WHOLE prize pool (adjustable). Every buy gets a buy bonus that is powered by sell fees (5% sell fee), buy AFTER a sell and get more money.'
// }

// function renderCommunityInfo(){
//     // let communityButton = document.createElement("button")
//     // communityButton.className = "disclaimer-button"
//     // communityButton.innerHTML = "MUCHSUPPORT"
//     let section = document.getElementById("section-swap")
//     section.style.flexDirection = 'row-reverse'
//     let image = document.getElementById("image-swap")
//     image.style.backgroundImage = `url("images/north.jpg")`
//     community.style.backgroundColor = "#115C5B"
//     buyers.style.backgroundColor = "rgb(28, 27, 27)"
//     // buyers.style.opacity = ".8"    
//     let alternator = document.getElementById("alternator");
//     alternator.innerText = 'muchsupport function that awards community members support/shills/etc from .001% to .1% of the dogecity treasury once per day. (dependent on admin approval)'
//     // section.append(communityButton)
// }
// window.addEventListener("DOMContentLoaded",()=>renderBuyerInfo())


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

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let flight = document.getElementById("about-image")
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        flight.style.borderRadius = "50%";
    } else {
        document.getElementById("about-image").style.borderRadius = "0%";
    }
}

// let typeIn = document.getElementById("type-in")
// let words = ["Software Developer", "Pilot", "Problem Solver", ]
// let word = ""


// function typer(){
//     let count = 0;
//     let demo = "AdventureKidpassword";
//     typeIn.innerHTML = ""

// }