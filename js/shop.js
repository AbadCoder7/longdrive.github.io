
function gasShop(x) {
   if (x == 1 && money >= 10) {
      money = money - 10;
      fuel = fuel + 400;
      if (fuel > 1000) {fuel = 1000;}
      var i = 0
      i = fuel / 10;
      document.getElementById("fuel").innerHTML = i;
   }
   else if (x == 2 && money - 3) {
      money = money - 3;
      nutr = nutr + 500;
      if (nutr > 1000) {nutr = 1000;}
      var i = 0
      i = nutr / 10;
      document.getElementById("nutr").innerHTML = i;
   }
}

function autoShop(x) {
   if (x == 1 && money >= 150) {
      money = money - 150;
      stat = stat + 1000;
      if (stat > 1000) {stat = 1000;}
   }
   else if (x == 2 && money - 40) {
      money = money - 40;
      stat = stat + 250;
      if (stat > 1000) {stat = 1000; allrepaired = true;}
   }
   else if (x == 3 && money - 1) {
      money = money - 1;
      nutr = nutr + 350;
      if (nutr > 1000) {nutr = 1000; allrepaired = true;}
      var i = 0
      i = nutr / 10;
      document.getElementById("nutr").innerHTML = i;
   }
}