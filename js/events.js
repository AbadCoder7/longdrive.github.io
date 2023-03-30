var randomEvent = function() {
   if (eventgoing == false) {
      /*
         Events:
         - Gas Station
         - Fallen Tree
         - Automotive Shop
         - Hitchhiker
         - Deer
      */

      var i = 0
      i = Math.floor(Math.random() * 2) + 1;
      i = 2;
      if (i == 2) {
         eventgoing = true;
         statstop = true;
         var j = 0
         j = Math.floor(Math.random() * 5) + 1;
         setTheEvent(j);
      }
   }
}

var evpop = ""
var eventgoing = true
var statstop = true
var gamerunning = false
// change this to false for real gameplay

document.getElementById("event").style.display = "none";
document.getElementById("achi").style.display = "none";
function setTheEvent(x) {
   document.getElementById("event").style.display = "block";
   if (x == 1) {
      evpop = '<p class="evopt" onclick="optOne(1)">Browse the Gas Station</p><p class="evopt" onclick="contRoad()">Continue traveling the road</p>';
      document.getElementById("evn").innerHTML = "Gas Station";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 2) {
      evpop = '<p class="evopt" onclick="optOne(2)">Attempt to climb over</p><p class="evopt" onclick="optTwo(2)">Go around the tree</p>';
      document.getElementById("evn").innerHTML = "Fallen Tree";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 3) {
      evpop = '<p class="evopt" onclick="optOne(3)">Browse the Shop</p><p class="evopt" onclick="contRoad()">Continue traveling the road</p>';
      document.getElementById("evn").innerHTML = "Automotive Shop";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 4) {
      evpop = '<p class="evopt" onclick="optOne(4)">Let him in the car</p><p class="evopt" onclick="contRoad()">Continue traveling the road</p>';
      document.getElementById("evn").innerHTML = "Hitchhiker";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 5) {
      evpop = '<p class="evopt" onclick="optOne(5)">The hit deer with your car</p><p class="evopt" onclick="optTwo(5)">Wait for it to pass by</p>';
      document.getElementById("evn").innerHTML = "Crossing Deer";
      document.getElementById("evopts").innerHTML = evpop;
   } else {
      alert("EVENT NULL FAILED");
   }
}

function optOne(x) {
   if (x == 1) {
      document.getElementById("st").innerText = "Gas Station";
      document.getElementById("sopt").innerHTML = "<span class='shopopt' onclick='gasShop(1)'>Purchase Gas - +40% Fuel / $10</span><br><span class='shopopt' onclick='gasShop(2)'>Purchase Chips - +50% Nutrition / $3</span><br><span class='shopopt' onclick='contRoad()'>Continue on the road</span>";
      document.getElementById("shop").style.display = "block";
      // gas - 20% for 10$
      // chips - 50% for 3$
      // Continue
      document.getElementById("event").style.display = "none";
   }
   else if (x == 2) {
      var i = 0
      i = Math.floor(Math.random() * 2) + 1;
      treeMsg(i);
   }
   else if (x == 3) {
      document.getElementById("st").innerText = "Automotive Shop";
      document.getElementById("sopt").innerHTML = "<span class='shopopt' onclick='autoShop(1)'>Repair - +100% Status / $150</span><br><span class='shopopt' onclick='autoShop(2)'>Tune Up - +25% Status / $40</span><br><span class='shopopt' onclick='autoShop(3)'>Granola Bar - +35% Nutrition / $1</span><br><span class='shopopt' onclick='contRoad()'>Continue on the road</span>";
      document.getElementById("shop").style.display = "block";
      // repair - 20% for 150$
      // tune up - 50% for 40$
      // granola bar - 35% for 1$;
      // Continue
      document.getElementById("event").style.display = "none";
   }
   else if (x == 4) {
      hitched++;
      var i = 0
      i = Math.floor(Math.random() * 3) + 1;
      if (i == 1) {
         statstop = false;
         document.getElementById("event").style.display = "none";
         setTimeout(hit1, 20000);
      }
      else if (i == 2) {
         statstop = false;
         document.getElementById("event").style.display = "none";
         setTimeout(hit2, 20000);
      }
      else if (i == 3) {
         statstop = false;
         document.getElementById("event").style.display = "none";
         setTimeout(hit3, 20000);
      }
      document.getElementById("evn").innerHTML = "Hitchhiker";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 5) {
      var i = 0
      i = Math.floor(Math.random() * 2) + 1;
      deerMsg(i);
   }
}

function optTwo(x) {
   if (x == 2) {
      evpop = '<p class="evmes">The tree has been passed and the journey goes on</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
      document.getElementById("evn").innerHTML = "Fallen Tree";
      document.getElementById("evopts").innerHTML = evpop;
      fuel = fuel - 100;
   }
   else if (x == 5) {
      evpop = '<p class="evmes">The Deer finally moved out of the way</p><p class="evopt" onclick="contRoad()">Continue on the road</p>';
      document.getElementById("evn").innerHTML = "Crossing Deer";
      document.getElementById("evopts").innerHTML = evpop;
      fuel = fuel - 25;
   }
}
function contRoad() {
   statstop = false;
   eventgoing = false;
   document.getElementById("event").style.display = "none";
   document.getElementById("shop").style.display = "none";
   setTimeout(randomEvent, 20000);
}
