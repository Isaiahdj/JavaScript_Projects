  
function my_Dictionary() { // This makes my first dictionary
    var Animal = {  //Name of dictionary
        Species: "Pig", //dictionary index
        Color: "Pink",  //dictionary index
        Age: 13,    //dictionary index
        Sound: "oink"   //dictionary index
    };
    //The line below gets all the elements in the dictionary and prints them on a new line
    document.getElementById("Dictionary").innerHTML = Animal.Species + "<br>" + Animal.Color + "<br>" + Animal.Sound + "<br>" + Animal.Age;
}