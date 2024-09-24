document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const cardText = button.previousElementSibling;
        if (cardText.classList.contains('expanded')) {
            cardText.classList.remove('expanded');
            button.textContent = "Read more";
        } else {
            cardText.classList.add('expanded');
            button.textContent = "Show less";
        }
    });
});
