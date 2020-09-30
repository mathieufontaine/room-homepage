let prevBtn = document.querySelectorAll(".slider-prev");
let nextBtn = document.querySelectorAll(".slider-next");

let sliderImg = document.querySelectorAll(".showcase-img .slider-item");
let sliderContent = document.querySelectorAll(".showcase-content .slider-item");
let sliderLength = sliderImg.length;

let counter = 0;

sliderImg[counter].classList.add("active");
sliderContent[counter].classList.add("active");

prevBtn.forEach(btn =>
  btn.addEventListener("click", () => {
    sliderImg[counter].classList.remove("active");
    sliderContent[counter].classList.remove("active");
    counter--;

    if (counter < 0) {
      counter = sliderLength - 1;
    }

    sliderImg[counter].classList.add("active");
    sliderContent[counter].classList.add("active");
  })
);

nextBtn.forEach(btn =>
  btn.addEventListener("click", () => {
    sliderImg[counter].classList.remove("active");
    sliderContent[counter].classList.remove("active");
    counter++;

    if (counter >= sliderLength) {
      counter = 0;
    }

    sliderImg[counter].classList.add("active");
    sliderContent[counter].classList.add("active");
  })
);
