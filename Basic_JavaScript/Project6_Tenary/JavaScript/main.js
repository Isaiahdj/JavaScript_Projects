  
/************************************
***********Functions ***************
************************************/

function Ride_Function() {
    var Height, Can_ride;   //Defines 2 Variables
    Height = document.getElementById("Height").value;   //sets Height to Users input
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";   //Can ride is a boolean function if true the left string displays
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //Displays results to the screen
}

function Vote_Function() {
    var Eligable, Can_vote; //Defines 2 Variables
    Eligable = document.getElementById("Eligable").value;   //Sets Eligable to users input
    //Can_vote is set to a boolean statement where if true then Can_vote = the left string
    Can_vote = (Eligable < 18) ? "So sorry you are just to young":"Congratulations you are eligable";
    document.getElementById("Vote").innerHTML = Can_vote + " to Vote."; //Displays results to Screen
}

/************************************
*************Objects*****************
************************************/
function Vehicle(Make, Model, Year, Color) {    //Definning a standered for Vehicle objects
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  //Defines a new vehicle object under the variable Jack
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //Defines a new vehicle object under the variable Emily
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");   //Defines a new vehicle object under the variable Erik
function myFunction() { //Makes a function that gets and diplays Erik's Vehicle specs
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik Drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Animals(Type, Color, Age) {    //Sets a standard for an Animal object
    this.Animals_Type = Type;
    this.Animals_Color = Color;
    this.Animals_Age = Age;
    this.Change_Age = function (age) {  //This alows the capability to change an animals age
        this.Animals_Age = age;
    }
}
var George = new Animals("Monkey", "Brown", 13);    //Defines a new Animal object named George
var Buck = new Animals("Rhino", "Silver", 5);   //Defines a new Animal object named Buck
var Turtle = new Animals("Hamster", "Auburn", 3);   //Defines a new Animal object named Turtle
function BuckageChange() {  //This function allows the user to change Buck's age
    var buck = document.getElementById("Age_Change").value; //sets the variable buck to users input
    Buck.Change_Age(buck);  //calls the change age function nested in the object to change Buck's age
    document.getElementById("New_Buck").innerHTML = //this displays results to the screen
    "George is a " + George.Animals_Color + "-colored" + " " + George.Animals_Type + " Who is " + George.Animals_Age + " Years old <br>" +
    "Buck is a " + Buck.Animals_Color + "-colored" + " " + Buck.Animals_Type + " Who is now  " + Buck.Animals_Age + " Years old <br>" +
    "Turtle is a " + Turtle.Animals_Color + "-colored" + " " + Turtle.Animals_Type + " Who is " + Turtle.Animals_Age + " Years old";
}

function NewandThis() { //this function when its called diplays all Animal objects
    document.getElementById("New_and_This").innerHTML =
    "George is a " + George.Animals_Color + "-colored" + " " + George.Animals_Type + " Who is " + George.Animals_Age + " Years old <br>" +
    "Buck is a " + Buck.Animals_Color + "-colored" + " " + Buck.Animals_Type + " Who is " + Buck.Animals_Age + " Years old <br>" +
    "Turtle is a " + Turtle.Animals_Color + "-colored" + " " + Turtle.Animals_Type + " Who is " + Turtle.Animals_Age + " Years old";
}

function Randomnum() {  //this function has a nested function that returns a random number between 1 & 100 then displays it
    document.getElementById("Nested_Function").innerHTML = Random();    //displays results of the nested function Random()
    function Random() { //First nested function
        var ranum = 1;  //defines and sets ranum
        function Plus_Random() {ranum += (Math.round (Math.random() * 100))}    // nested function that sets ranum to a random number
        Plus_Random(); // calls this nested function
        return ranum;
    }
}