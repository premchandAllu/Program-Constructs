//1 Single digit in words
{
    const prompt = require('prompt-sync')();
    let number = prompt("Enter a single digit number :");
    if (number == 1)
        console.log("One");
    else if (number == 2)
        console.log("Two");
    else if (number == 3)
        console.log("Three");
    else if (number == 4)
        console.log("Four");
    else if (number == 5)
        console.log("Five");
    else if (number == 6)
        console.log("Six");
    else if (number == 7)
        console.log("Seven");
    else if (number == 8)
        console.log("Eight");
    else if (number == 9)
        console.log("Nine");
    else if (number == 0)
        console.log("Zero");
}

//2 Number and day of the week
{
    const prompt = require('prompt-sync')();
    let number = prompt("Enter the date in yyyy-mm-dd format :");
    let date = new Date(number);
    let day = date.getDay();
    if (day == 0) {
        console.log("Sunday");
    } else if (day == 1) {
        console.log("Monday");
    } else if (day == 2) {
        console.log("Tuesday");
    } else if (day == 3) {
        console.log("Wednesday");
    } else if (day == 4) {
        console.log("Thursday");
    } else if (day == 5) {
        console.log("Friday");
    } else if (day == 6) {
        console.log("Saturday");
    }
}

//3 
{
    const prompt = require('prompt-sync')();
    let number = prompt("Enter a number :");
    if (number == 1) {
        console.log("Unit");
    } else if (number == 10) {
        console.log("Ten");
    } else if (number == 100) {
        console.log("Hundred");
    } else if (number == 1000) {
        console.log("Thousand");
    }
}

//4 Arithmetic Operations and maximum and minimum
{
    let op1 = 3 + (2 * 1);
    console.log(op1);
    let op2 = (3 % 2) + 1;
    console.log(op2);
    let op3 = 1 + (3 / 2);
    console.log(op3);
    let op4 = (3 * 2) + 1;
    console.log(op4);

    let max = op1;
    if (op2 > max)
        max = op2;
    if (op3 > max)
        max = op3;
    if (op4 > max)
        max = op4;
    console.log("Max: " + max);

    let min=op1;
    if (op2 < min)
        min = op2;
    if (op3 < min)
        min = op3;
    if (op4 < min)
        min = op4;
    console.log("Min: " + min);
}
