
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach((carousel, index) => {
        let currentSlide = 1;
        const slides = carousel.querySelectorAll('.slide');

        // Show the first slide initially
        showSlides(currentSlide, slides);

        // Set event listeners for navigation buttons
        carousel.querySelector('.prev').addEventListener('click', () => {
            currentSlide = changeSlide(currentSlide - 1, slides);
        });

        carousel.querySelector('.next').addEventListener('click', () => {
            currentSlide = changeSlide(currentSlide + 1, slides);
        });

        function changeSlide(n, slides) {
            // If n is out of bounds, wrap it around
            if (n > slides.length) n = 1;
            if (n < 1) n = slides.length;
            showSlides(n, slides);
            return n;
        }

        function showSlides(n, slides) {
            slides.forEach(slide => {
                slide.style.display = 'none';
            });
            slides[n - 1].style.display = 'block';
        }
    });
});
