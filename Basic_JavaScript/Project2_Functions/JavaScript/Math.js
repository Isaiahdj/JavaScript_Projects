//******************************************************
//********************ADDITION**************************
//******************************************************
function mathAdd(a, b) {    //This function takes into 2 parameters and adds them toghether
    return a + b;
}

function mathAdd_Ret(a, b) {
    document.getElementById("Add") .innerHTML ="3 + 10 = " + mathAdd(a, b); //This function prints the results of a + b in this case 3 + 10
}

//******************************************************
//*******************SUBTRACTION************************
//******************************************************
function mathSubtract(a, b) {   //This function takes into 2 parameters and subtracts a - b
    return a - b;
}

function mathSubt_Ret(a, b) {
    document.getElementById("Subtr") .innerHTML ="3 - 10 = " + mathSubtract(a, b);  //This function prints the results of a - b in this case 3 - 10
}

//******************************************************
//*****************MULTIPLICATION***********************
//******************************************************
function mathMultply(a, b) {    //This function takes into 2 parameters and Multiplys them toghether
    return a * b;
}

function mathMply_Ret(a, b) {   //This function prints the results of a * b in this case 3 * 10 and prints it at the id "Multiply"
    document.getElementById("Multiply") .innerHTML ="3 * 10 = " + mathMultply(a, b);
}

//******************************************************
//********************DIVISION**************************
//******************************************************
function mathDivide(a, b) { //This function takes into 2 parameters and divides a by b
    return a / b;
}

function mathDiv_Ret(a, b) {    //This function prints the results of a / b in this case 3 / 10 and prints it at the id "Divide"
    document.getElementById("Divide") .innerHTML ="3 / 10 = " + mathDivide(a, b);
}

//******************************************************
//********************BIG 4*****************************
//******************************************************
function mathmore() {   //This function prints the results of a math problem that uses +, -, /, and * and prints it at the id Math
    var all = (((3 + 4) * 10) + 5) / 15 - 2;
    document.getElementById("Math") .innerHTML ="(((3 + 4) * 10) + 5) / 15 - 2 = " + all // all is the actual math problem
}

//******************************************************
//******************REMAINDERS**************************
//******************************************************
function modulus_Operator() {   //This function prints therremainder of 25 / 6 and prints it at the id "Remainder"
    var simple_Math = 25 % 6;
    document.getElementById("Remainder") .innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

//******************************************************
//********************NEGATIVE**************************
//******************************************************
function math_Negative() {  //This function prints the results of 2 + 3 but as a negative and prints to id "Neg'
    var Nega = 2 + 3;
    document.getElementById("Neg") .innerHTML = "The negative of 2 + 3 is: " + -Nega;
}

//******************************************************
//**************INCREMENT/DECREMENT*********************
//******************************************************
function increment() {  //This Function increments which essentionaly adds 1
    var inc= 3++;
    document.getElementById("Inc") .innerHTML = "3 incremented by 1 = "+ inc;
}

function decrement() {  //This Function Decrements which essentionaly subtracts 1
    var dec = 3--;
    document.getElementById("Dec") .innerHTML = "3 decremented by 1 = " + dec;
}

//******************************************************
//*********************RANDOM***************************
//******************************************************
function Randomizer() {     //This function gets a random number between 0 and 50 and prints it to the <p> element with the id "Rando"
    var x = (math.random() * 50);
    document.getElementById("Rando") .innerHTML = "Your number is: " + x;
}

//******************************************************
//***********************PI*****************************
//******************************************************
function math_PI() { //This function gets PI 3.1415
    var pie = Math.PI;
    document.getElementById("PIE") .innerHTML = pie;
}