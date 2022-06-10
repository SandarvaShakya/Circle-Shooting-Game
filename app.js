const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth 
canvas.height = window.innerHeight

//Player's coordinates and radius
let xCoordOfPlayer = canvas.width / 2
let yCoordOfPlayer = canvas.height / 2
const radiusOfPlayer = 30

//make new player
const player = new Player(xCoordOfPlayer, yCoordOfPlayer, radiusOfPlayer, 'rgb(255, 237, 237)')

let projectiles = []
let enemies = []

let animationId
function animate(){
    animationId = requestAnimationFrame(animate)
    context.fillStyle = 'rgba(0, 0, 0, 0.1)'
    context.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()

    projectiles.forEach((projectile, projectileIndex) => {
        projectile.update()

        //remove projectiles outside the screen
        if(
            projectile.x - projectile.radius < 0 || 
            projectile.x + projectile.radius > canvas.width ||
            projectile.y - projectile.radius < 0 ||
            projectile.y + projectile.radius > canvas.height
        ){
            setTimeout(() => {
                projectiles.splice(projectileIndex, 1)
            }, 0)
        }
    })

    enemies.forEach((enemy, enemyIndex) => {
        enemy.update()

        const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y)
        //Game Over
        if(distance - enemy.radius - player.radius < 1){
            cancelAnimationFrame(animationId)
        }

        projectiles.forEach((projectile, projectileIndex) => {
            const distance = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)
            if(distance - enemy.radius - projectile.radius < 1){
                setTimeout(()=>{
                    enemies.splice(enemyIndex, 1)
                    projectiles.splice(projectileIndex, 1)
                }, 0)
            }
        })
    })
}

addEventListener('click', event => {
    // console.log(event);
    // console.log(projectiles.length);
    const projectileAngle = Math.atan2(event.clientY - yCoordOfPlayer, event.clientX - xCoordOfPlayer)
    const xVelocity = Math.cos(projectileAngle) 
    const yVelocity =  Math.sin(projectileAngle)

    const projectileVelocity = {
        x: xVelocity * 4,
        y: yVelocity * 4
    }
    const projectile = new Projectile(canvas.width / 2, canvas.height / 2, 5, 'rgb(255, 237, 237)', projectileVelocity)
    projectiles.push(projectile)
})

animate()
spawnEnemies()