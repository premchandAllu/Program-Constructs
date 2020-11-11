//1
{
    const prompt = require('prompt-sync')();
    let n = prompt("Enter the value :");
    console.log("n = " + n);
    let power = 1;
    for (let i = 0; i < n; i++) {
        power = power * 2;
        console.log(power);
    }
}

//2 Harmonic mean
{
    const prompt = require('prompt-sync')();
    let num = prompt("Enter the value :");
    console.log("n= " + num);
    let harmonicNum = 0;
    for (let n = 1; n <= num; n++) {
        harmonicNum = harmonicNum + 1 / n;
    }
    console.log("Harmonic Num: " + harmonicNum);
}

//3 Prime number check
{
    const prompt = require('prompt-sync')();
    let num = prompt("Enter the value :");
    console.log("Number is :" + num);
    if (num == 1)
        console.log("Not Prime");
    else {
        for (let i = 2; i <= num; i++) {
            if (i == num) {
                console.log("Prime");
                break;
            }
            if (num % i == 0) {
                console.log("Not prime");
                break;
            }
        }
    }
}

//4 Prime numbers within a range
{
    const prompt = require('prompt-sync')();
    let start = prompt("Enter the one number of range :");
    let end = prompt("Enter the other number of range :");
    console.log("Start = " + start);
    console.log("End = " + end);
    if (end > start) {
        if (start == 1)
            console.log("Not Prime");
        else {
            for (let i = start; i <= end; i++) {
                for (let j = 2; j <= i; j++) {
                    if (j == i) {
                        console.log("Prime number: " + i);
                    }
                    if (i % j == 0)
                        break;
                }
            }
        }
    }
}

//5 Factorial of a number
{
    const prompt = require('prompt-sync')();
    let num = prompt("Enter the number :");
    console.log("Number = " + num);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    console.log("Factorial: " + factorial);
}

//6 Factorization
{
    const prompt = require('prompt-sync')();
    let num = prompt("Enter the number :");
    console.log("Num is: " + num);
    console.log("Factors are:");
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            for (let j = 2; j <= i; j++) {
                if (j == i) {
                    console.log(i);
                }
                if (i % j == 0)
                    break;
            }
        }
    }
}