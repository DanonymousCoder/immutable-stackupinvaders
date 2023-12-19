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

    
// game state

// movement methods

// drawing methods

// helper functions