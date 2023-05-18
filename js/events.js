var randomEvent = function() {
   if (eventgoing == false) {
      /*
         Events:
         
         1) Gas Station
         2) Fallen Tree
         3) Automotive Shop
         4) Hitchhiker
         5) Deer
         6) Family Crossing
         7) Mystery Item
         8) Injured Man
         9) Tavern or Bar
         10) Cop or being pulled over
         11) Bakery
         12) Shady Garage
         13) Scrapyard
         14) Bank
         15) Casino
         
         !!!! See Bottom of Script for Notes !!!!
      */

      var i = 0
      i = Math.floor(Math.random() * 2) + 1;
      i = 2;
      if (i == 2) {
         eventgoing = true;
         statstop = true;
         var j = 0
         j = Math.floor(Math.random() * 15) + 1; // 15
         
         const testingEventBoolean = false;
         if (testingEventBoolean == true) {j = 9;}
         
         document.getElementById("eventalert").style.display = "block";
         setTimeout(startTheEvent, 500, j);
      }
   }
}

function startTheEvent(eventvalue) {
   document.getElementById("eventalert").style.display = "none";
   setTheEvent(eventvalue);
}

var evpop = ""
var eventgoing = true
var statstop = true
var gamerunning = false
// change this to false for real gameplay

document.getElementById("eventalert").style.display = "none";
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
   }
   else if (x == 6) {
      evpop = '<p class="evopt" onclick="optOne(6)">Hit the family</p><p class="evopt" onclick="contRoad()">Not commit murder (Wrong Option)</p>';
      document.getElementById("evn").innerHTML = "Family Crossing";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 7) {
      evpop = '<p class="evopt" onclick="optOne(7)">Inspect the item</p><p class="evopt" onclick="contRoad()">Continue traveling the road</p>';
      document.getElementById("evn").innerHTML = "Mysterious Item";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 8) {
      evpop = '<p class="evopt" onclick="optOne(8)">Rob his ass</p><p class="evopt" onclick="optTwo(8)">Ram him with your car</p>';
      document.getElementById("evn").innerHTML = "Injured Man";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 9) {
      evpop = '<p class="evopt" onclick="optOne(9)">Enter the bar</p><p class="evopt" onclick="contRoad()">Continue traveling the road</p>';
      document.getElementById("evn").innerHTML = "Roadside Pub";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 10) {
      evpop = '<p class="evopt" onclick="optOne(10)">Pull over</p><p class="evopt" onclick="optTwo(10)">Attack the vehicle</p>';
      document.getElementById("evn").innerHTML = "Police Car";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 11) {
      evpop = '<p class="evopt" onclick="optOne(11)">Enter the bakery</p><p class="evopt" onclick="contRoad()">Continue traveling the road</p>';
      document.getElementById("evn").innerHTML = "Local Bakery";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 12) {
      evpop = '<p class="evopt" onclick="optOne(12)">Enter the garage</p><p class="evopt" onclick="contRoad()">Continue traveling the road</p>';
      document.getElementById("evn").innerHTML = "Shady Garage";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 13) {
      evpop = '<p class="evopt" onclick="optOne(13)">Drive on in</p><p class="evopt" onclick="contRoad()">Continue traveling the road</p>';
      document.getElementById("evn").innerHTML = "Scrapyard";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 14) {
      evpop = '<p class="evopt" onclick="optOne(14)">Make a transaction</p><p class="evopt" onclick="optTwo(14)">Commit robbery</p>';
      document.getElementById("evn").innerHTML = "Bank";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else if (x == 15) {
      evpop = '<p class="evopt" onclick="optOne(15)">Gamble your savings</p><p class="evopt" onclick="contRoad()">Continue traveling the road</p>';
      document.getElementById("evn").innerHTML = "Casino";
      document.getElementById("evopts").innerHTML = evpop;
   }
   else {
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
      hitchhikers_pickedup++;
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
      corpses++;
      deerMsg(i);
   }
   else if (x == 6) {
      var i = 0
      var j = 0
      i = Math.floor(Math.random() * 20) + 1;
      j = Math.floor(Math.random() * 20) + 1;
      corpses = corpses + 4;
      familyMsg(i, j);
   }
   else if (x == 7) {
      var i = 0
      i = Math.floor(Math.random() * 4) + 1;
      mysteryMsg(i);
   }
   else if (x == 8) {hurtmanMsg(1); corpses++;}
   else if (x == 9) {
      document.getElementById("st").innerText = "Roadside Pub";
      document.getElementById("sopt").innerHTML = "<span class='shopopt' onclick='roadPub(1)'>Whiskey - $20</span><br><span class='shopopt' onclick='roadPub(2)'>Vodka - $40</span><br><span class='shopopt' onclick='roadPub(3)'>Cigar - $15</span><br><span class='shopopt' onclick='contRoad()'>Continue on the road</span>";
      document.getElementById("shop").style.display = "block";
      // Whiskey - $20
      // Vodka - $40
      // Cigar - $15
      // Continue
      document.getElementById("event").style.display = "none";
   }
   else if (x == 10) {copMsg(1);}
   else if (x == 11) {
      document.getElementById("st").innerText = "Local Bakery";
      document.getElementById("sopt").innerHTML = "<span class='shopopt' onclick='locBakery(1)'>Doughnut - $3</span><br><span class='shopopt' onclick='locBakery(2)'>Water - $1</span><br><span class='shopopt' onclick='contRoad()'>Continue on the road</span>";
      document.getElementById("shop").style.display = "block";
      // Doughnut - $3
      // Water - $1
      // Continue
      document.getElementById("event").style.display = "none";
   }
   else if (x == 12) {
      var engineup = ""
      var enginenum = 0
      
      if (engine == 0) {engineup = "Engine Upgrade I - $300"; enginenum = 1;}
      else if (engine == 1) {engineup = "Engine Upgrade II - $600"; enginenum = 2;}
      else {engineup = "SOLD OUT"; enginenum = 99;}
      
      document.getElementById("st").innerText = "Shady Garage";
      document.getElementById("sopt").innerHTML = "<span class='shopopt' onclick='shaGarage(1, 99)'>Repair - +40% Status / $150</span><br><span class='shopopt' id='shopopt2' onclick='shaGarage(2, "+enginenum+")'>"+engineup+"</span><br><span class='shopopt' onclick='contRoad()'>Continue on the road</span>";
      document.getElementById("shop").style.display = "block";
      // Repair - +40% Status / $150
      // Engine Upgrade I - $300 (Changes to "Engine Upgrade II - $600" after)
      // Continue
      document.getElementById("event").style.display = "none";
   }
   else if (x == 13) {
      var bodyup = ""
      var bodynum = 0
      
      if (body == 0) {bodyup = "Body Upgrade I - $350"; bodynum = 1;}
      else if (body == 1) {bodyup = "Body Upgrade II - $700"; bodynum = 2;}
      else {bodyup = "SOLD OUT"; bodynum = 99;}
      
      document.getElementById("st").innerText = "Scrapyard";
      document.getElementById("sopt").innerHTML = "<span class='shopopt' onclick='scYard(1, 99)'>Repair - +40% Status / $150</span><br><span class='shopopt' id='shopopt2' onclick='scYard(2, "+bodynum+")'>"+bodyup+"</span><br><span class='shopopt' onclick='contRoad()'>Continue on the road</span>";
      document.getElementById("shop").style.display = "block";
      // Repair - +40% Status / $150
      // Body Upgrade I - $350 (Changes to "Body Upgrade II - $700" after)
      // Continue
      document.getElementById("event").style.display = "none";
   }
   else if (x == 14) {
      document.getElementById("st").innerHTML = "Bank - Balance: $<span id='bankcash'>0</span>";
      document.getElementById("sopt").innerHTML = "<span class='shopopt' onclick='bankFun(1)'>Deposit 10%</span><br><span class='shopopt' id='shopopt2' onclick='bankFun(2)'>Withdrawal 10%</span><br><span class='shopopt' onclick='contRoad()'>Continue on the road</span>";
      document.getElementById("shop").style.display = "block";
      // Deposit 10%
      // Withdrawal 10%
      // Loan
      // Continue
      document.getElementById("event").style.display = "none";
      document.getElementById("bankcash").innerHTML = bankcash;
   }
   else if (x == 15) {casinoMsg();}
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
   else if (x == 8) {hurtmanMsg(2); corpses++;}
   else if (x == 10) {copMsg(2); corpses++;}
   else if (x == 14) {bankMsg();}
}
function contRoad() {
   statstop = false;
   eventgoing = false;
   document.getElementById("event").style.display = "none";
   document.getElementById("shop").style.display = "none";
   setTimeout(randomEvent, 10000);
}



/*
-- Event Notes:

- Bar:
New minigames such as a bar fight
Ablility to get drunk

DRUNK - Gives the ability to kill just about anything and other benefits

- Mysterious Item:
Add:
Vodka
Dark Liquid (Poison)
Jet Fuel

------------------------------------------------------------------------

Backgrounds are temporarily going to be ignored

*/
