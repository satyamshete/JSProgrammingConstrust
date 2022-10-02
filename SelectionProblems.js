function getThreeDigitRandomNumber()
{
    return Math.floor(Math.random() * (999 - 100) + 100);
}

let arr =  [];
for (let index = 0; index <= 4; index++) {
    arr[index]= getThreeDigitRandomNumber();
}
let max = arr[0] ;
let min = arr[0] ;

for (let index = 0; index < arr.length; index++) {
    if (max < arr[index]) 
    {
        max = arr[index];
    }
    if (min > arr[index]) 
    {
        min = arr[index];
    }
}
console.log("Numbers are ", arr[0],arr[1],arr[2],arr[3],arr[4])
console.log ("Minimum Number is: ", min, "Maximum Number is: ", max)

function getFourDigitRandomNumber()
{
    return Math.floor(Math.random() * (9999 - 1000) + 1000);
}
let year = getFourDigitRandomNumber()
if (year % 100 == 0 && year % 400 == 0) 
{
    console.log(year,"is leap year");
}
if (year % 100 != 0 && year % 4 == 0) 
{
    console.log(year,"is leap year");
}
else
{
    console.log(year,"isnot leap year");
}
function getSingleDigitRandomNumber()
{
    return Math.random();
}
let Coin = getSingleDigitRandomNumber();
if (Coin < 0.4) 
{
    console.log("Head")
}else{
    console.log("Tail")
}