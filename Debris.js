class Debris {
    constructor() {
      this.r = 5;
      this.resetDebris();
    }
    
    resetDebris() {
      this.y = random(height - 10);
      this.r = random(5,10)
      
      let spawnLeftSide = random(1) < 0.5;
      
      if (spawnLeftSide) {
          this.x = random(-width, 0);	
          this.isGoingLeft = false;
      } else {
          this.x = random(width, width * 2);
        this.isGoingLeft = true;
      }
    }
    