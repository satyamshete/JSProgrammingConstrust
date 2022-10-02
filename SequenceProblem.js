function getSingleDigitRandomNumber()
{
    return Math.floor(Math.random() * 10);
}

console.log("Random single digit number: ",getSingleDigitRandomNumber());

console.log("Random dice number: ",getSingleDigitRandomNumber()%6 + 1);

console.log("Sum of two random dice number: ",(getSingleDigitRandomNumber()%6 + 1)+(getSingleDigitRandomNumber()%6 + 1));


function getTwoDigitRandomNumber()
{
    return Math.floor(Math.random() * 100);
}

console.log("five random digit sum and avarage")
let sum = 0
for (let index = 0; index < 5; index++) {
    let a = getTwoDigitRandomNumber();  
     sum += a;
     console.log(index+1," Random digit number is",a);
}
console.log("Sum of five two digit random numbers is: ", sum);
console.log("Average of five two digit random numbers is: ", sum/5);
