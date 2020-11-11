//1
{
    const prompt = require('prompt-sync')();
    let n = prompt("Enter the value :");
    console.log("n = " + n);
    let count = 1;
    let power = 1;
    while (power <= 256 && count <= n) {
        console.log(power);
        power = power * 2;
        count++;
    }
}

//2
{
    const prompt = require('prompt-sync')();
    let num = prompt("Enter the value :");
    console.log(num);
    let n = 50;
    let start = 0;
    let end = 100;
    while (n != num) {
        if (n == num)
            console.log("Num is: " + n);
        else if (n > num) {
            end = n;
            n = Math.floor((start + end) / 2);
        }
        else if (n < num) {
            start = n;
            n = Math.floor((start + end) / 2);
        }
    }
    console.log(n);
}

//3
{
    const HEAD = 0;
    const TAIL = 1;
    let headCount = 0;
    let tailCount = 0;
    while (headCount != 11 && tailCount != 11) {
        let toss = Math.floor(Math.random() * 10) % 2;
        switch (toss) {
            case HEAD:
                headCount++;
                break;
            case TAIL:
                tailCount++;
                break;
        }
    }
    console.log("Head Count = " + headCount);
    console.log("Tail Count = " + tailCount);
}

//4
{
    const LOSE = 0;
    const WIN = 1;
    let balance = 100;
    let winCount = 0;
    let totalBets = 0;

    while (balance > 0 && balance < 200) {
        let toss = Math.floor(Math.random() * 10) % 2;
        switch (toss) {
            case LOSE:
                balance--;
                break;
            case WIN:
                balance++;
                winCount++;
                break;
        }
        totalBets++;
    }
    console.log("Total bets = " + totalBets);
    console.log("Total wins = " + winCount);
    console.log("Final balance = " + balance);
}
