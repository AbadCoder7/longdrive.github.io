
function mainMenuNav(x) {
   if (x == 1) {
      eventgoing = false;
      statstop = false;
      gamerunning = true;
      document.getElementById("main").style.display = "none";
      document.getElementById("death").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("achi").style.display = "none";
      document.getElementById("change").style.display = "none";
      setTimeout(randomEvent, 20000);
   }
   else if (x == 2) {
      document.getElementById("main").style.display = "none";
      document.getElementById("death").style.display = "none";
      document.getElementById("achi").style.display = "none";
      document.getElementById("change").style.display = "none";
      document.getElementById("about").style.display = "block";
   }
   else if (x == 3) {
      document.getElementById("achi").style.display = "block";
      document.getElementById("main").style.display = "none";
      document.getElementById("death").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("change").style.display = "none";
   }
   else if (x == 4 && gamerunning == false) {
      document.getElementById("main").style.display = "none";
      document.getElementById("death").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("achi").style.display = "none";
      document.getElementById("change").style.display = "block";
   }
   else if (x == 99) {
      nutr = 1000;
      money = 50;
      stat = 900;
      fuel = 1000;
      miles = 0;
      document.getElementById("main").style.display = "block";
      document.getElementById("death").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("achi").style.display = "none";
      document.getElementById("change").style.display = "none";
   }
}
document.getElementById("change").style.display = "none";

function die() {
   if (fuel <= 0 || stat <= 0 || nutr <= 0) {
      died = true;
      if (fuel <= 0) {document.getElementById("whyusuck").innerHTML = "You ran out of fuel";}
      else if (stat <= 0) {document.getElementById("whyusuck").innerHTML = "Your car broke down";}
      else if (nutr <= 0) {document.getElementById("whyusuck").innerHTML = "You starved to death";}
      
      eventgoing = true;
      statstop = true;
      gamerunning = false;
      evpop = "";
      document.getElementById("death").style.display = "block";
      score = miles;
      document.getElementById("dscore").innerHTML = score;
      if (score > bestscore) {
         bestscore = score;
         //document.getElementById("bestscore").innerHTML = bestscore;
      }
      document.getElementById("event").style.display = "none";
      document.getElementById("shop").style.display = "none";
   }
}

function mainBack() {
   document.getElementById("main").style.display = "block";
   document.getElementById("death").style.display = "none";
   document.getElementById("about").style.display = "none";
   document.getElementById("achi").style.display = "none";
   document.getElementById("change").style.display = "none";
}
document.getElementById("about").style.display = "none";

var score = 0
var bestscore = 0