
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
   else if (x == 2 && money >= 40) {
      money = money - 40;
      stat = stat + 250;
      if (stat > 1000) {stat = 1000;}
   }
   else if (x == 3 && money >= 1) {
      money = money - 1;
      nutr = nutr + 350;
      if (nutr > 1000) {nutr = 1000;}
      var i = 0
      i = nutr / 10;
      document.getElementById("nutr").innerHTML = i;
   }
}

function roadPub(x) {
   if (x <= 2) {
      var randomPoisonA = 0
      var randomPoisonB = 0
      randomPoisonA = Math.floor(Math.random() * 5) + 1;
      randomPoisonB = Math.floor(Math.random() * 5) + 1;
      
      if (randomPoisonA == randomPoisonB) {
         if (x == 1) {money = money - 20;}
         else if (x == 2) {money = money - 40;}
         
         poisonTime = miles + 40;
      }
      else if (x == 1 && money >= 20) {
         money = money - 20;
         drunkTime = miles + 40;
      }
      else if (x == 2 && money >= 40) {
         money = money - 40;
         drunkTime = miles + 80;
      }
   }
   else if (x == 3 && money >= 15) {
      money = money - 15;
      highTime = miles + 50;
   }
}

function locBakery(x) {
   if (x == 1 && money >= 3) {
      money = money - 3;
      nutr = nutr + 20;
      
      if (nutr > 1000) {nutr = 1000;}
      var i = 0
      i = nutr / 10;
      document.getElementById("nutr").innerHTML = i;
   }
   else if (x == 2 && money >= 1) {money--;}
}

function shaGarage(x, up) {
   if (x == 1 && money >= 150) {
      money = money - 150;
      stat = stat + 400;
      if (stat > 1000) {stat = 1000;}
   }
   else if (x == 2) {
      if (up == 1 && engine == 0 && money >= 300) {
         money = money - 300;
         engine++;
         document.getElementById("shopopt2").innerHTML = "SOLD OUT";
      }
      else if (up == 2 && engine == 1 && money >= 600) {
         money = money - 600;
         engine++;
         document.getElementById("shopopt2").innerHTML = "SOLD OUT";
      }
   }
}

function scYard(x, up) {
   if (x == 1 && money >= 150) {
      money = money - 150;
      stat = stat + 400;
      if (stat > 1000) {stat = 1000;}
   }
   else if (x == 2) {
      if (up == 1 && body == 0 && money >= 350) {
         money = money - 350;
         body++;
         document.getElementById("shopopt2").innerHTML = "SOLD OUT";
      }
      else if (up == 2 && body == 1 && money >= 700) {
         money = money - 700;
         body++;
         document.getElementById("shopopt2").innerHTML = "SOLD OUT";
      }
   }
}

function bankFun(x) {
   if (x == 1) {
      var tenpercent = 0
      tenpercent = Math.floor(money * 10 / 100);

      money = money - tenpercent;
      bankcash = bankcash + tenpercent;
      
      
      if (bankcash > 999) {
         var i = 0
         i = 999 - bankcash;
         
         bankcash = bankcash - i;
         money = money + i;
      }
   }
   else if (x == 2) {
      var tenpercent = 0
      tenpercent = Math.floor(bankcash * 10 / 100);

      bankcash = bankcash - tenpercent;
      money = money + tenpercent;
   }
   document.getElementById("bankcash").innerHTML = bankcash;
}

