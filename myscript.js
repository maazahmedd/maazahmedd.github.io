// Note: Some part of the code was inspired by W3Schools


// setting the initial slide index to be 1 (since it starts from the first slide)
var slide_index = 1;
// initially calling the showSlides function (defined below)
showSlides(slide_index);

// defining the plus_slides function called upon clicking in bts.html
function plus_slides(n) {
  showSlides(slide_index += n);
}

// defining the current_slide function called upon clicking dots in bts.html
function current_slide(n) {
  showSlides(slide_index = n);
}

// defining the show slides functiom
function showSlides(n) {
  var i;

  // getting an array containing slides and dots using query
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slide_index = 1} // if going beyond the last slide, go back to 1st slide
  if (n < 1) {slide_index = slides.length} // if going left to the 1st slide, wrap and go back to last slide
  
  // setting display of all slides to none 
  // because only display of current slide will be not none (line 43) 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  // removing active from the classname of all dots
  // because only the current dot will have active in its class
  // this is done to use properties which are only for the active dot
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slide_index-1].style.display = "block"; //display of current slide set to block
  dots[slide_index-1].className += " active"; // "active added" to classname of current dot
}