import { homePage } from "./home";
import { menuPage } from "./menu";

homePage();

let clearContent = function(){
    let contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
};

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", () => {
    clearContent();
    homePage();
});


const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", () => {
    clearContent();
    menuPage();
});


