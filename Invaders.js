class Invaders {
    constructor(alienImage, rowsCount) {
        this.alienImage = alienImage;
        this.rowsCount = rowsCount;
        this.direction = 0;
        this.y = 40;
        this.aliens = this.initialiseAliens();
        this.bullets = [];
        this.movingDown = true;
        this.speed = 0.2;
        this.timeSinceLastBullet = 0;
    }

    update(player) {
        for (let alien of this.aliens) {
            if (this.direction == 0) {
                alien.x+= this.speed;
            } else if (this.direction == 1) {
                alien.x-= this.speed;
            }
            if (alien.hasHitPlayer(player)){
                player.loseLife();
            }
        }
   
        if (this.hasChangedDirection()) {
            this.moveAlienDown();
        }
        if (this.aliens.length == 0) {
            this.nextLevel();
        }
      
       if (this.timeSinceLastBullet >= 40) {
          let bottomAliens = this.getBottomAliens();
          if (bottomAliens.length) {
              this.makeABottomAlienShoot(bottomAliens);
          }  
        }
      	this.timeSinceLastBullet++;
      
      this.updateBullets(player);
    }
  
    hasChangedDirection() {
        for (let alien of this.aliens) {
            if (alien.x >= width - 40) {
                this.direction = 1;
                return true;
            } else if (alien.x <= 20) {
                this.direction = 0;
                return true;
            }
        }
        return false;
    }

    