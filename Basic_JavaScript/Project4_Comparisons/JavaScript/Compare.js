/************************************
***********Functions ***************
************************************/

//Functions that provide whether a value is not a number
function NaN_Function_1() {
    document.getElementById("NaN_Test_1").innerHTML = isNaN('0/0');
}
function NaN_Function_2() {
    document.getElementById("NaN_Test_2").innerHTML = isNaN('3');
}
//Function that makes a number to large it comes out as +/- infintity
function Possitive_inf() {
    document.getElementById("Infinite").innerHTML = 2E310;
}
function Negative_inf() {
    document.getElementById("Neg_Infinite").innerHTML = -2E310;
}
//Functions that are like providing a opposit effect Not
function Not_True() {
    document.getElementById("Not_true").innerHTML = !(3 > 4);
}
function Not_False() {
    document.getElementById("Not_false").innerHTML = !(3 < 4);
}
/*********************************************************
***********Writes Directly To The HTML Doc **************
*********************************************************/

//Gets the type of something (string, number etc)
document.write(typeof 3,"<br>");
//<>comparisons True/False
document.write(10>3,"<br>");
document.write(10<3,"<br>");
//Combines the String 33 and adds 3 to the end getting 333
document.write("33"+3,"<br>");
//Comparisons equal too And Type / Value equal too
document.write(3==3,"<br>");
document.write(4==3,"<br>");
document.write(4===4,"<br>");
document.write("5"===4,"<br>");
document.write("4"===4,"<br>");
document.write("4"==="5","<br>");
//Boolean statements And / Or
document.write(4 > 3 && 4 < 5,"<br>");
document.write(4 > 3 && 4 > 5,"<br>");
document.write(4 > 3 || 4 > 5,"<br>");
document.write(4 < 3 || 4 > 5,"<br>");

/************************************
*********CONSOLE LOGS ***************
************************************/

//Adds 3+3 and logs 6
console.log(3 + 3);
//Logs True
console.log(3 < 3);