var mon, tue, wed, thurs, fri, sat, sun;
var monImg, tueImg, wedImg, thursImg, friImg, satImg, sunImg;
var logo, start;
var logoImg, startImg;
var seva, sevb, sevc, sevd, seve, sevf, sevg;
var sevaImg, sevbImg, sevcImg, sevdImg, seveImg, sevfImg, sevgImg;
var gameState = "start";
var date1,day1;

function preload() {
    monImg = loadImage("monday.png");
    tueImg = loadImage("tuesday-1.png");
    wedImg = loadImage("wednesday.jpg");
    thursImg = loadImage("thursday.jpg");
    friImg = loadImage("friday.jpg");
    satImg = loadImage("saturday.png");
    sunImg = loadImage("Holiday.jpg");
    logoImg = loadImage("JHPS.jpg");
    startImg = loadImage("start.png");
    sevaImg = loadImage("7 A.png");
    sevbImg = loadImage("7 B.png");
    sevcImg = loadImage("7 C.png");
    sevdImg = loadImage("7 D.png");
    seveImg = loadImage("7 E.png");
    sevfImg = loadImage("7 F.png");
    sevgImg = loadImage("7 G.png");

}

function setup() {
    createCanvas(1200, 800)
    logo = createSprite(600, 400, 10, 20);
    logo.addImage(logoImg);

    start = createSprite(600, 700, 10, 10);
    start.addImage(startImg);
    start.scale = 0.2;

    seva = createSprite(300, 200, 10, 10);
    seva.addImage(sevaImg);
    seva.scale = 0.6;

    sevb = createSprite(800, 200, 10, 10);
    sevb.addImage(sevbImg);
    sevb.scale = 0.6;

    sevc = createSprite(300, 350, 10, 10);
    sevc.addImage(sevcImg);
    sevc.scale = 0.6;

    sevd = createSprite(800, 350, 10, 10);
    sevd.addImage(sevdImg);
    sevd.scale = 0.6;

    seve = createSprite(300, 500, 10, 10);
    seve.addImage(seveImg);
    seve.scale = 0.6;

    sevf = createSprite(800, 500, 10, 10);
    sevf.addImage(sevfImg);
    sevf.scale = 0.6;

    sevg = createSprite(550, 650, 10, 10);
    sevg.addImage(sevgImg);
    sevg.scale = 0.6;
  
    date1 = new Date();
    day1 = date1.getDay();
console.log(day1);


}

function draw() {
    background("silver");
    if (gameState === "start") {
        
        fill("white");
        textSize(40);
        text("School TimeTable For class 7th", 330, 75);
        seva.visible = false;
        sevb.visible = false;
        sevc.visible = false;
        sevd.visible = false;
        seve.visible = false;
        sevf.visible = false;
        sevg.visible = false;
        if(mousePressedOver(start)){
            timeTable();
        }
    }
  
  if(mousePressedOver(seva)){
    sevaTimeTable();
  }
    if(mousePressedOver(sevb)){
    sevbTimeTable();
  }
    if(mousePressedOver(sevc)){
    sevcTimeTable();
  }
    if(mousePressedOver(sevd)){
    sevdTimeTable();
  }
    if(mousePressedOver(seve)){
    seveTimeTable();
  }
  //   if(mousePressedOver(sevf)){
  //   sevfTimeTable();
  // }
  //   if(mousePressedOver(sevg)){
  //   sevgTimeTable();
  // }

    drawSprites()
}
function sevaTimeTable() {

   display();

}
function sevbTimeTable() {
  display();
}
function sevcTimeTable() {
  display();
}
function sevdTimeTable() {
  display();
}
function seveTimeTable() {
  display();
}
function sevfTimeTable() {
 display();
}
function sevgTimeTable() {
  display();
}
function timeTable(){
   console.log("hello");
        gameState = "section";
        logo.visible = false;
        start.visible = false;
        seva.visible = true;
        sevb.visible = true;
        sevc.visible = true;
        sevd.visible = true;
        seve.visible = true;
        sevf.visible = true;
        sevg.visible = true;
        fill("black");
        textSize(40);
        textStyle(BOLD);
        text("Choose The Section", 330, 75);

}

function display(){
      seva.x = 1300;
    sevb.x = 1300;
    sevc.x = 1300;
    sevd.x = 1300;
    seve.x = 1300;
    sevf.x = 1300;
    sevg.x = 1300;
   if(day1 === 0){
      
    }
    if(day1 === 1){
      
    }
     if(day1 === 2){
      tue = createSprite(400,300);
       tue.addImage(tueImg);
       tue.scale = 2.2;
       text("lalalallala",50,50);
    }
     if(day1 === 3){
      
    }
    if(day1 === 4){
      
    }
     if(day1 === 5){
      
    }
       if(day1 === 6){
      
    }
}








