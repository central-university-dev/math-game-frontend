import {isGameOver} from "./button-click.js"
import {scoring} from "./scoring.js"
import { messages, writeDownScoreWords } from "../../common_scripts/messages.js"

let scoreText = document.querySelector(".score");
const taskText = document.querySelector(".task-text");
const zeroCount = 3;
let scoreString = "";
const correctlySolvedText = messages["win"];

function win(score, currentSquare, isCorrect, ind) {
    score += scoring(ind, isCorrect)*10;
    scoreString = String(score).padStart(zeroCount, "0");
    scoreText.textContent = writeDownScoreWords["score"] + scoreString;

    taskText.textContent = correctlySolvedText;
    const currentCross = currentSquare.querySelector(".cross");
    const currentZero = currentSquare.querySelector(".zero");
    if (! currentCross) {
        const currentCrossActive = currentSquare.querySelector(".cross-active");
        currentCrossActive.classList.remove("cross-active");
        currentCrossActive.classList.add("cross");
    } else if (! currentZero) {
        const currentZeroActive = currentSquare.querySelector(".zero-active");
        currentZeroActive.classList.remove("zero-active");
        currentZeroActive.classList.add("zero");
        currentCross.classList.remove("cross");
        currentCross.classList.add("cross-active");
    }
    else {
        currentCross.classList.remove("cross");
        currentCross.classList.add("cross-active");
    }
    currentSquare.classList.remove("is-choosed");
    isCorrect[ind] = 1;
    isGameOver();
    return score;
}

export { win };