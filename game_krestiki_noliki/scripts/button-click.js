import { win } from "./score-if-win.js";
import { loss } from "./score-if-loss.js";

const squareList = document.querySelectorAll(".square");
const taskText = document.querySelector(".task-text");
const buttonTrue = document.querySelector(".win");
const buttonFalse = document.querySelector(".loss");
const popUpGameOver = document.querySelector(".popup_game_over");
const popUpGameOverText = document.querySelector(".popup-text-winner");
const buttonRepeatGame = document.querySelector(".repeat");
const toggle = document.querySelector(".toggle");

let score = 0;
let scoreText = document.querySelector(".score");
let currentTaskIndex = 0;
let countSolvedTasks = 0;

const taskConditions = ["Задача 1", "Задача 2", "Задача 3",
                        "Задача 4", "Задача 5", "Задача 6",
                        "Задача 7", "Задача 8", "Задача 9"];

let isCorrect = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let currentSquare;

function isGameOver() {
    if (countSolvedTasks === 9) {
        let active;
        scoreText.textContent = "Счет 000";
        popUpGameOver.classList.add("popup_is-opened");
        popUpGameOverText.textContent = "Вы набрали " + score + " баллов!";
        buttonRepeatGame.addEventListener("click", function (event) {
            squareList.forEach(function(element) {
                element.classList.remove("is-choosed-none");
                popUpGameOver.classList.remove("popup_is-opened");
                taskText.textContent = "";
                if (element.querySelector(".cross-active")) {
                    active = element.querySelector(".cross-active");
                    active.classList.remove("cross-active");
                    active.classList.add("cross");
                } else if (element.querySelector(".zero-active")) {
                    active = element.querySelector(".zero-active");
                    active.classList.remove("zero-active");
                    active.classList.add("zero");
                }
            });
        });
        isCorrect = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        score = 0;
    }
}

toggle.addEventListener("click", function () {
    let item = document.getElementById("sidebar");
    item.classList.toggle("active-me");
});

squareList.forEach(function(button, index) {
    button.onclick = function() {
        squareList[index].classList.toggle("is-choosed");
        currentSquare = squareList[index];
        currentTaskIndex = index;
        taskText.textContent = taskConditions[index];
    };
});

buttonTrue.onclick = function() {
    countSolvedTasks += 1;
    score = win(score, currentSquare, isCorrect, currentTaskIndex);
    isCorrect[currentTaskIndex] = 1;
};
buttonFalse.onclick = function() {
    countSolvedTasks += 1;
    loss(score, currentSquare);
};

export { isGameOver };