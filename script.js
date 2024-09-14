"use strict";
const menuButton = document.querySelector("header h2");
const dropDownMenu = document.querySelector("nav ul");

menuButton.addEventListener("click", function () {
  if (dropDownMenu.classList.contains("menu-down")) {
    dropDownMenu.classList.add("menu-up");
    dropDownMenu.classList.remove("menu-down");
  } else {
    dropDownMenu.classList.remove("menu-up");
    dropDownMenu.classList.add("menu-down");
  }
});

console.log(menuButton);
console.log(dropDownMenu);
