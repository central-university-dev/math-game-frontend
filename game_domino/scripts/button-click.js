const dominoButtonArray = document.querySelectorAll('.domino-button');
const dominoIkon = document.querySelectorAll('.domino-svg');
const taskText = document.querySelector('.task-text');
const buttonTrue = document.querySelector('.win');
const buttonFalse = document.querySelector('.loss');
let score = 0;
let scoreText = document.querySelector('.score');
let ind = 0;

const taskConditions = ["Задача 1", "Задача 2", "Задача 3", 
                        "Задача 4", "Задача 5", "Задача 6",
                        "Задача 7", "Задача 8", "Задача 9"]

function randomDominos() {
    let randomArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    randomArray = randomArray.sort(() => Math.random() - 0.5);
    let dominoParent = document.querySelector('.cards');
    let dominoChild = document.querySelectorAll('.domino');
    for (let i = 0; i < 8; ++i) {
        dominoParent.insertBefore(dominoChild[randomArray[i]], null);
    }
    const temp = randomArray[8];
    for (let i = 8; i > 0; --i) {
        randomArray[i] = randomArray[i - 1];
    }
    randomArray[0] = temp;
}    

const dominosScores = [[1, 2], [1, 3], [2, 3],
                       [2, 4], [3, 3], [3, 4],
                       [3, 5], [4, 5], [5, 5]
];

randomDominos();

function toggleIsLiked(heart, button, index) {
    heart.classList.toggle('is-choosed');
    ind = index;
    taskText.textContent = taskConditions[index];
}

function toggle_div() {
    let item = document.getElementById("sidebar");
    item.classList.toggle('active-me');
}

function win() {
    score += dominosScores[ind][1];
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
    // console.log(dominosScores[ind]);
}

function loss() {
    score -= dominosScores[ind][0];
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
    taskText.textContent = "НЕ ПРАВИЛЬНО :(";
}

dominoButtonArray.forEach((button, index) => {
    button.onclick = () => toggleIsLiked(dominoButtonArray[index], button, index);
});

buttonTrue.onclick = () => win();
buttonFalse.onclick = () => loss();



