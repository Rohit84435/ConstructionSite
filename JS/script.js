let navbar = document.querySelector(".header .navbar");
let searchForm = document.querySelector(".header .search-form");
let loginForm = document.querySelector(".header .login-form");
let infoForm = document.querySelector(".contact-info");
let projects = document.querySelector(".projects .box-container");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

document.querySelector("#info-btn").onclick = () => {
  infoForm.classList.toggle("active");
};
document.querySelector("#close-contact-info").onclick = () => {
  infoForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  infoForm.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

lightGallery(projects);

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
