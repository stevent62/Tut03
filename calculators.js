let temp = 0; 
let tempOper = "";  
let temDispl = "";
let click = 0;
let tempNum1 =  "";
let tempNum2 = "";



/** Action: change the background color when the operator button is clicked */
/** add the class .operatorClick defined in the Javascript
 * save the operator to the tempOper and used tempOper for the calculation 
*/
function operatorOnClick(){
    this.classList.add("operatorClick");
    tempOper += this.textContent;
    click += 1;
    if (tempOper.length > 1){
        tempOper = "";
        tempOper += this.textContent;
        click -= 1;
    };

    if (click == 2){
        res = calculation(tempNum1, tempNum2, tempOper);
        displayValue.textContent = res;
        click = 1; 
        tempNum1 = res;
        tempNum2 = "";
    }
}

/** Action: When the button is clicked, remove the backgroud color of other operator button */
function operatorRemove(){
    let operBtns = document.getElementsByClassName("oper");
    for (let j = 0; j < operBtns.length; j++) {
        if (operBtns[j] !== this){
            operBtns[j].classList.remove("operatorClick")
        }
    }
}

/** Display the value on the display screen when the digit button is clicked  
 * after clicking the operator button, when the user input new digit, the display will replace the new numerical value
 * When the user clicked operator after an expression, the result of the calculation will be displayed
 * Also, check the number have multiple decimal place, if the number already have one decimal, the decimal will not append on the value display
*/
function numberDisplay(){
    let res = 0;
    let decInedx = 0;
    temDispl = this.textContent;

    if (display.textContent == 0){
        displayValue.textContent = temDispl
    }
    else{
        decIndex = displayValue.textContent.indexOf('.');
        if (temDispl == "." && decIndex > -1){

        } else{
            displayValue.textContent += temDispl;
        }
    }

    if (click == 0){ 
        tempNum1 = displayValue.textContent;
    }else if (click ==1){
        displayValue.textContent = 0;
        displayValue.textContent = temDispl;
        tempNum2 = displayValue.textContent;
        click += 1;
    }else if (click == 2){
        tempNum2 = displayValue.textContent;
    }

    console.log(click)
    console.log(tempNum1)
    console.log(tempNum2)

}

// the calculation 
function calculation(num1, num2, oper){
    let res = 0;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (oper){
        case "+":
            res = num1 + num2;
            return res;
            break;
        case "-":
            res = num1 - num2;
            return res;
            break; 
        case "*":
            res = num1 * num2;
            return res;
            break;
        case "/":
            res = num1 / num2;
            return res;
            break 
    }
}

// When the user click equal, the calculation result will be display on the display screen
function equalOnClick(){
    let res = 0;
    res = calculation(tempNum1, tempNum2, tempOper);
    displayValue.textContent = res;
    click = 1; 
    tempNum1 = res;
    tempNum2 = "0";
    tempOper = "+";
}

// When the user click equal button, the background color of the operator will be removed 
function equalClear(){
    let operBtns = document.getElementsByClassName("oper");
    for (let j = 0; j < operBtns.length; j++){
        operBtns[j].classList.remove("operatorClick")
    }
}

// When the user click clear button, the number in the display will be 0, also the value of the temp number will change 
function clearDisplay(){
    displayValue.textContent = 0;
    tempNum1 = 0;
    tempNum2 = 0;
    tempOper = "";
    click = 0;
 /**   if (click == 0){
        tempNum1 = "";
        tempNum2 = "";
        tempOper = "";
    } else if (click == 2){
        tempNum2 = "";
    } 

    */ 
    console.log(click);
    console.log(tempNum1);
    console.log(tempNum2);
}

/** Event Listener: the digit */
document.addEventListener('DOMContentLoaded', function() {
    let digitBtns = document.getElementsByClassName("digit");
    for( let i=0; i<digitBtns.length; i++ ) {
        digitBtns[i].addEventListener('click', numberDisplay);
    }
});


/** Event Listener: the operators (+ / - / * / /) */
document.addEventListener('DOMContentLoaded', function() {
    let operBtns = document.getElementsByClassName("oper");
    for( let i=0; i< operBtns.length; i++ ) {
        operBtns[i].addEventListener('click', operatorOnClick);
        operBtns[i].addEventListener('click', operatorRemove);
        }
});


/**Event Listenser: the clear button */
document.addEventListener('DOMContentLoaded', function() {
    let clearBtns = document.getElementsByClassName("clear");
    for( let i=0; i< clearBtns.length; i++ ) {
        clearBtns[i].addEventListener('click', clearDisplay);
        clearBtns[i].addEventListener('click', equalClear);
        }
});


//** Event Listenser: the decimal Key */
document.addEventListener('DOMContentLoaded', function() {
    let decimalBtns = document.getElementsByClassName("decimal");
    for( let i=0; i< decimalBtns.length; i++ ) {
        decimalBtns[i].addEventListener('click', numberDisplay);
        }
});

/** Event listenser: the equal key */
document.addEventListener('DOMContentLoaded', function() {
    let equalBtns = document.getElementsByClassName("equal");
    for( let i=0; i< equalBtns.length; i++ ) {
        equalBtns[i].addEventListener('click', equalOnClick);
        equalBtns[i].addEventListener('click', equalClear);
        }
});




