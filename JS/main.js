"use strict";
// ------------------------ [ OPEN Navigation menu ]


let close = document.querySelector('.close').onclick = tapClose;


function tapClose() {


        let tap = document.querySelector('.links');
        
            if ( tap.className === 'links') {
                tap.className += ' tap';
            } else {
                tap.className = 'links';
                
            }

            myFunction(this);
}

// -----------------------[ MENU open / close animation ]

function myFunction(x) {
    x.classList.toggle("change");
  }

// ---------------------- [ SLIDER ] 

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





