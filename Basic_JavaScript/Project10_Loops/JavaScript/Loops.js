//this loop counts to 25
function Call_Loop() {
    var Digit = "";
    var X = 0;
    while(X < 26) { //The code in these brackets will execute till X =26
        Digit += "<br>" + X;
        X++;    //Increments X
    }
    document.getElementById("Loop").innerHTML = Digit;
}
//This function will come back with the length of the string 
//When the user calls it
function strLength() {
    var STR = "Well Hello";
    var L = STR.length;
    document.getElementById("sLength").innerHTML = L;
}

//Global variables
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];   //An array
var Content = "";   //We use this to help display the array
var Y;
//list the array of instruments
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {  //This loop will execute until Y = Instruments.length and every itteration it increments Y
        Content += Instruments[Y] + "<br>";
    }
document.getElementById("List_of_Instruments").innerHTML = Content;
}
//Creating an array
function array_Function() {
    var typeBall = [];
    typeBall[1] = "Tenis"
    typeBall[2] = "Basket"
    typeBall[3] = "Foot"
    typeBall[4] = "volly"
    document.getElementById("Array").innerHTML = "This is a " + typeBall[3] + "ball"
}
//using const to make an object
function constant_Function() {
    const Vehicle = {Make:"Ford", Model:"F-150", Color:"Copper"};   //This is Constant cannot be changed
    Vehicle.Color = "Silver";
    Vehicle.Price = "$32,000";
    document.getElementById("Constant").innerHTML = "Here is the new " + Vehicle.Color + " " +
    Vehicle.Make + " " + Vehicle.Model + " The cost is " + Vehicle.Price
}
//using let to make a variable only for a specific block of code
function let_Function() {
    var A = 13;
    document.getElementById("Var").innerHTML = A;
    {
        let A = 54;
        document.getElementById("Let").innerHTML = A;
    }
    document.getElementById("Var2").innerHTML = A;
}
//Multiplies XZ by 3
function return_Function(XZ) {
    return XZ * 3;
}
//Calls upon and prints the result of the previous functiom
function Return(){
    let R = return_Function(5)
    document.getElementById("Return").innerHTML = R;
}
//using let to make an object
let Car = {
    make: "Ford ",
    model: "Focus ",
    year: "2005 ",
    color: "Copper ",
    price: "$3300.99 ",
    Add : function() {
        return "For only " + this.price
        + "You can Buy a brand new " + this.color 
        + this.year + this.make + this.model;
    }
};
//when user calls this it will print the nested function above
function Data_go() {
    document.getElementById("dataStructure").innerHTML = Car.Add();
}
//A loop with a break and a continue statement 
function Break_Continue() {
    var Count = "";
    var A;
    for (A = 3; A < 36; A += 3) {
        if (A === 15) {
            continue;
        }
        if (A === 33) {
            break;
        }
        Count += A + "<br>";
    }
    document.getElementById("BrCont").innerHTML = Count;
}