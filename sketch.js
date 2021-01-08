//Create variables here
var dog, happyDog, database, foodS, foodStock = 20
var database

function preload()
{
  //load images here
  dogImg=loadImage("Dog.png")
  
  HdogImg=loadImage("happydog.png")
  
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
 

  Dog = createSprite(250,250,70,10)
  Dog.addImage(dogImg)
  Dog.scale = 0.5
   
  feedButton = createButton("Feed the Dog")
  feedButton.position(10,20)
  feedButton.mousePressed()
}


function draw() {  
  background("white")
  fill("black")
  if(foodStock>0){
  text("NOTE: Press UpArrow to feed the dog", 180 ,50)
  }
  else{
    text("FOOD IS OUT OF STOCK", 200 ,450)
  }

    if(keyDown("up")){
      if(foodStock > 0){
        foodStock = foodStock - 1
        updateStock(foodStock)
        Dog.addImage(HdogImg)        

      }    
  }
  text("Food  "+ foodStock ,400,50)
  drawSprites();
  //add styles here

}




/*

update(x){    
  database.ref('/').update({
      "gameState": x
  })
}
*/

