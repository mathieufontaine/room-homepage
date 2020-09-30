// slider

let prevBtn = document.querySelectorAll(".slider-prev");
let nextBtn = document.querySelectorAll(".slider-next");

let sliderImg = document.querySelectorAll(
  ".showcase-img .desktop .slider-item"
);
let sliderImgMobile = document.querySelectorAll(
  ".showcase-img .mobile .slider-item"
);
let sliderContent = document.querySelectorAll(".showcase-content .slider-item");
let sliderLength = sliderContent.length;

let counter = 0;

function nextSlide() {
  sliderImg[counter].classList.remove("active");
  sliderImgMobile[counter].classList.remove("active");
  sliderContent[counter].classList.remove("active");
  counter++;

  if (counter >= sliderLength) {
    counter = 0;
  }

  sliderImg[counter].classList.add("active");
  sliderImgMobile[counter].classList.add("active");
  sliderContent[counter].classList.add("active");
}

function prevSlide() {
  sliderImg[counter].classList.remove("active");
  sliderImgMobile[counter].classList.remove("active");
  sliderContent[counter].classList.remove("active");
  counter--;

  if (counter < 0) {
    counter = sliderLength - 1;
  }

  sliderImg[counter].classList.add("active");
  sliderImgMobile[counter].classList.add("active");
  sliderContent[counter].classList.add("active");
}

sliderImg[counter].classList.add("active");
sliderImgMobile[counter].classList.add("active");
sliderContent[counter].classList.add("active");

nextBtn.forEach(btn => btn.addEventListener("click", nextSlide));
prevBtn.forEach(btn => btn.addEventListener("click", prevSlide));

// menu toggler

const hamburger = document.querySelector(".menu svg");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const main = document.querySelector("main");
const overlay = document.querySelector("#overlay");

hamburger.addEventListener("click", () => {
  menu.classList.add("hide-mobile");
  navbar.classList.remove("hide-mobile");
  document.getElementById("overlay").style.display = "block";
});

close.addEventListener("click", () => {
  navbar.classList.add("hide-mobile");
  menu.classList.remove("hide-mobile");
  main.classList.remove("overlay");
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  navbar.classList.add("hide-mobile");
  menu.classList.remove("hide-mobile");
  main.classList.remove("overlay");
  overlay.style.display = "none";
});
