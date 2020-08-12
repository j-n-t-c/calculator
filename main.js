//operator functions
function add (a,b) {
    return a+b;
}
function subtract (a,b) {
    return a-b;
}
function multiply (a,b) {
    return a*b;
}
function divide (a,b) {
    if (b==0) {
        alert('Don\'t divide by zero!')
    } else {
        return a/b;
    }
}
function operate (op,a,b) {
    switch (op) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
    }
}
//global variables
const numButtons = document.querySelectorAll('.num');
const opButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
var numClick = '';
var opClick = '';
var display = document.querySelector('.display');
var numArray = [];
var opArray = [];
var numStore = '';
var opStore = '';
var numCount = 0;
var total = 0;

//button event listeners
function numListeners() {
    numButtons.forEach(item => {
        item.addEventListener('click', function() {
            // numArray.push(Number(item.innerHTML));
            //numClick = item.innerHTML;
            if (display.innerHTML == '') { //if nothing has been input
                display.innerHTML += item.innerHTML; //adds string of numbers
            } else if (opArray.length == 0 && display.innerHTML !== ''){
                display.innerHTML += item.innerHTML;
             } else if (opArray.length > 0 && display.innerHTML !== '' && numCount == 0){
                 display.innerHTML = '';
                 display.innerHTML += item.innerHTML;
                 numCount = 1;
             } else if (opArray.length > 0 && numCount == 1){
                display.innerHTML += item.innerHTML;
             }
        })
    })
}
numListeners();

function opListeners() {
    opButtons.forEach(item =>{
        item.addEventListener('click', function () {
            // opArray.push(item.innerHTML);
            //opClick = item.innerHTML;
            if (numCount > 0) {
                numStore = display.innerHTML;
                numArray.push(Number(numStore));
                total = (operate(opArray[0],numArray[0], numArray[1]));
                display.innerHTML = total;
                numArray = [total];
                opArray = [item.innerHTML]
                numCount = 0;
            } else {
                opStore = item.innerHTML;
                opArray.push(opStore);
                numStore = display.innerHTML;
                numArray.push(Number(numStore));
            }
            // display.innerHTML += opClick + ' '
        })
    })
}
opListeners();

function equals() {
    equalButton.addEventListener('click', function() {
                numStore = display.innerHTML;
                numArray.push(Number(numStore));
                total += (operate(opArray[0],numArray[0], numArray[1]));
                display.innerHTML = total;
                numArray = [total];
                numCount = 0;
    })
}
equals();

function clear() {
    clearButton.addEventListener('click', function() {
        display.innerHTML = '';
        numClick = '';
        opClick = '';
        numArray = [];
        opArray = [];
    })
}
clear();
//use loop on arrays to execute operate() and when finished with one, delete computed items of array;
function arraysCompute () {
    var total = 0
    var numArrayLength = numArray.length
    if (numArrayLength % 2 !== 0) {
        numArrayLength +=1;
    }
    for (i = 0; i < (numArrayLength/2); i++) {
        var num1 = numArray[0];
        var num2 = numArray[1];
        numArray.shift();
        numArray.shift();
        var op1 = opArray[0];
        opArray.shift();
        total += (operate(op1,num1,num2));
        alert(total);
        
    }
}


