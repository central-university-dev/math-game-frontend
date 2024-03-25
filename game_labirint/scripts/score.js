import { writeDownScoreWords } from "../../common_scripts/messages.js"

const scoreText = document.querySelector(".score");

let points;
let scoreString;
const zeroCount = 3;


function scoring(taskNumber, score) {
    points = Math.floor(taskNumber/4) + 2;
    score += points;
    scoreString = String(score).padStart(zeroCount, "0");
    scoreText.textContent = writeDownScoreWords["score"] + scoreString;
    return score;
}

export { scoring }