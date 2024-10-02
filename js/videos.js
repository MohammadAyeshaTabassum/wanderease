document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector('#carouselVideoExample');
  const video1 = document.getElementById('video1'); // Update IDs to match your actual HTML structure
  const video2 = document.getElementById('video2');
  const video3 = document.getElementById('video3');

  // Add ended event listeners to videos
  video1.addEventListener('ended', function () {
    const nextSlide = new bootstrap.Carousel(carousel);
    nextSlide.next();
  });

  video2.addEventListener('ended', function () {
    const nextSlide = new bootstrap.Carousel(carousel);
    nextSlide.next();
  });

  video3.addEventListener('ended', function () {
    const nextSlide = new bootstrap.Carousel(carousel);
    nextSlide.next();
  });
});
