//Global Variable
var x = 33
function add_Num() {
    var y = 13; //Local Variable
    document.getElementById("Addition").innerHTML = x + y + "<br>"; //This adds the local and global variable toghether and prints to screen
}

function add_fail() {   //This uses Console.log
    Console.log(x + y);
}
add_fail(); // this calls the function

//This function uses the users time and decides around what mealtime it is
function Mealtimes() { 
    if (new Date().getHours() < 10) {   //If less then 10 then go to next statement
       if (new Date().getHours() >5) {  //if greater then 5 then the result is breakfast
           document.getElementById("Meals").innerHTML = "It is in range for Breakfast";
       } else { //if not greater then 5 result is it is too early
           document.getElementById("Meals").innerHTML = "Go back to sleep because it is too early for a meal";
       }
    }else if (new Date().getHours() < 15) { //if less then 15 and > 10 its lunch time
        document.getElementById("Meals").innerHTML = "Lunch time";
    }else if (new Date().getHours() < 20){  //if < 20 and > 15 its Dinner time
        document.getElementById("Meals").innerHTML = "Dinner time";
    }else { //else its too late
        document.getElementById("Meals").innerHTML = "It is too late";
    }
}
 //This function is just like the previous mealtime it just takes in user input instead
function Mealtimes_User() {
    Time = document.getElementById("User_Time").value;  //this declares a variable Time and sets it to the user's input
    if (isNaN(Time)) {  //This is a fail safe too make sure its an actual time in military time
        document.getElementById("Meals_2").innerHTML = "Please enter a number that coralates to an hour realated to military time";
    }else if (Time < 10) {
       if (Time >5) {
           document.getElementById("Meals_2").innerHTML = "It is in range for Breakfast";
       } else {
           document.getElementById("Meals_2").innerHTML = "Go back to sleep because it is too early for a meal";
       }
    }else if (Time < 15) {
        document.getElementById("Meals_2").innerHTML = "Lunch time";
    }else if (Time < 20){
        document.getElementById("Meals_2").innerHTML = "Dinner time";
    }else {
        document.getElementById("Meals_2").innerHTML = "It is too late";
    }
}

//This function gets the users time and based off the time replys to the user
function Time_function() {
    var time = new Date().getHours(); //sets the variable time to the user's time
    var Reply;  //Declares a new variable Reply
    if (time < 12 == time > 0){ //if time is < 12 and > 0 then reply is set to morning time
        Reply = "It is morning time!";
    }else if (time > 12 == time < 18) { //if time is > 12 and < 18 then reply is set to afternoon
        Reply = "It is the afternoon";
    }else { //else reply is set to evening
        Reply ="It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;   //displays Reply to the screen
}