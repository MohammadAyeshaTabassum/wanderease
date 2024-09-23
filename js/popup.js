// Get the popup element, close button, and popup image
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');
const popupImage = document.getElementById('popupImage');

// Close the popup when the user clicks on the close button
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';  // Hide the popup
});

// Redirect to the #package section when the image is clicked
popupImage.addEventListener('click', function() {
    // Hide the popup
    popup.style.display = 'none';  
    
    // Navigate to the section with id 'package'
    window.location.hash = '#package';
});
