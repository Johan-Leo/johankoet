"use strict";
const menuButton = document.querySelector("header h2");
const dropDownMenu = document.querySelector("nav ul");
const navElement = document.querySelector("nav");
const flowers = document.getElementById("flowers");
const justABrain = document.getElementById("justabrain");
const aboutMeTitle = document.getElementById("aboutme-h2");
const illustrationsTitle = document.getElementById("illustrations-h2");
const codingKoalaTitle = document.getElementById("codingkoala-h2");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const illustrationButtons = document.querySelectorAll(".button");
const displayedIllustration = document.getElementById("illustration-display");

window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;

  if (scrollValue >= 191) {
    aboutMeTitle.classList.add("move-left");
    bar1.style.width = "0%";
  } else {
    aboutMeTitle.classList.remove("move-left");
    bar1.style.width = "100%";
  }

  if (scrollValue >= 1210) {
    illustrationsTitle.classList.add("move-left");
    bar2.style.width = "0%";
  } else {
    illustrationsTitle.classList.remove("move-left");
    bar2.style.width = "100%";
  }

  if (scrollValue >= 2228) {
    codingKoalaTitle.classList.add("move-left");
    bar3.style.width = "0%";
  } else {
    codingKoalaTitle.classList.remove("move-left");
    bar3.style.width = "100%";
  }

  if (scrollValue >= 575) {
    flowers.classList.add("move-right");
  } else {
    flowers.classList.remove("move-right");
  }

  if (scrollValue >= 1584 && window.matchMedia("(max-width: 1200px)").matches) {
    justABrain.classList.add("move-right");
  } else if (
    scrollValue >= 1584 &&
    window.matchMedia("(min-width: 1200px)").matches
  ) {
    justABrain.classList.add("move-left");
  } else if (
    scrollValue < 1584 &&
    window.matchMedia("(max-width: 1200px)").matches
  ) {
    justABrain.classList.remove("move-right");
  } else if (
    scrollValue < 1584 &&
    window.matchMedia("(min-width: 1200px)").matches
  ) {
    justABrain.classList.remove("move-left");
  }
});

menuButton.addEventListener("click", () => {
  if (dropDownMenu.classList.contains("menu-down")) {
    dropDownMenu.classList.add("menu-up");
    dropDownMenu.classList.remove("menu-down");
    navElement.classList.remove("index-up");
  } else {
    dropDownMenu.classList.remove("menu-up");
    dropDownMenu.classList.add("menu-down");
    navElement.classList.add("index-up");
  }
});

let illustrationCounter = 0;

const illustrationsArr = [
  "habib.png",
  "spiky.png",
  "APPS.png",
  "Boeket.png",
  "justabrain.png",
];

const updateIllustration = function () {
  displayedIllustration.src = illustrationsArr[illustrationCounter];
  console.log(illustrationCounter);
};
updateIllustration();

for (let i = 0; i < illustrationButtons.length; i++) {
  illustrationButtons[i].addEventListener("click", () => {
    console.log("click", illustrationButtons[i]);

    if (illustrationButtons[i].classList.contains("next")) {
      if (illustrationCounter === illustrationsArr.length - 1) {
        illustrationCounter = 0;
      } else {
        illustrationCounter += 1;
      }
      updateIllustration();
    }

    if (illustrationButtons[i].classList.contains("previous")) {
      if (illustrationCounter === 0) {
        illustrationCounter = illustrationsArr.length - 1;
      } else {
        illustrationCounter -= 1;
      }
      updateIllustration();
    }
  });
}
