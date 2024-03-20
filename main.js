#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        message: "Enter an opertor",
        name: "operator",
        type: "list",
        choices: ["Additon", "Subtraction", "Multiplication", "Division", "Modulus", "Exponent"]
    }, {
        message: "Enter your first number",
        name: "firstNumber",
        type: "number"
    }, {
        message: "Enter your second number",
        name: "secondNumber",
        type: "number"
    }
]);
if (answer.operator === "Additon") {
    console.log(chalk.magenta(`Your value is ${answer.firstNumber + answer.secondNumber}`));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.magenta(`Your value is ${answer.firstNumber - answer.secondNumber}`));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.magenta(`Your value is ${answer.firstNumber * answer.secondNumber}`));
}
else if (answer.operator === "Division") {
    console.log(chalk.magenta(`Your value is ${answer.firstNumber / answer.secondNumber}`));
}
else if (answer.operator === "Modulus") {
    console.log(chalk.magenta(`Your value is ${answer.firstNumber % answer.secondNumber}`));
}
else if (answer.operator === "Exponent") {
    answer[1].message = "Enter your base number";
    answer[2].message = "Enter your exponent number";
    console.log(chalk.magenta(`Your value is ${answer[1].firstNumber ** answer[2].secondNumber}`));
}
else {
    console.log(chalk.red("Please choose a valid operator."));
}
