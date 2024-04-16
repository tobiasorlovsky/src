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
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";

}


function readMoreLess(dotsId, btnId, moreText) {
    var dots = document.getElementById(dotsId);
    var btnText = document.getElementById(btnId);
    var width = window.innerWidth;

    if (width >= 1071) {
        // Rozlíšenie 1071px a viac
        dots.style.display = 'inline';
        btnText.innerHTML = "Zobraziť menej";
    } else {
        // Rozlíšenie pod 1070px
        if (dots.style.display === "none" || dots.style.display === "") {
            dots.style.display = "block";
            btnText.innerHTML = "Zobraziť menej";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Zobraziť viac";
        }
    }
}




function currentSlide(n) {
    showSlides(slideIndex = n);
}