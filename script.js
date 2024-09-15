"use strict";
const menuButton = document.querySelector("header h2");
const dropDownMenu = document.querySelector("nav ul");
const flowers = document.getElementById("flowers");
const aboutMeTitle = document.getElementById("aboutme-h2");
const illustrationsTitle = document.getElementById("illustrations-h2");
const codingKoalaTitle = document.getElementById("codingkoala-h2");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  bar1.style.width = `${100 - value * 0.5}%`;
  if (value >= 100) {
    aboutMeTitle.classList.add("move-left");
  } else {
    aboutMeTitle.classList.remove("move-left");
  }
  if (value >= 575) {
    flowers.classList.add("move-right");
  } else {
    flowers.classList.remove("move-right");
  }
});

menuButton.addEventListener("click", () => {
  if (dropDownMenu.classList.contains("menu-down")) {
    dropDownMenu.classList.add("menu-up");
    dropDownMenu.classList.remove("menu-down");
  } else {
    dropDownMenu.classList.remove("menu-up");
    dropDownMenu.classList.add("menu-down");
  }
});
