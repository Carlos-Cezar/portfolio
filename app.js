const navToggle = document.querySelector(".navbar__drop-down--toggle");
const navMenu = document.querySelector(".navbar__drop-down--menu");
const navBtn = document.querySelectorAll(".navbar__dd--btn");
const navToggleImg = document.getElementById("navbar__drop-down--toggle");
const emailBtn = document.getElementById("email");

navToggle.addEventListener("click", () => {
  const visibilitty = navMenu.getAttribute("data-visible");
  if (visibilitty === "false") {
    navMenu.setAttribute("data-visible", true);
    navToggleImg.src = "images/bi_x.png";
  } else if (visibilitty === "true") {
    navMenu.setAttribute("data-visible", false);
    navToggleImg.src = "images/bx_menu.png";
  }
});

navBtn.forEach((Btn) => {
  Btn.addEventListener("click", () => {
    navMenu.setAttribute("data-visible", false);
    navToggleImg.src = "images/bx_menu.png";
  });
});

emailBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("cmotta.2k@gmail.com");
});
