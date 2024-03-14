const messages = {
    win: "ОГО ВАУ",
    loss: "НЕ ПРАВИЛЬНО :(",
    decided: "ЭТУ ЗАДАЧУ УЖЕ РЕШИЛИ!"
}

const taskConditions = ["Задача 1", "Задача 2", "Задача 3",
                        "Задача 4", "Задача 5", "Задача 6",
                        "Задача 7", "Задача 8", "Задача 9"
];

const gameOverWiners = {
    firstWin: "Победила 1 команда!",
    secondWin: "Победила 2 команда!",
    draw: "Ничья!",
    score: "Количество баллов: "
};

const scoreZeroSetting = {
    teamFirst: "Команда 1 Счет 000",
    teamSecond: "Команда 2 Счет 000",
    oneTeam: "Счет 000"
}

const writeDownScoreWords = {
    team: "Команда ",
    score: " Счет "
}
                    

export {messages, taskConditions, gameOverWiners, scoreZeroSetting, writeDownScoreWords}