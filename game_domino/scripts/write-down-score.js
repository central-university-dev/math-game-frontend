import {isTheEnd, popUp} from "./button-click.js";
import { messages, writeDownScoreWords } from "../../common_scripts/messages.js"

const taskText = document.querySelector(".task-text");
let scoreString = "";
const zeroCount = 3;

function writeDownScore(scoreText, teamNumber, score,
    scoreFirstTeam, scoreSecondTeam, countSolvedTasks, result) {
    if (score < 0) {
        scoreText.textContent = writeDownScoreWords["team"] + teamNumber + writeDownScoreWords["score"] + score;
    } else {
        scoreString = String(score).padStart(zeroCount, "0");
        scoreText.textContent = writeDownScoreWords["team"] + teamNumber +
        writeDownScoreWords["score"] + scoreString;
    }
    if (result === "win") {
        taskText.textContent = messages["win"];
    } else {
        taskText.textContent = messages["loss"];
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
