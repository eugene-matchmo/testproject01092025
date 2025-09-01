// Coverflow carousel with auto-spin and navigation dots
window.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector("#carousel-slider .carousel-track");
  const items = Array.from(
    document.querySelectorAll("#carousel-slider .carousel-item")
  );
  const dotsContainer = document.querySelector(
    "#carousel-slider .carousel-dots"
  );
  let currentIndex = 0;
  const itemCount = items.length;

  // Create navigation dots
  dotsContainer.innerHTML = "";
  items.forEach((_, idx) => {
    const dot = document.createElement("div");
    dot.className = "carousel-dot";
    dot.addEventListener("click", () => {
      currentIndex = idx;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(document.querySelectorAll(".carousel-dot"));

  function updateCarousel() {
    items.forEach((item, idx) => {
      item.classList.remove("active", "left", "right");
      item.style.opacity = "0";
      item.style.pointerEvents = "none";
    });
    // Center
    items[currentIndex].classList.add("active");
    items[currentIndex].style.opacity = "1";
    items[currentIndex].style.pointerEvents = "auto";
    // Left
    items[(currentIndex - 1 + itemCount) % itemCount].classList.add("left");
    items[(currentIndex - 1 + itemCount) % itemCount].style.opacity = "0.7";
    items[(currentIndex - 1 + itemCount) % itemCount].style.pointerEvents =
      "auto";
    // Right
    items[(currentIndex + 1) % itemCount].classList.add("right");
    items[(currentIndex + 1) % itemCount].style.opacity = "0.7";
    items[(currentIndex + 1) % itemCount].style.pointerEvents = "auto";
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % itemCount;
    updateCarousel();
  }, 2500);

  updateCarousel();
});
