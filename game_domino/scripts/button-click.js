import { randomDominos } from "./random-dominos.js";
import { win } from "./adding-score-if-win.js";
import { loss } from "./adding-score-if-loss.js";
import { messages, taskConditions, gameOverWiners, scoreZeroSetting } from "../../common_scripts/messages.js"

const dominoButtonArray = document.querySelectorAll(".domino-button");
const taskText = document.querySelector(".task-text");
const buttonTrue = document.querySelector(".win");
const buttonFalse = document.querySelector(".loss");
const popUp = document.querySelector(".popup");
const buttonFirstTeam = document.querySelector(".popup-first-team");
const buttonSecondTeam = document.querySelector(".popup-second-team");
const popUpGameOver = document.querySelector(".popup_game_over");
const popUpGameOverText = document.querySelector(".popup-text-winner");
const buttonRepeatGame = document.querySelector(".repeat");
const toogle = document.querySelector(".toggle");

let scoreTeam1 = document.querySelector(".score_team-1");
let scoreTeam2 = document.querySelector(".score_team-2");

let teamsScores = [0, 0];

let currentDominoIndex = 0;
let countSolvedTasks = 0;
let currentDomino;

randomDominos();

function isTheEnd(countSolvedTasks) {
    if (countSolvedTasks === 9) {
        popUpGameOver.classList.add("popup_is-opened");
    }
    if (teamsScores[0] > teamsScores[1]) {
        popUpGameOverText.textContent = gameOverWiners["firstWin"];
    } else if (teamsScores[0] < teamsScores[1]) {
        popUpGameOverText.textContent = gameOverWiners["secondWin"];
    } else {
        popUpGameOverText.textContent = gameOverWiners["draw"];
    }
    buttonRepeatGame.addEventListener("click", function (event) {
        dominoButtonArray.forEach(function(element) {
            element.classList.remove("is-choosed-none");
            popUpGameOver.classList.remove("popup_is-opened");
            taskText.textContent = "";
            scoreTeam1.textContent = scoreZeroSetting["teamFirst"];
            scoreTeam2.textContent = scoreZeroSetting["teamSecond"];
        });
    });
}

function scorePreprocessor(flag) {
    popUp.classList.add("popup_is-opened");
    popUp.addEventListener("click", function (event) {
        if ( event.target.classList.contains("popup") ) {
            popUp.classList.remove("popup_is-opened");
        }
    });
    if (flag === "win") {
        countSolvedTasks += 1;
        buttonFirstTeam.onclick = function() {
            teamsScores = win(1, teamsScores[0],
                              teamsScores[1], currentDomino,
                              countSolvedTasks, currentDominoIndex);
        };
        buttonSecondTeam.onclick = function() {
            teamsScores = win(2, teamsScores[0],
                              teamsScores[1], currentDomino,
                              countSolvedTasks, currentDominoIndex);
        };
    } else {
        if (currentDomino.classList.contains("is-choosed-second")) {
            countSolvedTasks += 1;
        }
        buttonFirstTeam.onclick = function() {
            teamsScores = loss(1, teamsScores[0],
                               teamsScores[1], currentDomino,
                               countSolvedTasks, currentDominoIndex);
        };
        buttonSecondTeam.onclick = function()  {
            teamsScores = loss(2, teamsScores[0],
                               teamsScores[1], currentDomino,
                               countSolvedTasks, currentDominoIndex);
        };
    }
}

toogle.addEventListener("click", function () {
    let item = document.getElementById("sidebar");
    item.classList.toggle("active-me");
});

dominoButtonArray.forEach(function(button, index) {
    button.onclick = function() {
        let heart = dominoButtonArray[index];
        currentDomino = heart;
        currentDominoIndex = index;
        taskText.textContent = taskConditions[index];
        if (currentDomino.classList.contains("is-choosed-first")) {
            currentDomino.classList.remove("is-choosed-first");
            currentDomino.classList.add("is-choosed-second");
        } else if (currentDomino.classList.contains("is-choosed-none")) {
            taskText.textContent = messages["decided"];
        } else {
            heart.classList.toggle("is-choosed-first");
        }
    };
});

buttonTrue.onclick = () => scorePreprocessor("win");
buttonFalse.onclick = () => scorePreprocessor("loss");

export {buttonFirstTeam, buttonSecondTeam, isTheEnd, popUp};
