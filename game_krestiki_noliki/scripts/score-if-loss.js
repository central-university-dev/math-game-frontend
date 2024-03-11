import {isGameOver} from "./button-click.js";

let scoreText = document.querySelector(".score");
const taskText = document.querySelector(".task-text");
const incorrectlySolvedText = "И ЭТО НЕВЕРНО";

function loss(score, currentSquare) {
    taskText.textContent = incorrectlySolvedText;
    const currentCross = currentSquare.querySelector(".cross");
    const currentZero = currentSquare.querySelector(".zero");
    if (! currentZero) {
        const currentZeroActive = currentSquare.querySelector(".zero-active");
        currentZeroActive.classList.remove("zero-active");
        currentZeroActive.classList.add("zero");
    } else if (! currentCross) {
        const currentCrossActive = currentSquare.querySelector(".cross-active");
        currentCrossActive.classList.remove("cross-active");
        currentCrossActive.classList.add("cross");
        currentZero.classList.remove("zero");
        currentZero.classList.add("zero-active");
    } else {
        currentZero.classList.remove("zero");
        currentZero.classList.add("zero-active");
    }
    currentSquare.classList.remove("is-choosed");
    isGameOver();
}

export { loss };