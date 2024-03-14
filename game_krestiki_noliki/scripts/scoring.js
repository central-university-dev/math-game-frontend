function scoring(ind, isCorrect) {
    let answer = 1;
    let checkingInd = ind + 1;
    let steps = [];
    if ((checkingInd === 2) || (checkingInd === 5) || (checkingInd === 8)) {
        steps = [1, 3, 6];
    } else {
        steps = [1, 2, 3, 6];
    }
    for (let i = 0; i < 4; ++i) {
        if (((checkingInd - steps[i]) > 0) &&
        (isCorrect[checkingInd - steps[i] - 1] === 1)) {
            if ((steps[i] === 1 || steps[i] === 2) &&
            ((checkingInd === 1) || (checkingInd === 4)
            || (checkingInd === 7))) {
                answer += 0;
            } else {
                answer += 1;
            }
        }
        if (((checkingInd + steps[i]) <= 9) &&
        (isCorrect[checkingInd + steps[i] - 1] === 1)) {
            if ((steps[i] === 1 || steps[i] === 2) &&
            ((checkingInd === 3) || (checkingInd === 6)
            || (checkingInd === 9))) {
                answer += 0;
            } else {
                answer += 1;
            }
        }
    }
    return answer;
}

export {scoring};