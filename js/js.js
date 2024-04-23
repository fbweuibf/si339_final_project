xwindow.onscroll = function() {
	make_sticky()
  };
  
  var navbar = document.querySelector("nav");
  var sticky = navbar.offsetTop;
  
  function make_sticky() {
	if (window.scrollY >= sticky + 5) {
	  navbar.classList.add("sticky")
	}
	else {
	  navbar.classList.remove("sticky");
	}
  }


<script>

var slideIndices = [1, 1, 1]; 
var carouselClass = "carousel"; 

function setupCarousels() {
    // Initialize all carousels
    var carousels = document.getElementsByClassName(carouselClass);
    for (var i = 0; i < carousels.length; i++) {
        showSlides(1, i); // Set the first slide to display for each carousel
    }
}

function plusSlides(n, carouselNumber) {
    // Change slide by n slides forward/backward in carouselNumber
    showSlides(slideIndices[carouselNumber] += n, carouselNumber);
}

function showSlides(n, carouselNumber) {
    var i;
    var slides = document.querySelectorAll("." + carouselClass + "[data-carousel='" + carouselNumber + "'] .slide");
    if (n > slides.length) { slideIndices[carouselNumber] = 1 }
    if (n < 1) { slideIndices[carouselNumber] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndices[carouselNumber] - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", setupCarousels);
</script>
