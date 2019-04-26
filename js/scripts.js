function validate(){
    var inputCode = $("#zip").val();
    //get values of the zip code
    if ((inputCode.length != 5) || isNaN(Number(inputCode))){
        alert("Zip Code is not valid. It has to be 5 digit with only numbers.");
        //return false if the value is not as expected, 5 digits in this case
        return false;
    }
}

var slideIndex = 1;



function plusSlides(n) {
    'use strict';
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    'use strict';
  showSlides(slideIndex = n);
}

function showSlides(n) {
  'use strict';
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
      slideIndex = 1;
  }    
  if (n < 1) {
      slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
