const videoCarousel = document.querySelector('.video-carousel');
const videoCarouselInner = document.querySelector('.video-carousel-inner');
const videos = videoCarouselInner.querySelectorAll('.video');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentVideo = 0;

function updateActiveVideo(index) {
  // Remove the active class from the current video
  videos[currentVideo].classList.remove('active');

  // Update the current video index
  currentVideo = index;

  // Add the active class to the new video
  videos[currentVideo].classList.add('active');
}

// Event listener for the "Prev" button
prevBtn.addEventListener('click', () => {
  const newIndex = (currentVideo - 1 + videos.length) % videos.length;
  updateActiveVideo(newIndex);
});

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
  const newIndex = (currentVideo + 1) % videos.length;
  updateActiveVideo(newIndex);
});
