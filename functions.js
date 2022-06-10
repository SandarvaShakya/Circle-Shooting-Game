/**
 * spawn enemy circles in random location at some interval of time
 */
function spawnEnemies(){
    setInterval(() => {
        const radius = Math.floor(10 + Math.random() * 30)
        let x
        let y
        if(Math.random() < 0.5){
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
            y = Math.random() * canvas.height
        } else{
            x = Math.random() * canvas.width
            y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
        }
        const color = randomColor()

        const enemyAngle = Math.atan2(yCoordOfPlayer - y, xCoordOfPlayer - x)
        const xVelocityE = Math.cos(enemyAngle) 
        const yVelocityE =  Math.sin(enemyAngle)

        const velocity = {
            x: xVelocityE,
            y: yVelocityE
        }

        enemies.push(new Enemy(x, y, radius, color, velocity))
    }, 1000)
}

/**
 * generates random color
 * @returns {string} colorcode in rgba format
 */
function randomColor(){
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let opacity = 1

    return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}