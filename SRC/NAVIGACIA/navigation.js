"use strict";

let buttonMenu = document.querySelector(".hamburger-icon");

buttonMenu.addEventListener("click", function() {
    let menuWindow = document.querySelector("#menu-bar");
    if (menuWindow.style.display === "none" || menuWindow.style.display === "") {
        menuWindow.style.display = "flex";
    } else {
        menuWindow.style.display = "none";
    }
});
