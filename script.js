// const nav = document.getElementsByClassName("nav");
// const navUl = nav.getElementsByClassName("nav-ul");
// const navLi = navUl.getElementsByClassName("nav-li");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const blog = document.querySelector(".blog");
const team = document.querySelector(".team");
const contact = document.querySelector(".contact");

home.addEventListener("click", function (e) {
  home.classList.add("active");
  about.classList.remove("active");
  portfolio.classList.remove("active");
  blog.classList.remove("active");
  team.classList.remove("active");
  contact.classList.remove("active");
});

about.addEventListener("click", function (e) {
  home.classList.remove("active");
  about.classList.add("active");
  portfolio.classList.remove("active");
  blog.classList.remove("active");
  team.classList.remove("active");
  contact.classList.remove("active");
});

portfolio.addEventListener("click", function (e) {
  home.classList.remove("active");
  about.classList.remove("active");
  portfolio.classList.add("active");
  blog.classList.remove("active");
  team.classList.remove("active");
  contact.classList.remove("active");
});

blog.addEventListener("click", function (e) {
  home.classList.remove("active");
  about.classList.remove("active");
  portfolio.classList.remove("active");
  blog.classList.add("active");
  team.classList.remove("active");
  contact.classList.remove("active");
});

team.addEventListener("click", function (e) {
  home.classList.remove("active");
  about.classList.remove("active");
  portfolio.classList.remove("active");
  blog.classList.remove("active");
  team.classList.add("active");
  contact.classList.remove("active");
});

contact.addEventListener("click", function (e) {
  home.classList.remove("active");
  about.classList.remove("active");
  portfolio.classList.remove("active");
  blog.classList.remove("active");
  team.classList.remove("active");
  contact.classList.add("active");
});

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
