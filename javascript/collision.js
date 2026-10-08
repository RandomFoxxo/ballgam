export function collision(ball, gameObject) {
    
        let bottomOfBall = ball.position.y + ball.size.height;
        let topOfBall = ball.position.y;

        let topOfGameObject = gameObject.position.y;
        let leftOfGameObject = gameObject.position.x;
        let rightOfGameObject = gameObject.position.x + gameObject.width;
        let bottomOfGameObject = gameObject.position.y + gameObject.height;

        if (bottomOfBall >= topOfGameObject 
            && topOfBall <= bottomOfGameObject
            && ball.position.x >= leftOfGameObject
            && ball.position.x + ball.size.width <= rightOfGameObject
        ) {
            return true;
        } else {
            return false;
        }
}