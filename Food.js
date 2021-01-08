class Food{
    constructor(){
        this.foodStock=0;
        this.lastFedTime;
        this.img = loadImage("Milk.png")
    }

    getFood(){
        var foodStockref = database.ref("Food");
        foodStockref.on("value",function(data) {
            this.foodStock = data.val()
        })

    }

      updateStock(x){
        database.ref('/').update({
          "Food": x
      })
      
      }

      reduceStock(){
          if(this.foodStock > 0){
              this.foodStock = this.foodstock -1;
          }
      }
      // distance between b is  10 amd each line hsld have  10 b
      // 

      display(){
        imageMode(CENTER)
        y = 200
        x = 50
        if(this.foodStock != 0){
            for(var i = 0; i <this.foodStock;i++){
                if(i/10 > 0){
                    x = 50
                    y = y + 50;
                }
                image(this.img, x,y)
                x = x + 20;
            }
        }
      }

}