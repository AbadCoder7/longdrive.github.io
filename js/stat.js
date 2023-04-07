var stat = 900
var fuel = 1000
var miles = 0

var nutr = 1000
var food = 2
var money = 150

var corpses = 0
var genocide = false

// technical things
const ver = "v0.4.2"

function statShow() {
   if (stat >= 950) {
      document.getElementById("stat").innerText = "Excellent";
      document.getElementById("shopstat").innerText = "Excellent";
   }
   else if (stat >= 800) {
      document.getElementById("stat").innerText = "Adequate";
      document.getElementById("shopstat").innerText = "Adequate";
   }
   else if (stat >= 550) {
      document.getElementById("stat").innerText = "Moderate";
      document.getElementById("shopstat").innerText = "Moderate";
   }
   else if (stat >= 400) {
      document.getElementById("stat").innerText = "Poor";
      document.getElementById("shopstat").innerText = "Poor";
   }
   else if (stat >= 200) {
      document.getElementById("stat").innerText = "Grim";
      document.getElementById("shopstat").innerText = "Grim";
   }
   else if (stat <= 50) {
      document.getElementById("stat").innerText = "Deathly";
      document.getElementById("shopstat").innerText = "Deathly";
   }
}

setInterval(function() {
   statShow();
   document.getElementById("money").innerHTML = money;
   document.getElementById("shopmoney").innerHTML = money;
   die();
   document.getElementById("ver").innerText = ver;
   document.getElementById("miles").innerHTML = miles;
   
   if (corpses >= 5) {genocide = true;}
   
   if (genocide == false) {document.getElementById("car").style.backgroundImage = "url('images/car.gif')";}
   else if (genocide == true) {document.getElementById("car").style.backgroundImage = "url('images/car_hell.gif')";}
}, 1);
// second update
setInterval(function() {
   if (statstop == false) {
      useFuel();
      useNutr();

      miles = miles + 1;
      stat = stat - 1;
      document.getElementById("miles").innerHTML = miles;
      
   }
}, 1000);
// third update
setInterval(function() {
   if (statstop == false) {stat = stat - 10;}
}, 10000);

function useFuel() {
   var i = 0
   fuel = fuel - 5;
   i = fuel / 10;
   document.getElementById("fuel").innerHTML = i;
   document.getElementById("shopfuel").innerHTML = i;
}
function useNutr() {
   var i = 0
   nutr = nutr - 7;
   i = nutr / 10;
   document.getElementById("nutr").innerHTML = i;
   document.getElementById("shopnutr").innerHTML = i;
}
