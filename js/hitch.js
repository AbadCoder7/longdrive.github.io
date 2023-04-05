function treeMsg(x) {
   if (x == 1) {
      evpop = '<p class="evmes">You managed to successfully climb over the tree</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
      document.getElementById("evn").innerHTML = "Fallen Tree";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 2) {
      evpop = '<p class="evmes">Opon attempting to climb over the tree you the car got damaged</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
      document.getElementById("evn").innerHTML = "Fallen Tree";
      stat = stat - 150;
      document.getElementById("evopts").innerHTML = evpop;
   }
}


function deerMsg(x) {
   if (x == 1) {
      evpop = '<p class="evmes">Deer killed successfully</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
      document.getElementById("evn").innerHTML = "Crossing Deer";
      document.getElementById("evopts").innerHTML = evpop;
      deerkilled = true;
   }
   else if (x == 2) {
      evpop = '<p class="evmes">Deer hit, Car damaged</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
      document.getElementById("evn").innerHTML = "Crossing Deer";
      document.getElementById("evopts").innerHTML = evpop;
      var i = 0
      fuel = fuel - 20;
      i = fuel / 10;
      document.getElementById("fuel").innerHTML = i;
   }
   nutr + 5;
}

function familyMsg(x, y) {
   if (x != y) {
      evpop = "<p class='evmes'>They're all dead :D</p><p class='evopt' onclick='contRoad()'>Continue on the road</p>";
      document.getElementById("evn").innerHTML = "Family Crossing";
      document.getElementById("evopts").innerHTML = evpop;
      nutr = 1000;
      // You know why this is here
   }
   else if (x == y) {
      evpop = '<p class="evmes">Your hood has been damaged by your actions</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
      document.getElementById("evn").innerHTML = "Family Crossing";
      document.getElementById("evopts").innerHTML = evpop;
      stat = stat - 100;
   }
}

function mysteryMsg(x) {
   if (x == 1) {
      var moneyadded = 0
      moneyadded = Math.floor(Math.random() * 130) + 20;
      money = money + moneyadded;
      
      evpop = "<p class='evmes'>It contained $"+moneyadded+"!</p><p class='evopt' onclick='contRoad()'>Continue on the road</p>";
      document.getElementById("evn").innerHTML = "Mysterious Item";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 2) {
      evpop = "<p class='evmes'>It contained a can of beans!</p><p class='evopt' onclick='contRoad()'>Continue on the road</p>";
      document.getElementById("evn").innerHTML = "Mysterious Item";
      document.getElementById("evopts").innerHTML = evpop;
      
      nutr = nutr + 100;
   }
   else if (x == 3) {
      evpop = "<p class='evmes'>Whoops, it was an explosive!</p><p class='evopt' onclick='contRoad()'>Continue on the road</p>";
      document.getElementById("evn").innerHTML = "Mysterious Item";
      document.getElementById("evopts").innerHTML = evpop;
      
      stat = stat - 300;
   }
   else if (x == 3) {
      evpop = "<p class='evmes'>It contained a gasoline can!</p><p class='evopt' onclick='contRoad()'>Continue on the road</p>";
      document.getElementById("evn").innerHTML = "Mysterious Item";
      document.getElementById("evopts").innerHTML = evpop;
      
      stat = stat - 300;
   }
}

function hurtmanMsg(x) {
   if (x == 1) {
      var moneyadded = 0
      moneyadded = Math.floor(Math.random() * 30) + 20;
      money = money + moneyadded;
      
      evpop = "<p class='evmes'>You borrowed $"+moneyadded+"</p><p class='evopt' onclick='contRoad()'>Continue on the road</p>";
      document.getElementById("evn").innerHTML = "Injured Man";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 2) {
      evpop = "<p class='evmes'>The road becomes ever more red</p><p class='evopt' onclick='contRoad()'>Continue on the road</p>";
      document.getElementById("evn").innerHTML = "Injured Man";
      document.getElementById("evopts").innerHTML = evpop;
      
      nutr = nutr + 50;
   }
}

var hit1 = function() {
   statstop = true;
   document.getElementById("event").style.display = "block";
   var j = 0
   j = Math.floor(Math.random() * 50) + 1;
   evpop = '<p class="evmes">The Hitchhiker gives you $' + j + ' for your kindness</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
   document.getElementById("evn").innerHTML = "Hitchhiker";
   document.getElementById("evopts").innerHTML = evpop;
   money = money + j;
}
var hit2 = function() {
   statstop = true;
   document.getElementById("event").style.display = "block";
   evpop = '<p class="evmes">The Hitchhiker thanks you for your kindness and</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
   document.getElementById("evn").innerHTML = "Hitchhiker";
   document.getElementById("evopts").innerHTML = evpop;
   money = money + j;
}
var hit3 = function() {
   statstop = true;
   document.getElementById("event").style.display = "block";
   stat = stat - 20;
   evpop = '<p class="evmes">The Hitchhiker attacks you and breaks a headlight</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
   document.getElementById("evn").innerHTML = "Hitchhiker";
   document.getElementById("evopts").innerHTML = evpop;
   money = money + j;
}
