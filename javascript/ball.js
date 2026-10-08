import { collision } from "./collision.js";

export default class Ball {
    //add properties
    constructor(game) {
        this.image = document.getElementById("ball_image");
        this.game = game;

        this.window = {
            width: game.width,
            height: game.height,
        }
        
        this.size = {
            width: 16,
            height: 16,
        }

        this.position = {
            x: 10,
            y: 400,
        };

        this.speed = {
            x: 1,
            y: 2.5,
        };
    };

    //draw image
    draw(ctx) {
        ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.size.width,
            this.size.height);
    };

    //update the image
    update(deltaTime) {
        //movement
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.x + this.size.width > this.window.width || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        //checks if ball is hitting wall on the top or bottom
        if (this.position.y + this.size.height > this.window.height || this.position.y < 0) {
            this.speed.y = -this.speed.y;
            }

        //wall collisions
        if (collision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size.height;
        }
        
    };
}