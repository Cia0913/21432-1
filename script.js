let currentIndex = 0;

function updateSection() {
    document.querySelectorAll(".section").forEach((section, index) => {
        section.classList.toggle("active", index === currentIndex);
    });
}

function moveSlide(direction) {
    const gallery = document.querySelector(".gallery-wrapper");
    const totalSlides = gallery.children.length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateSection();
}

updateSection();
