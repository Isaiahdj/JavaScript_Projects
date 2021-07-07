
//Addition
function mathAdd(a, b) {    //This function takes into 2 parameters and adds them toghether
    return a + b;
}
//Subtraction
function mathSubtract(a, b) {   //This function takes into 2 parameters and subtracts a - b
    return a - b;
}
function mathAdd_Ret(a, b) {
    document.getElementById("Add") .innerHTML ="3 + 10 = " + mathAdd(a, b); //This function prints the results of a + b in this case 3 + 10
}
function mathSubt_Ret(a, b) {
    document.getElementById("Subtr") .innerHTML ="3 - 10 = " + mathSubtract(a, b);  //This function prints the results of a - b in this case 3 - 10
}