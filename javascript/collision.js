export function collision(ball, gameObject) {
    
        let bottomOfBall = ball.position.y + ball.size.height;
        let topOfBall = ball.position.y;
        let leftOfBall = ball.position.x;
        let rightOfBall = ball.position.x + ball.size.width;

        let topOfGameObject = gameObject.position.y;
        let leftOfGameObject = gameObject.position.x;
        let rightOfGameObject = gameObject.position.x + gameObject.width;
        let bottomOfGameObject = gameObject.position.y + gameObject.height;

        if (bottomOfBall >= topOfGameObject 
            && topOfBall <= bottomOfGameObject
            && rightOfBall >= leftOfGameObject
            && leftOfBall <= rightOfGameObject
        ) {
            return true;
        } else {
            return false;
        }
}