function checkToppingSwitch(topping){
    switch (topping) {
        case "cheese":
        case "BBQ":
        case "tomato":
            console.log("yup, yup, yup...");
            break;
        case "ham":
            console.log("only if it's with pineapple...");
            break;
        default:
            console.log(`Not a fan of ${topping} on my pizza, weirdo`);
            break;
    }
}

checkToppingSwitch("cheese");
checkToppingSwitch("tomato");
checkToppingSwitch("ham");
checkToppingSwitch("dirt");

function checkToppingIf(topping){
    if (topping == "cheese" || topping == "BBQ" || topping == "tomato"){
        console.log("yup, yup, yup...");
    } else if(topping == "ham"){
        console.log("only if it's with pineapple...");
    } else {
        console.log(`Not a fan of ${topping} on my pizza, weirdo`);
    }
}

checkToppingIf("cheese");
checkToppingIf("tomato");
checkToppingIf("ham");
checkToppingIf("dirt");

let password = 'abcdef'
if (password = 'abcdef') {
    console.log('password has less than 8 charcters');
} else {
    console.log('password has more than 8 characters');
}

var num = '10'
switch (num) {
    case '3' :
        console.log('10 can be divided by 3');
    break;
    case '5' :
        console.log('10 can also be divided by 5');
    default:
        console.log(`${num} can be divided by 3 and 5`);
}

var num = '15'
switch (num) {
    case '15/3' :
        console.log('fizz');
    break;
    case '15/5' :
        console.log('buzz');
        default:
            console.log('fizz buzz');
}

console.log("    |   |   ")
console.log("    |   |   ")
console.log("    |   |   ")
console.log("-------------")
console.log("    |   |   ")
console.log("    |   |   ")
console.log("    |   |   ")
console.log("-------------")
console.log("    |   |   ")
console.log("    |   |   ")
console.log("    |   |   ")

let grid = [
    ["o", "|", "o", "|", "o"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["_", "_", "_", "_", "_"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["_", "_", "_", "_", "_"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
];
console.log(grid);

if ((grid[0][0] == "x" && grid[0][2] == "x" && grid[0][4] == "x") || (grid[0][0] == "o" && grid[0][2] == "o" && grid[0][4] == "o")){
    console.log("Winner");
} else if ((grid[1][0] == "x" && grid[1][2] == "x" && grid[1][4] == "x") || (grid[1][0] == "o" && grid[1][2] == "o" && grid[1][4] == "o")){
    console.log("Winner");
}

const pressGrindBeans = () => {
    console.log('Grinding for 20 seconds');
}
pressGrindBeans();


const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) +32;
};
console.log('The temperature is ' + getFahrenheit(15) + '°F');
// Output: The tempreture is 59°F

let size = "large"
let typeOfDrink = "espresso"
let coffeeOrder = (size,typeOfDrink) => {
    console.log(`You ordered a ${size} ${typeOfDrink}`)
}

coffeeOrder(size,typeOfDrink);



const warmUp1 = (order, drinks, balance) => {
    if (drinks.hasOwnProperty(order) && balance >= drinks[order]) {
        console.log(`Here is your ${order}`);
    }
    else if (drinks.hasOwnProperty(order)) {
        console.log(`You can't afford ${order}`);
    }
    else {
        console.log(`We don't stock ${order}`);
    }
}

let drinks = { gin: 4, beer: 4, coffee: 2 };
let balance = 10;

warmUp1("gin", drinks, balance);

let currentStock = {
    pepsi: 1,
    coke: 50,
    water: 20,
}

const drinkStock = (drink) => {
    if (currentStock[drink] > 0){
        return true;
    } else {
        return false;
    }
}

const drinkRequest = (credit, drink) => {
    if (drinkStock(drink) && credit >= 1){
        currentStock[drink]--;
        console.log(`Here's your ${drink}`);
    } else {
        console.log(`Sorry ${drink} is out of stock`);
    }
}

drinkRequest(2, "pepsi");
drinkRequest(2, "pepsi");

const person = {
    name: 'Abu Bakar',
    age: 18,
    hobbies: [
        'Football',
        'Gaming',
    ]
};


var weekendAlarm = 'no alarm needed'
var weekdayAlarm = 'get up at 7am'
var day
var alarm

if (weekendAlarm == 'no alarm needed') {
    console.log('its saturday no alarm needed');
}
else if (weekdayAlarm = 'get up at 7am') {
    console.log('its friday get up at 7am');
}

if (weekdayAlarm == 'get up at 7am') {
    console.log('its thursday get up at 7am');
}
else if (weekendAlarm = 'no alarm needed') {
    console.log('its sunday no alarm needed');
}

function myFunction (num1, num2) {
    return(num1 ** num2);
}

console.log(myFunction(2,4));

let array = [1, 2, 3, 4, 5, 6];

console.log(array);
array.pop()
console.log(array);

let multiplesTwo = [];
for(let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}
console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

console.log(Math.random());

let filmList = ["007", "jurassic world", "Rambo", "fast and furious", "titanic"];
filmList.push("avengers", "iron man");
console.log(filmList);
for(i=0; i < filmList.length; i++){
    console.log(filmList[i]);
}
