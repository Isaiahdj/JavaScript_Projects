/***************************************
 ***********Global Variables************
 **************************************/
var Pt_1 = "I have made "; // defines a variable and sets it to a string
var Pt_2 = "complete sentence ";    // defines a variable and sets it to a string
var Pt_3 = "that form a ";  // defines a variable and sets it to a string
var Pt_4 = "a string of words ";    // defines a variable and sets it to a string
var hello = "hello world";  // defines a variable and sets it to a string
var Find_x = "This is just a string (x) for you to search the possition of the letter in ()";   // defines a variable and sets it to a string

document.write(Pt_1 + "<br>" + Pt_2 + "<br>" + Pt_3 + "<br>" + Pt_4);   //This displays all the strings that will be concatenated in the right order to form a sentance

/***************************************
 **************Functions****************
 **************************************/
function Cat_fun() {    //This function concationates Pt_1 - Pt_4 together
    var correct_form = Pt_1.concat(Pt_4, Pt_3, Pt_2);   //create a local variable and sets it to the fully concatenated sentance
    document.getElementById("Concated").innerHTML = correct_form;   //displays correct_form to th screen
}
function Slice_fnc() {  //This functions slices a word out of a string
    var section = Pt_3.slice(5, 9); //This creates a local variable and sets it to a slice of the global variable Pt_3 to get "form"
    document.getElementById("Sliced").innerHTML = section;  //Displays the variable section to the screen
}
function Upper_case() { //This function turns a whole string uppercase
    var upper = hello.toUpperCase();    //This create a new local variable and sets it to the string hello but completly upercase
    document.getElementById("Upper").innerHTML = upper; //displays the variable upper to the screen
}
function Search_fnc() { //This function takes a string and performs a search for a letter
    var search = Find_x.search("x");    //This creates a new variable and sets it to the location where it found x, in this case 23
    document.getElementById("Search").innerHTML = "You found x in the " + search + "rd possition";  //displays results to the screen
}
function To_String() {  //this function takes a number and turns it into a string
    var Y = 333;    //creates a new variable and sets it to 333
    document.getElementById("to_stri").innerHTML = Y.toString();    //This function displays 333 as a string which to be fair looks the same
}
function To_Precise() { //This function takes a large decimal and limits it to 5 numbers total including the numbers before the decimal
    var x = 333.333333333333333333; //sets a local variable to a large decimal
    document.getElementById("Percision").innerHTML = x.toPrecision(5);  //Displays x to screen but limits it to 5 numbers
}
function fnc_Fixed() {  // This Function sets the decimal to a fixed amount after the point
    var x = 33.123456789    //sets the local variable to a decimal
    document.getElementById("Fixed").innerHTML = x.toFixed(3);  //displays x but limits the number to 3 after the decimal point
}
function Value_fnc() {  // this function displays the value of Pt_4
    var val_4 = Pt_4.valueOf()
    document.getElementById("value").innerHTML = val_4;
}