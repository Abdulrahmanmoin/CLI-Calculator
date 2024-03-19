import inquirer from "inquirer";
let answer = await inquirer.prompt([{
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
        choices: ["Additon", "Subtraction", "Multiplication", "Division"]
    }]);
if (answer.operator === "Additon") {
    console.log(`Your value is ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "Subtraction") {
    console.log(`Your value is ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operator === "Multiplication") {
    console.log(`Your value is ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "Division") {
    console.log(`Your value is ${answer.firstNumber / answer.secondNumber}`);
}
