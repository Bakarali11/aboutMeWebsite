let button = document.getElementById("button");
let inputBox = document.getElementById("inputText");
let para = document.getElementById("Example");

// button.addEventListener('click', () => {
//     para.innerHTML = inputBox.value;
// })

let direction = "";
let response = "";
const playerObj = {
    inventory: {
        weapons: [],
        utility: [],
        misc: {
        }
    },
}

// button.addEventListener('click', () => {
//     response = input.value;
// })

para.innerHTML = `Greetings, what's your name?`;

function thing1(){
    response = inputBox.value;
    inputBox.value = "";
    playerObj.name = response;
    para.innerHTML = `${playerObj.name}, what a strange name. a or b?`;
    button.setAttribute("onClick", "thing2()");
}

function thing2() {
    response = inputBox.value;
    if (response === "a") {
        para.innerHTML = "How big is a football pitch?";    
        button.setAttribute("onClick", "thing3()");
    } else if (response === "b") {
        para.innerHTML = "Which player scored the fastest hat-trick in the Premier League?";
        button.setAttribute("onClick", "thing3()");
    } else {
        para.innerHTML = "Try again a or b";
    }
}

function thing4() {
    response = inputBox.value;
    inputBox.value = "";
    playerObj.name = response;
    para.innerHTML = `${playerObj.name}, pick between c or d?`;
    button.setAttribute("onClick", "thing5()");
}

function thing5() {
    response = inputBox.value;
    if (response === "c") {
        para.innerHTML = "Which team won the first Premier League title?";    
        button.setAttribute("onClick", "thing6()");
    } else if (response === "d") {
        para.innerHTML = "The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it?";
        button.setAttribute("onClick", "thing6()");
    } else {
        para.innerHTML = "Try again, c or d";
    }
    inputBox.value = "";
}