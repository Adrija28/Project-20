
var mouse;
var cat;
var bg;

function preload() {
 
bg_img = loadImage("images/garden.png")

t1_img = loadImage("images/tomOne.png");
t2 = loadAnimation("images/tomTwo.png", "images/tomThree.png")
t3 = loadImage("images/tomFour.png")

j1_img = loadImage("images/jerryOne.png");
j2 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png")
j3 = loadImage("images/jerryFour.png")
}

function setup(){
    createCanvas(700,500);

   bg = createSprite(350, 250, 700, 500);
   bg.addImage(bg_img);
   bg.scale = 0.7;

   mouse = createSprite(100, 400, 60, 60);
   //mouse.debug = true;
   mouse.setCollider("Circle", 0, 0, 350);
   mouse.addImage(j1_img);
   mouse.scale = 0.1

   cat = createSprite(600, 400, 60, 60);
   //cat.debug = true;
   cat.setCollider("Circle", 0, 0, 350);
   cat.addImage(t1_img);
   cat.scale = 0.1;

}

function draw() {

    background(255);

  if(cat.x - mouse.x < (cat.width - mouse.width)/2 || mouse.isTouching(cat)){
  		
      console.log(cat.x - mouse.x < (cat.width - mouse.width)/2)

      cat.collide(mouse);
      
      cat.addAnimation("cat_3",t3);
      cat.changeAnimation("cat_3", t3);
      mouse.addAnimation("mouse_3",j3);
      mouse.changeAnimation("mouse_3",j3);
 
}

    keyPressed();
    drawSprites();
}


function keyPressed(){

if(keyDown("LEFT_ARROW")){
      
      cat.velocityX = -3

      cat.addAnimation("cat_running",t2);
      cat.changeAnimation("cat_running", t2);
      mouse.addAnimation("mouse_running",j2);
      mouse.changeAnimation("mouse_running",j2);

    }


}
