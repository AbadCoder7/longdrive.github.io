
function achiReq() {
   showAchi1();
   showAchi2();
   showAchi3();
   showAchi4();
   showAchi5();
   showAchi6();
   showAchi7();
   showAchi8();
   showAchi9();
}

function showAchi1() {
   if (a1req == true) {
      document.getElementById("a1").style.backgroundImage = "url('images/achi/achi1.png')";
   } else {
      document.getElementById("a1").style.backgroundImage = "url('images/achi/lock.png')";
   }
}
function showAchi2() {
   if (a2req == true) {
      document.getElementById("a2").style.backgroundImage = "url('images/achi/achi2.png')";
   } else {
      document.getElementById("a2").style.backgroundImage = "url('images/achi/lock.png')";
   }
}
function showAchi3() {
   if (a3req == true) {
      document.getElementById("a3").style.backgroundImage = "url('images/achi/achi3.png')";
   } else {
      document.getElementById("a3").style.backgroundImage = "url('images/achi/lock.png')";
   }
}
function showAchi4() {
   if (a4req == true) {
      document.getElementById("a4").style.backgroundImage = "url('images/achi/achi4.png')";
   } else {
      document.getElementById("a4").style.backgroundImage = "url('images/achi/lock.png')";
   }
}
function showAchi5() {
   if (a5req == true) {
      document.getElementById("a5").style.backgroundImage = "url('images/achi/achi5.png')";
   } else {
      document.getElementById("a5").style.backgroundImage = "url('images/achi/lock.png')";
   }
}
function showAchi6() {
   if (a6req == true) {
      document.getElementById("a6").style.backgroundImage = "url('images/achi/achi6.png')";
   } else {
      document.getElementById("a6").style.backgroundImage = "url('images/achi/lock.png')";
   }
}
function showAchi7() {
   if (a7req == true) {
      document.getElementById("a7").style.backgroundImage = "url('images/achi/achi7.png')";
   } else {
      document.getElementById("a7").style.backgroundImage = "url('images/achi/lock.png')";
   }
}
function showAchi8() {
   if (a8req == true) {
      document.getElementById("a8").style.backgroundImage = "url('images/achi/achi8.png')";
   } else {
      document.getElementById("a8").style.backgroundImage = "url('images/achi/lock.png')";
   }
}
function showAchi9() {
   if (a9req == true) {
      document.getElementById("a9").style.backgroundImage = "url('images/achi/achi9.png')";
   } else {
      document.getElementById("a9").style.backgroundImage = "url('images/achi/lock.png')";
   }
}

setInterval(function() {
   earnAchi();
   achiReq();
}, 1);

var a1req = true
var a2req = false
var a3req = true
var a4req = false
var a5req = false
var a6req = false
var a7req = false
var a8req = false
var a9req = false

/*
Achievement Ideas:

Distance Based:
- On My Way / Play the game once
- The highway / Drive 50 Miles
- A long road ahead of you / Drive 100 Miles
- Long Drive / Drive 300 Miles

Event Based:
- Bambi / Successfully kill a deer
- Better than ever / Repair your car when it's at full status
- Taxi Cab / Pick up 30 hitchhikers

Other:
- Last Stop / End the drive
- ._. / find the ._.

*/

function temporaryAchi(x) {
   //document.getElementById("a" + x).style.backgroundImage = "url('images/achi/achi" + x + ".png')";
}

window.onload = function() {
   temporaryAchi(1);
   temporaryAchi(2);
   temporaryAchi(3);
   temporaryAchi(4);
   temporaryAchi(5);
   temporaryAchi(6);
   temporaryAchi(7);
   temporaryAchi(8);
   temporaryAchi(9);
}

// setting achi req values to true
// varables for the achievements
var deerkilled = false
var allrepaired = false
var hitched = 0
var died = false
var ofound = false

function oFind() {ofound = true;}

function earnAchi() {
   if (true) {a1req = true;}
   if (miles >= 50) {a2req = true;}
   if (miles >= 100) {a3req = true;}
   if (miles >= 300) {a4req = true;}
   if (deerkilled == true) {a5req = true;}
   if (allrepaired == true) {a6req = true;}
   if (hitched >= 30) {a7req = true;}
   if (died == true) {a8req = true;}
   if (ofound == true && a9req != true) {a9req = true;}
}