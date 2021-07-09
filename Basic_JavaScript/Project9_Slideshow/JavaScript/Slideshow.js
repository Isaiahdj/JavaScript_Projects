// **********Countdown***************
function countdown() {
    var seconds = document.getElementById("seconds").value; // This displays the numbers as they countdown
    function tick() {   //Creates a function that ticks down users value
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout (tick, 1000);
    if (seconds == -1) {    //If this happens a popup appears
        alert ("Times up!");
    }
    }
    tick(); // calls the tickdown function
}
/***********************************
***********Slide show **************
************************************/
//sets a variable for all functions
var slideIndex = 1;

//calls the function showslides
runSlides(slideIndex);

//changes slide index to match curent slide if the next or previous buttons were clicked
function N_P_slides(n) {
    runSlides(slideIndex += n);
}

//changes slide index if the dots were clicked
function dotSlide(n) {
    runSlides(slideIndex = n);
}

//changes the slides and this function gets called at the beggining of this page
function runSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Slides");
    var Marker = document.getElementsByClassName("marker");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < Marker.length; i++) {
        Marker[i].className = Marker[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    Marker[slideIndex-1].className += " active";
}