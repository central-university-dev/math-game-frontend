function randomDominos() {
    let numberArray = [];
    let countDomino = 9;
    for (let i = 0; i < countDomino; ++i) {
        numberArray.push(i);
    }
    let randomArray = numberArray.sort(() => Math.random() - 0.5);
    let dominoBefore = document.querySelector(".cards");
    let dominoAfter = document.querySelectorAll(".domino");
    for (let i = 0; i < 8; ++i) {
        dominoBefore.insertBefore(dominoAfter[randomArray[i]], null);
    }
    const temp = randomArray[countDomino - 1];
    for (let i = countDomino - 1; i > 0; --i) {
        randomArray[i] = randomArray[i - 1];
    }
    randomArray[0] = temp;
}

export { randomDominos };
