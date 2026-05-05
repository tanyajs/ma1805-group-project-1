
let img;

let notif = false;
let notif2 = false;
let notif3 = false;
let notif4 = false;
let notif5 = false;
/*positive notifications*/
let positive = false;
let purpleheart = false;

let quote = [];
let posquotes = ["YOU CAN'T GIVE UP NOW", "its okay you've tried you're best", "everything will be fine", "take some rest", "stay determined"]




  function preload(){

    img = loadImage('images/background of my laptop.png');

  }

function setup() {
   createCanvas(windowWidth, windowHeight);
 
}
/* letter heart emoji */
function draw(){
  background(img);
  textSize(190)
  text("💌", 645, 410);
  
/* first notification */
  if (notif == true) {
  stroke(0, 57, 230);
  strokeWeight(4);
  fill(77, 163, 255)
  rect(550, 260, 430, 230);

  /* ADDING MY TEXT AND X EMOJI */
  fill(0, 0, 128)
  noStroke()
  textSize(20)
  textStyle(BOLD)
  fill('black')
  textAlign(CENTER, TOP);
  text("Hahah you're not going to", 760, 350);
  textAlign(CENTER, CENTER)
  text("finish this in timeee", 760, 390)
  text("❌", 570, 280);
  
  } 
  /*second notification*/
  if (notif2 == true) {
  stroke(0, 57, 230);
  strokeWeight(4);
  fill(77, 163, 255)
  rect(400, 230, 430, 230);
  /* MY TEXT */
  fill(0, 0, 128)
  noStroke()
  textSize(20)
  textStyle(BOLD)
  fill('black')
  text("yeah this isn't good enough", 615, 346);
  text("❌", 423, 250);

  }
/* third notification */
if (notif3 == true) {
  stroke(0, 57, 230);
  strokeWeight(4);
  fill(77, 163, 255)
  rect(900, 170, 430, 230);

/* text */
noStroke()
  textSize(20)
  textStyle(BOLD)
  fill('black')
  text("okay now you're just slacking", 1117, 284);
  text("❌", 930, 190);
}

/* FOURTH notification */
if (notif4 == true) {
  stroke(0, 57, 230);
  strokeWeight(4);
  fill(77, 163, 255)
  rect(700, 430, 430, 230);
/*text*/
noStroke()
textSize(20)
textStyle(BOLD)
  fill('black')
  text("ugh just give up already", 915, 546);
  text("❌", 725, 450);
}

/* FIFTH notification */
if (notif5 == true) {
  stroke(0, 57, 230);
  strokeWeight(4);
  fill(77, 163, 255)
  rect(200, 335, 430, 230);
/*text*/
noStroke()
textSize(20)
textStyle(BOLD)
  fill('black')
  text("THIS IS GETTING BORING!!", 410, 455);
  text("❌", 220, 356);
}

/* first positive notification */
if (positive == true && purpleheart == false) {
  stroke(204, 0, 153);
  strokeWeight(8);
  fill(255, 153, 230)
  rect(400, 185, 700, 460);
/*text*/
noStroke();
textSize(30);
textStyle(BOLD);
  fill(230, 0, 115);
  textAlign(CENTER, TOP);
  text("WOAH THAT WAS HARSH WASN'T IT", 760, 350);
  textAlign(CENTER, CENTER);
  text("enough of that click that heart now :)", 760, 390);
textSize(70)
  text("💜", 750, 520);
}

if (purpleheart == true) {
  stroke(217, 102, 255);
  strokeWeight(8);
  fill(255, 204, 230)
  rect(400, 185, 700, 460);
/*text*/
noStroke();
textSize(45);
textStyle(BOLD);
  fill(230, 0, 115);
  textAlign(CENTER, TOP);
  text("Just because it was hard", 760, 320);
  textAlign(CENTER, CENTER);
  text("doesn't mean it is impossible", 760, 400);
  textAlign(CENTER, BOTTOM);
  text("keep going 😚", 760, 480);

}

if (purpleheart == true) {
  
  textSize(25);
  textAlign(CENTER, BOTTOM);

  for (let i = 0; i < 2; i++){
    let x = random( width);
    let y = random( height);
    frameRate(2);
    Quotes= floor(random(0, posquotes.length));

    text(posquotes[Quotes],x, y);
    
    
  }

  }

}


function mousePressed() {

  notif = true;


if ( mouseX > 565 && mouseX <630 && mouseY >260 && mouseY <330)
  notif2 = true;


if ( mouseX > 420 && mouseX <500 && mouseY >240 && mouseY <330)
  notif3 = true;

if ( mouseX > 900 && mouseX <1000 && mouseY >180 && mouseY <230)
  notif4 = true;

  if ( mouseX > 700 && mouseX <750 && mouseY >430 && mouseY <500)
  notif5 = true;

  if ( mouseX > 200 && mouseX <280 && mouseY >330 && mouseY <400)
  positive = true;

if(positive == true){
  if ( mouseX > 730 && mouseX <800 && mouseY >500 && mouseY <590){
  purpleheart = true;
  }

  
  notif = false;
  notif2 = false;
  notif3 = false;
  notif4 = false;
  notif5 = false

  
  

  }
}


