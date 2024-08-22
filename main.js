let slideImages = Array.from(document.querySelectorAll("main img"));
let bullets = Array.from(document.querySelectorAll(".bullet span"));
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let current = 1;

previous.onclick = previousImage;
next.onclick = nextImage;

function previousImage() {
  if (current > 1) {
    current--;
    updateImage();
  }
}
function nextImage() {
  if (current < slideImages.length) {
    current++;
    updateImage();
  }
}

function updateImage() {
  removeAll();
  slideImages[current - 1].classList.add("active");
  bullets[current - 1].classList.add("active");

  previous.classList.toggle("disable", current === 1);
  next.classList.toggle("disable", current === slideImages.length);
}

bullets.forEach(function (bullet, index) {
  bullet.onclick = function () {
    current = index + 1;
    updateImage();
  };
});

function removeAll() {
  slideImages.forEach(function (img) {
    img.classList.remove("active");
  });

  bullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}

updateImage();

document.addEventListener("DOMContentLoaded", function () {
  let bar = document.querySelector(".bar");
  let closed = document.querySelector(".close");
  let navBar = document.querySelector("nav");

  bar.addEventListener("click", () => {
    bar.classList.toggle("hidden");
    closed.classList.toggle("hidden");
    navBar.classList.toggle("hidden");
  });
  closed.addEventListener("click", () => {
    bar.classList.toggle("hidden");
    closed.classList.toggle("hidden");
    navBar.classList.toggle("hidden");
  });
});
