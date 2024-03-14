import {popUp} from "./button-click.js";
import { writeDownScore } from "./write-down-score.js";

let scoreTeam1 = document.querySelector(".score_team-1");
let scoreTeam2 = document.querySelector(".score_team-2");

let scoreText;
let score;

const dominosScores = [[1, 2], [1, 3], [2, 3],
                       [2, 4], [3, 3], [3, 4],
                       [3, 5], [4, 5], [5, 5]
];

function win(teamNumber, scoreFirstTeam, scoreSecondTeam,
             currentDomino, countSolvedTasks, dominoIndex) {
    popUp.classList.remove("popup_is-opened");
    if (teamNumber === 1) {
        scoreText = scoreTeam1;
        score = scoreFirstTeam;
    } else {
        scoreText = scoreTeam2;
        score = scoreSecondTeam;
    }
    if (currentDomino.classList.contains("is-choosed-first")) {
        score += dominosScores[dominoIndex][0] + dominosScores[dominoIndex][1];
        currentDomino.classList.remove("is-choosed-first");
        currentDomino.classList.add("is-choosed-none");
    } else if (currentDomino.classList.contains("is-choosed-second")) {
        score += dominosScores[dominoIndex][1];
        currentDomino.classList.remove("is-choosed-second");
        currentDomino.classList.add("is-choosed-none");
    }
    return writeDownScore(scoreText, teamNumber, score, scoreFirstTeam,
                          scoreSecondTeam, countSolvedTasks, "win");
}

export {win};
