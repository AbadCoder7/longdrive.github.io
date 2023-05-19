
function mainMenuNav(x) {
   if (x == 1) {
      document.getElementById("carbox").innerHTML = "<img src='images/car.gif' class='car'>";
      eventgoing = false;
      statstop = false;
      gamerunning = true;
      corpses = 0;
      scoreadded = 0;
      genocide = false;
      document.getElementById("main").style.display = "none";
      document.getElementById("death").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("change").style.display = "none";
      setTimeout(randomEvent, 5000);
   }
   else if (x == 2 && corpses > 943589034859) {
      document.getElementById("main").style.display = "none";
      document.getElementById("death").style.display = "none";
      document.getElementById("change").style.display = "none";
      document.getElementById("about").style.display = "block";
   }
   else if (x == 4 && gamerunning == false) {
      document.getElementById("main").style.display = "none";
      document.getElementById("death").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("change").style.display = "block";
   }
   else if (x == 99) {
      nutr = 1000;
      money = 150;
      stat = 900;
      fuel = 1000;
      miles = 0;
      corpses = 0;
      genocide = false;
      
      bankcash = 0;
      totalMoney = 0;
      carbroken = 0;
      hitchhikers_pickedup = 0;
      body = 0;
      engine = 0;
      
      document.getElementById("main").style.display = "block";
      document.getElementById("death").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("change").style.display = "none";
   }
}
document.getElementById("change").style.display = "none";


var score = 0
var highestscore = 0

// rank variables
var hitchhikers_pickedup = 0 // hitchhikers picked up in one session
var carbroken = 0 // times the car has been broken
var totalMoney = 0 // total money earned

function die() {
   if (fuel <= 0 || stat <= 0 || nutr <= 0) {
      died = true;
      var rank = "None"
      var color = "white"
      if (miles >= 10000) {rank = "Never Stopped Once"; color: "purple";}
      else if (genocide == true) {rank = "Psycho"; color = "red";}
      else if (miles >= 500) {rank = "True Driver"; color = "skyblue";}
      else if (miles <= 75) {rank = "Death Wish"; color = "yellow";}
      else if (carbroken >= 7) {rank = "Wounded"; color: "white";}
      else if (totalMoney >= 750) {rank = "Millionaire"; color: "green";}
      else if (miles >= 300) {rank = "Long Driver"; color = "lightblue";}
      else if (hitchhikers_pickedup >= 15) {rank = "Taxi"; color = "orange";}
      else if (miles >= 100) {rank = "Bad Driver"; color = "blue";}
      else if (corpses >= 1) {rank = "Uncovered Tracks"; color = "pink";}
      else {rank = "Boring"; color: "gray";}
      
      document.getElementById("finishrank").innerHTML = "Rank: <span style='color: "+color+";'>" + rank + "</span>";

      eventgoing = true;
      statstop = true;
      gamerunning = false;
      evpop = "";
      document.getElementById("death").style.display = "block";
      
      score = miles;
      document.getElementById("dscore").innerHTML = score;
      if (score > highestscore) {
         highestscore = scoreadded;
         document.getElementById("highestscore").innerHTML = highestscore;
      }
      
      // clearing stuff
      
      document.getElementById("event").style.display = "none";
      document.getElementById("shop").style.display = "none";
   }
}

function mainBack() {
   document.getElementById("main").style.display = "block";
   document.getElementById("death").style.display = "none";
   document.getElementById("about").style.display = "none";
   document.getElementById("change").style.display = "none";
}
document.getElementById("about").style.display = "none";


window.onload = function() {
   setTimeout(endofIteration1, 1000);
}

var endofIteration1 = function() {document.getElementById("ssc1").style.display = "none";}
function endofIteration2() {document.getElementById("ssc2").style.display = "none";}


