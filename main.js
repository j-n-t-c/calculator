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
        return a/b;
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
            if (b==0) {
                return 'error: cannot divide by 0';
            } else {
            return divide(a,b);
            }
            break;
    }
}
//global variables
const numButtons = document.querySelectorAll('.num');
const opButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const decimalButton = document.querySelector('.decimal');
const opDisplay = document.querySelector('.opdisplay');
var display = document.querySelector('.display');
var numStore = [];
var opStore = '';
var paired = false;
var eqed = false;
var total = 0;
var decimalOn = false


function numListeners() {
    numButtons.forEach(item => {
        item.addEventListener('click', function() {
            if (item.innerHTML == '0' && display.innerHTML == '0') {
                display.innerHTML += '';
            } else if (item.innerHTML == '.' && display.innerHTML.includes('.') == true) {
                display.innerHTML += '';
            } else if (item.innerHTML == '.' && display.innerHTML == '') {
                display.innerHTML += ('0' + item.innerHTML);
            } else if (display.innerHTML == '') { //enters first number in blank display
                display.innerHTML += item.innerHTML;
            } else if (display.innerHTML !== '' && opStore == '') { //enters addtl numbers if no op selected
                display.innerHTML += item.innerHTML;
            } else if (display.innerHTML !== '' && opStore !== '' && paired == false) { //clears display and enters first num clicked
                display.innerHTML = item.innerHTML;               
                paired = true;                                 //a pair has been input
            } else if (display.innerHTML !== '' && opStore !== '' && paired == true){ //allows prev number to continue
                display.innerHTML += item.innerHTML;
            }
                
        })
    })
}
numListeners();

function opListeners() {
    opButtons.forEach(item =>{
        item.addEventListener('click', function () {
            if (paired == false && eqed == false) {
                opStore = item.innerHTML;
                opDisplay.innerHTML = opStore;
                numStore.push(Number(display.innerHTML))
            } else if (paired == true) {
                numStore.push(Number(display.innerHTML))
                total = operate(opStore,numStore[0],numStore[1]);
                display.innerHTML = parseFloat(total.toFixed(3));
                numStore = [total];
                opStore = item.innerHTML;
                opDisplay.innerHTML = opStore;
                paired = false;
                eqed = true;
            } else if (paired == false && eqed == true) {
                opStore = item.innerHTML;
                opDisplay.innerHTML = opStore;
            }
        })
    })
}
opListeners();

function equals() {
    equalButton.addEventListener('click', function() {
            if (paired == true) {
                numStore.push(Number(display.innerHTML))
                total = operate(opStore,numStore[0],numStore[1]);
                display.innerHTML = parseFloat(total.toFixed(3));
                paired = false;
                eqed = true;
                opDisplay.innerHTML = '';
                numStore = [];
                // opStore = '';
                total = 0;
            }
    })
}
equals();

function clear() {
    clearButton.addEventListener('click', function() {
        display.innerHTML = '';
        numStore = [];
        opStore = '';
        paired = false;
        eqed = false;
        total = 0;
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


