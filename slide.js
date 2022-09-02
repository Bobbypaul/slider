const forward = document.querySelector(".for");
const backward = document.querySelector(".back");
const imagesNl = document.querySelectorAll(".slidee");
const images = Array.from(imagesNl);
let incr = 0;
setInterval(function () {
  incr = incr - 250;
  if (incr < -1000) {
    incr = 0;
  }
  images.map(function (element) {
    element.style.left = incr + "px";
  });
}, 6000);
forward.addEventListener("click", function () {
  incr = incr - 250;

  if (incr < -1000) {
    incr = 0;
  }
  images.map(function (element) {
    element.style.left = incr + "px";
  });
});
backward.addEventListener("click", function () {
  incr = incr + 250;
  if (incr > 0) {
    incr = -1000;
  }
  images.map(function (element) {
    element.style.left = incr + "px";
  });
});
