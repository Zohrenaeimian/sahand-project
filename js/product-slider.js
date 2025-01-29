const slider_items = document.querySelector(".slider-items");
const slider_item = document.querySelectorAll(".slider-item");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function updateSliderPosition() {
  const slideWidth = slider_item[0].clientWidth;
  slider_items.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < slider_item.length - 9) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSliderPosition();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slider_item.length - 9;
  }
  updateSliderPosition();
});

window.addEventListener("resize", updateSliderPosition);
