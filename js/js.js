window.onscroll = function() {
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