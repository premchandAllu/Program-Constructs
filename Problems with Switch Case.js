//1 Single digit in words
{
    const prompt = require('prompt-sync')();
    let number = prompt("Enter a single digit number :");
    switch (number) {
        case '1':
            console.log("One");
            break;
        case '2':
            console.log("Two");
            break;
        case '3':
            console.log("Three");
            break;
        case '4':
            console.log("Four");
            break;
        case '5':
            console.log("Five");
            break;
        case '6':
            console.log("Six");
            break;
        case '7':
            console.log("Seven");
            break;
        case '8':
            console.log("Eight");
            break;
        case '9':
            console.log("Nine");
            break;
        case '0':
            console.log("Zero");
            break;
        default:
            console.log("Invalid");
    }
}

//2 Number and day of the week
{
    const prompt = require('prompt-sync')();
    let number = prompt("Enter the date in yyyy-mm-dd format :");
    let date = new Date(number);
    switch (date.getDay()) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 0:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    }
}

//3 
{
    const prompt = require('prompt-sync')();
    let number = prompt("Enter a number :");
    switch (number) {
        case '1':
            console.log("Unit");
            break;
        case '10':
            console.log("Ten");
            break;
        case '100':
            console.log("Hundred");
            break;
        case '1000':
            console.log("Thousand");
            break;
        default:
            console.log("Invalid number");
    }
}

//4 Unit Conversions
{
    const prompt = require('prompt-sync')();
    let value = prompt("Enter the value :");
    let conversionType=Math.floor(Math.random()*10)%4+1;
    let convertedValue = 0;
    switch (conversionType) {
        case 1:
            convertedValue = value * 12;
            console.log("Feet to inch:" + convertedValue);
            break;
        case 2:
            convertedValue = value / 12;
            console.log("Inch to feet: " + convertedValue);
            break;
        case 3:
            convertedValue = value * 0.3048;
            console.log("Feet to meter: " + convertedValue);
            break;
        case 4:
            convertedValue = value / 0.3048;
            console.log("Meter to feet: " + convertedValue);
    }
}