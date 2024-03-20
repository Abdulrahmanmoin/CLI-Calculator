#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        message: "Enter your first number",
        name: "firstNumber",
        type: "number"
    }, {
        message: "Enter your second number",
        name: "secondNumber",
        type: "number"
    }, {
        message: "Enter an opertor",
        name: "operator",
        type: "list",
        choices: ["Additon", "Subtraction", "Multiplication", "Division", "Modulus", "Exponent"]
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
    console.log(chalk.magenta(`Your value is ${answer.firstNumber ** answer.secondNumber}`));
}
else {
    console.log(chalk.red("Please choose a valid operator."));
}
