"use strict";
const menuButton = document.querySelector("header h2");
const dropDownMenu = document.querySelector("nav ul");
const flowers = document.getElementById("flowers");
const justABrain = document.getElementById("justabrain");
const aboutMeTitle = document.getElementById("aboutme-h2");
const illustrationsTitle = document.getElementById("illustrations-h2");
const codingKoalaTitle = document.getElementById("codingkoala-h2");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;

  bar1.style.width = `${100 - scrollValue * 0.5}%`;

  if (scrollY > 900) {
    bar2.style.width = `${100 - (scrollValue - 900) * 0.5}%`;
  } else {
    bar2.style.width = `100%`;
  }

  if (scrollValue >= 191) {
    aboutMeTitle.classList.add("move-left");
  } else {
    aboutMeTitle.classList.remove("move-left");
  }

  if (scrollValue >= 1205) {
    illustrationsTitle.classList.add("move-left");
  } else {
    illustrationsTitle.classList.remove("move-left");
  }

  if (scrollValue >= 2228) {
    codingKoalaTitle.classList.add("move-left");
  } else {
    codingKoalaTitle.classList.remove("move-left");
  }

  if (scrollValue >= 575) {
    flowers.classList.add("move-right");
  } else {
    flowers.classList.remove("move-right");
  }

  if (scrollValue >= 1584) {
    justABrain.classList.add("move-left");
  } else {
    justABrain.classList.remove("move-left");
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
