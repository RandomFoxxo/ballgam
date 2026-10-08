import Paddle from "./paddle.js";
import Input from "./input.js";
import Ball from "./ball.js";
import Brick from "./brick.js";
import { buildLevel, Level1 } from "./levels.js";

export default class Game {
    constructor(WINDOW_WIDTH, WINDOW_HEIGHT) {
        this.width = WINDOW_WIDTH;
        this.height = WINDOW_HEIGHT;
    };

    start() {
        //creating new assets
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        // let brick = new Brick(this, {x: 0, y: 0,});
        
        //paddle movement and input
        new Input(this.paddle);

        
        let bricks = buildLevel(this, Level1);
        
        //puts new ojects into an array
        this.gameObjects = [this.ball, this.paddle, ...bricks];
    };
    
    update(deltaTime) {
        //cycles through each object and updates them
        this.gameObjects.forEach((object) => {
            object.update(deltaTime);
        });

        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);
    };

    draw(ctx) {
        //cycles through the objects to draw
        this.gameObjects.forEach((object) => {
            object.draw(ctx);
        })
    };
}