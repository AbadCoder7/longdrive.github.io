
function mainMenuNav(x) {
   if (x == 1) {
      eventgoing = false;
      statstop = false;
      gamerunning = true;
      document.getElementById("main").style.display = "none";
      document.getElementById("death").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("change").style.display = "none";
      setTimeout(randomEvent, 5000);
   }
   else if (x == 2) {
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
      money = 50;
      stat = 900;
      fuel = 1000;
      miles = 0;
      document.getElementById("main").style.display = "block";
      document.getElementById("death").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("change").style.display = "none";
   }
}
document.getElementById("change").style.display = "none";


var score = 0
var highestscore = 0

// score enhancers
var corpses = 0
var genocide = false

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
      
      // score handler
      var scoreadded = 0
      
      scoreadded = scoreadded + miles * 10;
      scoreadded = scoreadded + corpses * 50;
      
      if (genocide == true) {scoreadded = scoreadded + 10000;}
      
      score = scoreadded;
      document.getElementById("dscore").innerHTML = score;
      if (score > highestscore) {
         highestscore = score;
         document.getElementById("highestscore").innerHTML = highestscore;
      }
      
      // clearing stuff
      corpses = 0;
      scoreadded = 0;
      genocide = false;
      
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
