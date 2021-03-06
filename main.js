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
                alert('error: cannot divide by 0');
                display.innerHTML = '';
                numStore = [];
                opStore = '';
                opDisplay.innerHTML = '';
                paired = false;
                eqed = false;
                total = 0;
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
const opDisplay = document.querySelector('.grid-opdisplay');
const display = document.querySelector('.grid-display');
var numStore = [];
var opStore = '';
var paired = false;
var eqed = false;
var opeqed = false;
var total = 0;

function numListeners() {
    numButtons.forEach(item => {
        item.addEventListener('click', function() {
            display.style.color = '#8596d862';
            if (item.innerHTML == display.innerHTML) {
                display.style.fontWeight = 'bold';
            } else {
                display.style.fontWeight = '';
            }
                                    //checking for 0s and decimals//
            if (item.innerHTML !== '.' && display.innerHTML[0] == '0' && display.innerHTML.includes('.') == false) { //if starts with zero, can add a . but not a number
                display.innerHTML += '';
            } else if (item.innerHTML == '.' && display.innerHTML.includes('.') == true) { //if there's a . , can't add .
            display.innerHTML += '';
            }
                                     //for entering first numbers up to first operation// 
             else if (display.innerHTML == '') { //enters first number in blank display
                display.innerHTML += item.innerHTML;
            } else if (display.innerHTML !== '' && opStore !== '' && paired == false && eqed == false && numStore.length > 0) { //clears display and enters first num clicked
                display.innerHTML = item.innerHTML;
                paired = true;
            } else if (display.innerHTML !== '' && opStore !== '' && paired == true){ //allows prev number to continue
                display.innerHTML += item.innerHTML;
            }
                                    //if eq button was hit, adding new numbers without new operator resets
              else if (display.innerHTML !== '' && opStore == '=' && paired == false && eqed == true) {
                    display.innerHTML = item.innerHTML;
                    eqed = false;
                    numStore = [];
                    total = 0;
              } else {
                display.innerHTML += item.innerHTML;
              }
        })
    })
}
numListeners();


function opListeners() {
    opButtons.forEach(item =>{
        item.addEventListener('click', function () {
            if (item.innerHTML !== "=") {
                if (paired == false && eqed == true){
                    opStore = item.innerHTML;
                    opDisplay.innerHTML = opStore;
                    eqed = false;
                }
                else if (paired == false) { //when first of pair entered
                    opStore = item.innerHTML; //adds op text to opStore
                    opDisplay.innerHTML = opStore; //displays opStore
                    numStore.push(Number(display.innerHTML)) //pushes first number to array
                } else if (paired == true) { //if running second number to operate
                    numStore.push(Number(display.innerHTML)) //pushes sec num to array
                    total = operate(opStore,numStore[0],numStore[1]); //runs operate function
                    display.innerHTML = parseFloat(total.toFixed(3)); //displays total
                    display.style.color = '#222a46a6';
                    numStore = [total]; //resets array with total as first index
                    opStore = item.innerHTML; //changes opStore to new op
                    opDisplay.innerHTML = '';
                    paired = false; //resets pairing
                } 
            } else {
                    if (paired == true) {
                    numStore.push(Number(display.innerHTML)) //pushes sec num to array
                    total = operate(opStore,numStore[0],numStore[1]); //runs operate function
                    display.innerHTML = parseFloat(total.toFixed(3)); //displays total
                    display.style.color = '#222a46a6';
                    numStore = [total]; //resets array with total as first index
                    opStore = item.innerHTML; //changes opStore to new op
                    opDisplay.innerHTML = '';
                    paired = false; //resets pairing
                    eqed = true;
                     } else {
                        display.innerHTML += '';
                     }
            }
        }) 
    })
}
opListeners();
function clear() {
    clearButton.addEventListener('click', function() {
        display.innerHTML = '';
        numStore = [];
        opStore = '';
        opDisplay.innerHTML = '';
        paired = false;
        eqed = false;
        total = 0;
    })
}
clear();

//puts current year in copyright
var x = new Date();
var y = x.getFullYear();
const copyrightYear = document.getElementById('copyright');
copyrightYear.innerHTML = `© ${y}`;


