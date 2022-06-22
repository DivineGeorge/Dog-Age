function calculateDogAge() {
    var myAge = document.getElementById("years").value;
    
    var dogAge = ((myAge - 2) * 4) + 21;

    document.getElementById("wynik").innerHTML = ("Your dog is " + dogAge + " years old in human years.");
}