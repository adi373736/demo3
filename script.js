document.addEventListener('DOMContentLoaded', function () {
    // Get all images with the class 'image-item'
    const images = document.querySelectorAll('.image-item');

    // Loop through each image and add a delay based on its data-index
    images.forEach((image, index) => {
        setTimeout(() => {
            image.style.opacity = '1';
        }, index * 1000); // Adjust the delay (1s = 1000ms) as needed
    });
});
