WANT TO DO:
//add backspace
have a decimal automatically put '0' before it when it should. had to remove this functionality because
I couldn't get it to work without affecting numerical input and if...else if statements were getting
out of hand so I gave up and removed it
//change display so total comes up separate from previous input number. should 'fade' last input maybe. also,
should be obvious via a 'blink' or some notation that a new number was entered if second number is same (6 + 6 for example)
NOTES: 
when changing item.innerHTML in JS, if there is already something inside (div inside a div for example), it will use that. so try not to calculate based off display.innerHTML in future because now you can't have alternate things inside



COLOR SCHEMES:
1. dark mode
body {
    background-color: rgb(41, 40, 40);
    }
header {
    color: #7193f0bb;
    }
button {
    background-color: #875fcf;
    color: #9fa5bd;
    }
.grid-display {
    background-color: #aec9d350;
    }
.grid-opdisplay {
    background-color: #aec9d350;
    color: #342668a9;
    }
footer {
    color: #7193f0bb;
    }

2. tealish
body {
        background-color: teal;
    }
button {
        background-color: rgba(59, 59, 224, 0.726);
        color: #9fa5bd;
    }
header {
        color: rgba(20, 4, 18, 0.61);
    }
.grid-display {
        background-color: #1b4c5e49;
        }
.grid-opdisplay {
        background-color: #1b4c5e49;
        color: #342668a9;
        }
footer {
        color: rgba(20, 4, 18, 0.61);
    }

3. white/light
body {
        background-color: rgb(255, 255, 255);
    }
button {
        background-color: rgba(19, 51, 231, 0.829);
        color: white;
    }
header {
        color: rgba(16, 9, 43, 0.692);
    }
.grid-display {
        background-color: #48798b2f;
        }
.grid-opdisplay {
        background-color: #48798b2f;
        color: #342668a9;
        }
footer {
        color: rgba(16, 9, 43, 0.692);
    }