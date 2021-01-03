var dog, dogImg, happyDogImg, database , foodS, foodStock;

function preload()
{
  //load images here
  DogImg= loadImage("images/dogImg.png");
  happyDogImg= loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database= firebase.database();
  foodStock =database.ref('Food');
  foodStock.on ("value", readStock);
  foodStock.set(20);

  Dog = createSprite(250, 360, 10, 60);
  Dog.addImage(DogImg);
  Dog.scale= 0.2;
  
}


function draw() { 
  background (46,139,87);
  if(foodStock!==undefined){
    textSize (20);
    fill(255);
    text("Note: Press UP Arrow to feed Drago milk", 50, 50);
    text("food remaining:"+foodS, 150, 150);
  }
    if(KeyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDogImg)
    }

    if(KeyWentUp(UP_ARROW)){
      dog.addImage(DogImg)
    }

    if (foodS===0){
    foodS = 20;
    }
  

  drawSprites();
  //add styles here

}
function writeStock(x){
if (x<=0){
  x=0;
}
else{
  x = x-1;
}
database.ref('/').update({
  food:x
});
}
function readStock(data){
foodS = data.val();
}

