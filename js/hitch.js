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
      carbroken++;
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
      carbroken++;
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
      carbroken++;
   }
}

function mysteryMsg(x) {
   if (x == 1) {
      var moneyadded = 0
      moneyadded = Math.floor(Math.random() * 130) + 20;
      money = money + moneyadded;
      totalMoney = totalMoney + moneyadded;
      
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
      carbroken++;
      stat = stat - 300;
   }
   else if (x == 4) {
      evpop = "<p class='evmes'>It contained a gasoline can!</p><p class='evopt' onclick='contRoad()'>Continue on the road</p>";
      document.getElementById("evn").innerHTML = "Mysterious Item";
      document.getElementById("evopts").innerHTML = evpop;
      
      fuel = fuel + 500;
   }
}

function hurtmanMsg(x) {
   if (x == 1) {
      var moneyadded = 0
      moneyadded = Math.floor(Math.random() * 30) + 20;
      money = money + moneyadded;
      totalMoney = totalMoney + moneyadded;
      
      evpop = "<p class='evmes'>You borrowed $"+moneyadded+"</p><p class='evopt' onclick='contRoad()'>Continue on the road</p>";
      document.getElementById("evn").innerHTML = "Injured Man";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 2) {
      evpop = "<p class='evmes'>The road becomes ever more <span style='color: red;'>red</span></p><p class='evopt' onclick='contRoad()'>Continue on the road</p>";
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
   totalMoney = totalMoney + j;
}
var hit2 = function() {
   statstop = true;
   document.getElementById("event").style.display = "block";
   evpop = '<p class="evmes">The Hitchhiker thanks you for your kindness</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
   document.getElementById("evn").innerHTML = "Hitchhiker";
   document.getElementById("evopts").innerHTML = evpop;
}
var hit3 = function() {
   statstop = true;
   document.getElementById("event").style.display = "block";
   stat = stat - 20;
   evpop = '<p class="evmes">The Hitchhiker attacks you and breaks a headlight</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
   document.getElementById("evn").innerHTML = "Hitchhiker";
   document.getElementById("evopts").innerHTML = evpop;
   carbroken++;
}


function copMsg(x) {
   if (x == 1) {
      var badChance = 0
      badChance = Math.floor(Math.random() * 3) + 1;
      
      if (badChance == 1) {
         var sbMoney = 0
         sbMoney = Math.floor(Math.random() * 100) + 20;
         money = money - sbMoney;
         
         evpop = '<p class="evmes">The cop fines you $'+sbMoney+'</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
         document.getElementById("evn").innerHTML = "Police Car";
         document.getElementById("evopts").innerHTML = evpop;
         
      }
      else if (badChance == 2 && corpses >= 1) {
         evpop = '<p class="evmes">The cop accuses you of manslaughter</p><p class="evopt" onclick="contRoad()">End Him</p>';
         document.getElementById("evn").innerHTML = "Police Car";
         document.getElementById("evopts").innerHTML = evpop;
         corpses++;
         nutr = nutr + 300;
      }
      else {
         evpop = '<p class="evmes">The cop passes by</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
         document.getElementById("evn").innerHTML = "Police Car";
         document.getElementById("evopts").innerHTML = evpop;
      }
   }
   else if (x == 2) {
      evpop = '<p class="evmes">The impact instantly kills the cop</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
      document.getElementById("evn").innerHTML = "Police Car";
      document.getElementById("evopts").innerHTML = evpop;
   }
}

function bankMsg() {
      var a = 0
      var b = 0
      
      a = Math.floor(Math.random() * 5);
      b = Math.floor(Math.random() * 5);
      
      if (a != b) {
         var award = 0
         award = Math.floor(Math.random() * 150) + 1;

         bankcash = Math.floor(bankcash / 2);
         money = money + award;

         evpop = '<p class="evmes">The robbery was successful +$'+award+'</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
         document.getElementById("evn").innerHTML = "Bank - Balance: " + bankcash;
         document.getElementById("evopts").innerHTML = evpop;
   }
}

function casinoMsg() {
   var a = 0
   var b = 0
   
   a = Math.floor(Math.random() * 3);
   b = Math.floor(Math.random() * 3);
   
   if (a != b) {
      var award = 0
      var i = 0
      i = Math.floor(money * 30 / 100) + 30;
      
      award = Math.floor(Math.random() * i);
      money = money + award;
      
      evpop = '<p class="evmes">The gamble was successful +$'+award+'</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
      document.getElementById("evn").innerHTML = "Casino";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (a == b) {
      var bad = 0
      bad = Math.floor(Math.random() * money) + 1;
      money = money - bad;
      
      evpop = '<p class="evmes">The gamble failed and you lost $'+bad+'</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
      document.getElementById("evn").innerHTML = "Casino";
      document.getElementById("evopts").innerHTML = evpop;
   }
}



