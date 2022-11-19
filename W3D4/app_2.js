const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getNumber(inputText) {
    if (inputText === 'stop')
        return 0;
    else {
        let currentInputText;
        readline.question('Give me a number or stop: ', input => {
            currentInputText = input
            readline.close();
        });
        return inputText + getNumber(currentInputText);
    }
}

let result = getNumber(0);

console.log("Total sum is: " + result);