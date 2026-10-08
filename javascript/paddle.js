export default class Paddle {
    constructor(game) {
        this.image = document.getElementById("platform_image");
        this.gameWidth = game.width;
        this.gameHeight = game.height;
        this.width = 100;
        this.height = 33;
        this.maxSpeed = 2;
        this.speed = 0;

        this.position = {
            x: game.width / 2 - this.width / 2, 
            y: this.gameHeight - 50,
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) return;
        
        this.position.x += this.speed;
        
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;
    }
}