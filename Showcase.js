var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}





var slideIndexes = 1;
showSlide(slideIndexes);

function plusSlidess(n) {
  showSlide(slideIndexes += n);
}

function currentSlide(n) {
  showSlide(slideIndexes = n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexes = 1}    
  if (n < 1) {slideIndexes = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexes-1].style.display = "block";  
  dots[slideIndexes-1].className += " active";
}

















