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