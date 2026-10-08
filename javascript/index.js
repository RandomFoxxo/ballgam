import Game from "./game.js";

//create the canvas window for the game
const canvas = document.getElementById("canvas");
const body = document.querySelector("body");
const ctx =  canvas.getContext("2d");
const WINDOW_WIDTH = 320, WINDOW_HEIGHT = 650;

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;
canvas.style.backgroundColor = "tan";

//set delta time
let lastTime = 0;

let game = new Game(WINDOW_WIDTH, WINDOW_HEIGHT)

game.start();

function gameLoop(timeStamp) {
    //delta time setup
    if (!lastTime) {
        lastTime = timeStamp;
    }
    let deltaTime = (timeStamp - lastTime) / 1000;
    lastTime = timeStamp;
    deltaTime = Math.min(deltaTime, 0.1);

    //clearwindow so things draw correctly
    ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);

    //update and draw game
    game.update(deltaTime);
    game.draw(ctx);

    //animate the game
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
