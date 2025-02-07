// script.js
document.addEventListener("DOMContentLoaded", function () {
    const courseContainer = document.querySelector(".courses");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const progressBar = document.querySelector(".progress");

    let scrollAmount = 0;
    const scrollStep = 300; // Adjust this for smooth scrolling

    nextButton.addEventListener("click", () => {
        courseContainer.scrollBy({ left: scrollStep, behavior: "smooth" });
        updateProgress(1);
    });

    prevButton.addEventListener("click", () => {
        courseContainer.scrollBy({ left: -scrollStep, behavior: "smooth" });
        updateProgress(-1);
    });

    function updateProgress(direction) {
        scrollAmount += direction * 25;
        if (scrollAmount > 100) scrollAmount = 100;
        if (scrollAmount < 0) scrollAmount = 0;
        progressBar.style.width = `${scrollAmount}%`;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".course-slider");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const progressBar = document.querySelector(".scroll-progress");

    let scrollPosition = 0;
    const scrollStep = 300; 

    rightArrow.addEventListener("click", () => {
        slider.scrollBy({ left: scrollStep, behavior: "smooth" });
        updateProgress(1);
    });

    leftArrow.addEventListener("click", () => {
        slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
        updateProgress(-1);
    });

    function updateProgress(direction) {
        scrollPosition += direction * 25;
        scrollPosition = Math.min(100, Math.max(0, scrollPosition));
        progressBar.style.width = `${scrollPosition}%`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".intern-slider");
    const leftButton = document.querySelector(".left-btn");
    const rightButton = document.querySelector(".right-btn");
    const progressBar = document.querySelector(".progress-fill");

    const scrollAmount = 300; // Amount to scroll on each button click

    // Function to update progress bar
    function updateProgress() {
        const scrollWidth = slider.scrollWidth - slider.clientWidth;
        const scrollLeft = slider.scrollLeft;
        const progress = (scrollLeft / scrollWidth) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Scroll Left Button Click
    leftButton.addEventListener("click", function () {
        slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    // Scroll Right Button Click
    rightButton.addEventListener("click", function () {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    // Update progress bar when scrolling
    slider.addEventListener("scroll", updateProgress);
});
