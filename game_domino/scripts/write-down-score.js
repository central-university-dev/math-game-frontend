import {isTheEnd, popUp} from "./button-click.js";

const taskText = document.querySelector(".task-text");
let scoreString = "";
const zeroCount = 3;

function writeDownScore(scoreText, teamNumber, score,
    scoreFirstTeam, scoreSecondTeam, countSolvedTasks, result) {
    if (score < 0) {
        scoreText.textContent = "Команда " + teamNumber + " Счет " + score;
    } else {
        scoreString = String(score).padStart(zeroCount, "0");
        scoreText.textContent = "Команда " + teamNumber +
        " Счет " + scoreString;
    }
    if (result === "win") {
        taskText.textContent = "ОГО ВАУ";
    } else {
        taskText.textContent = "НЕ ПРАВИЛЬНО :(";
    }
    isTheEnd(countSolvedTasks);
    if (teamNumber === 1) {
        scoreFirstTeam = score;
    } else {
        scoreSecondTeam = score;
    }
    return [scoreFirstTeam, scoreSecondTeam];

}

export { writeDownScore };
