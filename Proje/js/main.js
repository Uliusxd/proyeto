const myCarouselElement = document.getElementById("mainCarousel");

const carousel = new bootstrap.Carousel(myCarouselElement, {});
let login = true;
document.getElementById("MainButton").addEventListener("click", () => {
  carousel.to("3");
});

document.getElementById("loginac").addEventListener("click", () => {
  carousel.to("5");
  login = !login;
  navnolog = document.getElementById("nolog");

  if (login) {
    navnologt.style.display = "block"; // Mostrar
  } else {
    navnolog.style.display = "none"; // Ocultar
  }
});

document.getElementById("card-product").addEventListener("click", () => {
  event.preventDefault();
  carousel.to("4");
});

document.getElementById("home").addEventListener("click", () => {
  event.preventDefault();
  carousel.to("0");
});
document.getElementById("about").addEventListener("click", () => {
  event.preventDefault();
  carousel.to("1");
});
document.getElementById("demo").addEventListener("click", () => {
  event.preventDefault();
  carousel.to("2");
});
document.getElementById("login").addEventListener("click", () => {
  event.preventDefault();
  carousel.to("3");
});

const container = document.getElementById("contenedor");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("loginuser");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
  console.log("wtf");
});
