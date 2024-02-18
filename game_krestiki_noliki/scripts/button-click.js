const squareList = document.querySelectorAll(".square");
const taskText = document.querySelector('.task-text');
const buttonTrue = document.querySelector('.win');
const buttonFalse = document.querySelector('.loss');

let score = 0;
let scoreText = document.querySelector('.score');
let ind = 0;

const taskConditions = ["Задача 1", "Задача 2", "Задача 3", 
                        "Задача 4", "Задача 5", "Задача 6",
                        "Задача 7", "Задача 8", "Задача 9"]
let isCorrect = [0, 0, 0,
                 0, 0, 0,
                 0, 0, 0]

let currentSquare;

function toggleIsLiked(heart, button, index) {
    heart.classList.toggle('is-choosed');
    currentSquare = heart;
    ind = index;
    taskText.textContent = taskConditions[index];
}

function toggle_div() {
    let item = document.getElementById("sidebar");
    item.classList.toggle('active-me');
}

function scoring() {
    let answer = 1
    let checkingInd = ind + 1
    let steps = []
    if ((checkingInd === 2) || (checkingInd === 5) || (checkingInd === 8)) {
        steps = [1, 3, 6]
    } else {
        steps = [1, 2, 3, 6]
    }
    
    
    for (let i = 0; i < 4; ++i) {
        if ((checkingInd - steps[i]) > 0) {
            if (isCorrect[checkingInd - steps[i] - 1] === 1) {
                if ((steps[i] === 1 || steps[i] === 2) && ((checkingInd === 1) || (checkingInd === 4) || (checkingInd === 7))) {
                    answer += 0
                } else {
                    answer += 1
                }
            }
        }
        if ((checkingInd + steps[i]) <= 9) {
            if (isCorrect[checkingInd + steps[i] - 1] === 1) {
                if ((steps[i] === 1 || steps[i] === 2) && ((checkingInd === 3) || (checkingInd === 6) || (checkingInd === 9))) {
                    answer += 0
                } else {
                    answer += 1
                }
            }
        }
    }
    return answer
}

function win() {
    score += scoring()*10;
    if (score > 0 && score < 100) {
        if (score < 10) {
            scoreText.textContent = "Score 00" + score;
        } else {
            scoreText.textContent = "Score 0" + score;
        }
    } else if (score === 0) {
        scoreText.textContent = "Score 000";
    } else{
        scoreText.textContent = "Score " + score;
    }
    taskText.textContent = "ОГО ВАУ";
    const currentCross = currentSquare.querySelector('.cross');
    const currentZero = currentSquare.querySelector('.zero');
    if (! currentCross) {
        const currentCrossActive = currentSquare.querySelector('.cross-active');
        currentCrossActive.classList.remove("cross-active");
        currentCrossActive.classList.add("cross");
    } else if (! currentZero) {
        const currentZeroActive = currentSquare.querySelector('.zero-active');
        currentZeroActive.classList.remove("zero-active");
        currentZeroActive.classList.add("zero");
        currentCross.classList.remove("cross");
        currentCross.classList.add("cross-active");
    }
    else {
        currentCross.classList.remove("cross");
        currentCross.classList.add("cross-active");
    }
    currentSquare.classList.remove('is-choosed')
    isCorrect[ind] = 1
}

function loss() {
    // score -= 10;
    if (score > 0 && score < 100) {
        if (score < 10) {
            scoreText.textContent = "Score 00" + score;
        } else {
            scoreText.textContent = "Score 0" + score;
        }
    } else if (score === 0) {
        scoreText.textContent = "Score 000";
    } else{
        scoreText.textContent = "Score " + score;
    }
    taskText.textContent = "ОГО ВАУ";
    const currentCross = currentSquare.querySelector('.cross');
    const currentZero = currentSquare.querySelector('.zero');
    if (! currentZero) {
        const currentZeroActive = currentSquare.querySelector('.zero-active');
        currentZeroActive.classList.remove("zero-active");
        currentZeroActive.classList.add("zero");
    } else if (! currentCross) {
        const currentCrossActive = currentSquare.querySelector('.cross-active');
        currentCrossActive.classList.remove("cross-active");
        currentCrossActive.classList.add("cross");
        currentZero.classList.remove("zero");
        currentZero.classList.add("zero-active");
    } else {
        currentZero.classList.remove("zero");
        currentZero.classList.add("zero-active");
    }
    currentSquare.classList.remove('is-choosed')
}

squareList.forEach((button, index) => {
    button.onclick = () => toggleIsLiked(squareList[index], button, index);
});

buttonTrue.onclick = () => win();
buttonFalse.onclick = () => loss();
