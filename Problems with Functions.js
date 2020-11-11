//1 Temperature Conversion
{
    const toFahrenheit = 0;
    const toCelsius = 1;
    function getConvertedTemperature(choice, temperature) {
        switch (choice) {
            case toFahrenheit:
                console.log("You selected-> Convert Celsius to Fahrenheit");
                return (temperature * (9 / 5)) + 32;
            case toCelsius:
                console.log("You selected-> Convert Fahrenheit to Cahrenheit");
                return ((temperature - 32) * 5 / 9);
        }
    }

    let choice = Math.floor(Math.random() * 10) % 2;
    let temp = 0;
    if (choice == 0) {
        temp = Math.floor(Math.random() * 100);
        console.log("Selected Celsius Temp: " + temp);
    }
    if (choice == 1) {
        temp = Math.floor(Math.random() * 180) + 32;
        console.log("Selected Fahrenheit Temp: " + temp);
    }
    let convertedTemp = getConvertedTemperature(choice, temp);
    console.log("Converted temperature = " + convertedTemp);
}

//2 Palindrome check
{
    function palindromeChecker(num1, num2) {
        let palindromeNum1 = 0;
        while (num1 > 0) {
            let rem = num1 % 10;
            palindromeNum1 = palindromeNum1 * 10 + rem;
            num1 = Math.floor(num1 / 10);
        }
        if (palindromeNum1 == num2)
            return true;
        else
            return false;
    }

    let isPalindrome = palindromeChecker(143, 341);
    console.log("Numbers: 143, 341");
    console.log("Is number 2 a palindrome of number 1: " + isPalindrome);

    isPalindrome = palindromeChecker(15, 31);
    console.log("Numbers: 15, 31");
    console.log("Is number 2 a palindrome of number 1: " + isPalindrome);
}

//3 Prime and palindrome check
{
    function primeNumberChecker(num) {
        console.log("Number is: " + num);
        if (num == 1)
            console.log("Not Prime");
        else {
            for (let i = 2; i <= num; i++) {
                if (i == num) {
                    console.log("Prime");
                    return true;
                }
                if (num % i == 0) {
                    console.log("Not prime");
                    return false;
                }
            }
        }
    }

    function getPalindrome(num) {
        let palindrome = 0;
        while (num > 0) {
            let rem = num % 10;
            palindrome = palindrome * 10 + rem;
            num = Math.floor(num / 10);
        }
        return palindrome;
    }


    const prompt = require('prompt-sync')();
    let num = prompt("Enter the value :");
    let isPrime = primeNumberChecker(num);
    if (isPrime == false)
        console.log("Number is not prime so not checking palindrome");
    if (isPrime) {
        console.log("Number is prime. Checking palindrome")
        let palindrome = getPalindrome(num);
        primeNumberChecker(palindrome);
    }
}
