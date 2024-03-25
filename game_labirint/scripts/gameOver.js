import { getScore, zeroScore } from "./main.js"

const popUpGameOver = document.querySelector(".popup_game_over");
const popUpGameOverText = document.querySelector(".popup-text-winner");
const buttonRepeatGame = document.querySelector(".repeat");
let flowerName;

function nonActiveFlowers() {
    for (let i = 1; i <= 24; ++i) {
        flowerName = ".flower-" + i;
        document.querySelector(flowerName).style.fill = "#297a36";
    }

}

function gameOver() {
    popUpGameOver.classList.add("popup_is-opened");
    popUpGameOverText.textContent = "Cчет = " + getScore();
    buttonRepeatGame.addEventListener("click", function (event) {
        nonActiveFlowers();
        zeroScore();
        popUpGameOver.classList.remove("popup_is-opened");
    });
}

export { gameOver }