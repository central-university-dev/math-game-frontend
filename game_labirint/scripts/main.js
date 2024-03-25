import { nextFlower, unsolved, reStart } from "./flowers-activation.js"
import { taskConditions } from "../../common_scripts/messages.js"
import { scoring } from "./score.js"
import { writeDownScoreWords } from "../../common_scripts/messages.js"


const startButton = document.querySelector(".start-button");
const winButton = document.querySelector(".win");
const lossButton = document.querySelector(".loss");
const taskText = document.querySelector(".task-text");
const scoreText = document.querySelector(".score");

let currentTask = 0;
let score = 0
let zeroCount = 3;

function getScore() {
    return score;
}

function zeroScore() {
    score = 0;
    currentTask = 0;
    let scoreString = String(score).padStart(zeroCount, "0");
    scoreText.textContent = writeDownScoreWords["score"] + scoreString;
    startButton.classList.remove("not-active");
}

startButton.addEventListener("click", function (event) {
    {
        if (!startButton.classList.remove("not-active")) {
            startButton.classList.add("not-active");
            reStart();
            nextFlower();
            taskText.textContent = taskConditions[currentTask];
            currentTask += 1;
        }
    }
});

winButton.addEventListener("click", function (event) {
    {
        if (currentTask != 0) {
            taskText.textContent = taskConditions[currentTask];
            currentTask += 1;
            score = scoring(currentTask, score)
            nextFlower();
        }
    }
});

lossButton.addEventListener("click", function (event) {
    {
        unsolved();
        nextFlower();
        taskText.textContent = taskConditions[currentTask];
        currentTask += 1;
    }
});

export { getScore, zeroScore }