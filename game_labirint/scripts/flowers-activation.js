import { flowersColors } from "../../common_scripts/messages.js"
import { getRandomIntInclusive } from "../../common_scripts/random.js"
import { gameOver } from "./gameOver.js"

const flowers = []
let flowerCount = 24
let notActivated = []

let directFlower;
let reverseFlower;
let directName;
let reverseName;
let prevFlower;

function reStart() {
    for (let i = 1; i <= flowerCount; ++i) {
        directName = ".flower-" + i;
        reverseName = ".flower-" + (flowerCount - i + 1);
        directFlower = document.querySelector(directName);
        reverseFlower = document.querySelector(reverseName);
        flowers.push(directFlower);
        notActivated.push(reverseFlower);
    }
}



function nextFlower() {
    if (notActivated.length !== 0) {
        notActivated[notActivated.length - 1].style.fill =
        flowersColors[getRandomIntInclusive(0, flowersColors.length - 1)];
        prevFlower = notActivated.pop();
    } else {  
        gameOver();
    }
}

function unsolved() {
    prevFlower.style.fill = '#959393';
}

export { nextFlower, unsolved, reStart }
