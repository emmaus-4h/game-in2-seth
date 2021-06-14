/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 98; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 1220;   // x-positie van vijand
var vijandY = 99;   // y-positie van vijand



var score = 0; // aantal behaalde punten

var KEY_SPACE = 32;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;




/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("dimgray");
 rect(0, 0, width - 2, height - 2 * 20) ;

 
}


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
//wiel
  fill("black");
  ellipse(x, y+555, 30, 30);
  //wiel
  fill("black");
  ellipse(x+70, y+555, 30, 30);
 //outa
  fill("grey")
rect(x, y+510,70,35);

//wiel
  fill("black");
  ellipse(x+100, y+355, 30, 30);
  //wiel
  fill("black");
  ellipse(x+170, y+355, 30, 30);
 //outa
  fill("red")
rect(x+100, y+310,70,35);

//wiel
  fill("black");
  ellipse(x+300, y+555, 30, 30);
  //wiel
  fill("black");
  ellipse(x+370, y+555, 30, 30);
 //outa
  fill("blue")
rect(x+300, y+510,70,35);


//wiel
  fill("black");
  ellipse(x+800, y+255, 30, 30);
  //wiel
  fill("black");
  ellipse(x+870, y+255, 30, 30);
 //outa
  fill("green")
rect(x+800, y+210,70,35);

//wiel
  fill("black");
  ellipse(x+800, y+155, 30, 30);
  //wiel
  fill("black");
  ellipse(x+870, y+155, 30, 30);
 //outa
  fill("black")
rect(x+800, y+110,70,35);

//wiel
  fill("black");
  ellipse(x+600, y+455, 30, 30);
  //wiel
  fill("black");
  ellipse(x+670, y+455, 30, 30);
 //outa
  fill("purple")
rect(x+600, y+410,70,35);

//wiel
  fill("black");
  ellipse(x+700, y+55, 30, 30);
  //wiel
  fill("black");
  ellipse(x+770, y+55, 30, 30);
 //outa
  fill("yellow")
rect(x+700, y+10,70,35);

//wiel
  fill("black");
  ellipse(x+200, y+455, 30, 30);
  //wiel
  fill("black");
  ellipse(x+270, y+455, 30, 30);
 //outa
  fill("grey")
rect(x+200, y+410,70,35);

//wiel
  fill("black");
  ellipse(x+100, y+155, 30, 30);
  //wiel
  fill("black");
  ellipse(x+170, y+155, 30, 30);
 //outa
  fill("grey")
rect(x+100, y+110,70,35);


};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  //hoofd
  fill("lightsalmon");
  ellipse(x, y+400, 25, 25);
  
  
  

  
   
  




};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function(x,y) 
{ 
  vijandX = vijandX - random(60) - random(-1)

if(vijandY>610){vijandY=150;}
if (vijandX>1220){ vijandX=50;}
if (vijandX<-900){vijandX=1220;}
};
/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */

var beweegSpeler = function() {
if (keyIsDown(KEY_LEFT)) {
  spelerX = spelerX - 3;
  
  
}

if (keyIsDown(KEY_RIGHT)) {
  spelerX = spelerX + 3;
}

if (keyIsDown(KEY_UP)) {
  spelerY = spelerY - 3;
}

if (keyIsDown(KEY_DOWN )) {
  spelerY = spelerY + 3;
}
};

/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
 
 return false;
  
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() 














  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('goldenrod');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        
      }

      tekenVeld();
     tekenVijand(vijandX, vijandY);

      tekenSpeler(spelerX, spelerY);




      if (checkGameOver()) {
       
        return true; spelStatus=GAMEOVER;
      }
      break;
  }
}
