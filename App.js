document.addEventListener('DOMContentLoaded', (event) => {
    const successContainer = document.getElementById('success-container');
    setTimeout(() => {
        successContainer.classList.add('fade-out');
    }, 4000);  // Start fade-out after 4 seconds
});
