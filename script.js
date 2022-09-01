const img1 = document.querySelector(".img-1");
const img2 = document.querySelector(".img-2");
const img3 = document.querySelector(".img-3");

function flipCard() {
  card.classList.toggle("is-flipped");
}

img1.addEventListener("mouseover", function (e) {
  img1.classList.remove("img-card-rev");
  img1.classList.toggle("img-card");
});

img1.addEventListener("mouseout", function (e) {
  img1.classList.remove("img-card");
  img1.classList.toggle("img-card-rev");
});

img2.addEventListener("mouseover", function (e) {
  img1.classList.remove("img-card-rev");
  img2.classList.toggle("img-card");
});

img2.addEventListener("mouseout", function (e) {
  img2.classList.remove("img-card");
  img2.classList.toggle("img-card-rev");
});

img3.addEventListener("mouseover", function (e) {
  img1.classList.remove("img-card-rev");
  img3.classList.toggle("img-card");
});

img3.addEventListener("mouseout", function (e) {
  img3.classList.remove("img-card");
  img3.classList.toggle("img-card-rev");
});