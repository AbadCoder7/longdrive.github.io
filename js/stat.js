var stat = 900
var fuel = 1000
var miles = 0

var nutr = 1000
var food = 2
var money = 150

var corpses = 0
var genocide = false

var bankcash = 0

// upgrades
var engine = 0
var body = 0

// technical things
const ver = "v0.5.1"

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
   if (money > 999) {money = 999;}
   
   if (corpses >= 15) {genocide = true; document.getElementById("carbox").innerHTML = "<img src='images/gameplay/punish/car_treachery.gif' class='car'>";}
   else if (corpses >= 10) {genocide = true; document.getElementById("carbox").innerHTML = "<img src='images/gameplay/punish/car_heresy.gif' class='car'>";}
   else if (corpses >= 5) {genocide = true; document.getElementById("carbox").innerHTML = "<img src='images/gameplay/punish/car_gluttony.gif' class='car'>";}
}, 1);
// second update
setInterval(function() {
   if (statstop == false) {
      useFuel();
      useNutr();

      miles = miles + 1;
      
      if (poison != true) {stat = stat - 1;}
      else if (poison == true) {stat = stat - 3;}
      
      bankcash = Math.floor(bankcash * 1.15);
      if (bankcash > 999) {bankcash = 999;}
      
      if (miles < drunkTime && drunkTime != 0) {drunk = true;}
      else {drunk = false;}
      if (miles < poisonTime && poisonTime != 0) {poison = true;}
      else {poison = false;}
      if (miles < highTime && highTime != 0) {high = true;}
      else {high = false;}
      
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


////////////////////////////////////////////////
// effects /////////////////////////////////////
////////////////////////////////////////////////
// Suggested by a close friend

setInterval(function() {
   giveEffects();
   displayEffects();
}, 1);

// Effect Variables
var drunk = false
var poison = false
var high = false
var happy = false

// extras
var drunkTime = 0
var poisonTime = 0
var highTime = 0

// code
function giveEffects() {
   happy = false;
   if (stat >= 800 && nutr >= 850 && fuel >= 900) {happy = true;}
}

document.getElementById("hellsky").style.display = "none";

function displayEffects() {
   if (drunk == true) {document.getElementById("ei1").style.display = "block";}
   else if (drunk == false) {document.getElementById("ei1").style.display = "none";}
   
   if (poison == true) {document.getElementById("ei2").style.display = "block";}
   else if (poison == false) {document.getElementById("ei2").style.display = "none";}
   
   if (high == true) {
      document.getElementById("ei3").style.display = "block";
      document.getElementById("hellsky").style.display = "block";
   }
   else if (high == false) {
      document.getElementById("ei3").style.display = "none";
      document.getElementById("hellsky").style.display = "none";
   }
   
   if (happy == true) {document.getElementById("ei4").style.display = "block";}
   else if (happy == false) {document.getElementById("ei4").style.display = "none";}
   
   if (genocide == true) {document.getElementById("ei5").style.display = "block";}
   else if (genocide == false) {document.getElementById("ei5").style.display = "none";}
}

function informEffects(effect) {
   if (effect == 'drunk') {document.getElementById("einfo").innerHTML = "Drunk - Enhances your driving ability";}
   else if (effect == 'poison') {document.getElementById("einfo").innerHTML = "Poison - Gradually Lowers Status even more";}
   else if (effect == 'high') {document.getElementById("einfo").innerHTML = "High - Enlists psychedelics";}
   else if (effect == 'happy') {document.getElementById("einfo").innerHTML = "Happy - Most stats are at a great rate";}
   else if (effect == 'bloodlust') {document.getElementById("einfo").innerHTML = "Bloodlust - It's a lovely day outside isn't it?";}
   else {document.getElementById("einfo").innerHTML = "";}
}


window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "113") {
        alert("You pressed 'enter'.");
    }
}
