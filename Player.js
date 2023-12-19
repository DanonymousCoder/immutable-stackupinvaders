class Player {
    constructor(shooterImage) {
        this.image = shooterImage;
        this.x = width / 2;
        this.y = height -30;
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.isMovingUp = false;
        this.isMovingDown = false;
        this.bullets = [];
        this.lives = 3;
        this.maxBullets = 2;
        this.score = 0;
        this.r = 10;
        this.nft = false;
        this.gas = [];
        this.nftShown = { '1': false, '2': false };
        this.gamePaused = false;
        this.resumeCount = 0
    }

    showNft(tokenId) {
        if (!this.nftShown[tokenId]) {
            this.nft = true;
            this.nftShown[tokenId] = true;
            window.getData(tokenId);
        }
    }
    
    respawn() {
        this.x = width / 2;
        this.y = height -30;
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.isMovingUp = false;
        this.isMovingDown = false;
        this.lives -= 1;
    }

    upgradeSpaceship() {
        this.image = loadImage('playerv2.png');
        this.maxBullets = 4;
    }


// game state
 update() {
        if (this.gamePaused) return;
        if (this.isMovingRight && this.x < width -40) {
            this.x += 1;
        } else if (this.isMovingLeft && this.x > 0) {
            this.x -= 1;
        }
        
        if(this.isMovingUp && this.y > 0){
            this.y -= 1;
        } else if(this.isMovingDown && this.y < height - 30){
            this.y += 1;
        }
        this.updateBullets();
    }

    updateBullets() {
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            this.bullets[i].update();
            if (this.hasHitAlien(this.bullets[i])) {
                this.bullets.splice(i, 1);
                this.score += 10;
                break;
            } else if (this.bullets[i].isOffScreen()) {
                this.bullets.splice(i, 1);
                break;
            }
        }
    }

    pauseGame(tokenId) {
        this.gamePaused = true;
        this.showNft(tokenId);
    }
    
// movement methods

// drawing methods

// helper functions