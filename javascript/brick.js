import { collision } from "./collision.js";

export default class Brick {
    constructor(game, position) {
        this.image = document.getElementById("brick_image");

        this.game = game;

        this.position = position;
        this.width = 64;
        this.height = 64;

        this.markedForDeletion = false;
    };

    update(deltaTime) {
            if (collision(this.game.ball, this)) {
                this.game.ball.speed.y = -this.game.ball.speed.y;
                this.markedForDeletion = true;
            }
        };

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    };

    
}