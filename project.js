// 1. Deposit some money
// 2. Determine number of lines to bet
// 3. Collect a bet amount 
// 4. spin the slot machine 
// 5. check if the user won
// 6. Give or take if the user won or lost
// 7. Play again or depsoit more 
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}




const deposit = () => {
    while (true) {
        const depositAmount = prompt("Amount to be deposited: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid Deposit Amount, Please Try Again");
        } else {
            return numberDepositAmount;
        }
    }
}

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter Number Of Lines(1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid Line Bet Amount, Please Try Again");
        } else {
            return numberOfLines;
        }
    }
}


const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter total bet per line: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid Bet, Please Try Again");
        } else {
            return numberBet;
        }
    }
}

const spin = () => {
    const symbols = []
}


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);