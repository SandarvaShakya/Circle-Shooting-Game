/**
 * Represents the player (Circle at the center)
 */
 class Player{
    /**
     * 
     * @param {int} x the x coordinate of the player
     * @param {int} y the y coordinate of the player
     * @param {int} radius the radius of the player object
     * @param {string} color the color of player
     */
    constructor(x, y, radius, color){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    /**
     * draws the player
     */
    draw(){
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        context.fillStyle = this.color
        context.fill()
        context.closePath()
    }

    update(){
        this.draw()
    }
}

/**
 * Represents a projectile (i.e bullet shot by the player)
 */
 class Projectile{
    /**
    * @param {int} x = the x coordinate of the projectile to be spawned 
    * @param {int} y = the y coordinate of the projectile to be spawned 
    * @param {int} radius = the radius of the projectile to be spawned 
    * @param {string} color = color of the projectile
    * @param {object} velocity = the x velocity and y velocity of the projectile when shot(moving)
    */
    constructor(x, y, radius, color, velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    /**
     * spawns(draws) the projectile
     */
    draw(){
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        context.fillStyle = this.color
        context.fill()
        context.closePath()
    }

    /**
     * moves the projectile by incrementing the 
     * x and y coordinate with the x and y velocity
     */
    update(){
        this.x += this.velocity.x
        this.y += this.velocity.y
        this.draw()
    }
}

class Enemy{
        /**
    * @param {int} x = the x coordinate of the enemy to be spawned 
    * @param {int} y = the y coordinate of the enemy to be spawned 
    * @param {int} radius = the radius of the enemy to be spawned 
    * @param {string} color = color of the enemy
    * @param {object} velocity = the x velocity and y velocity of the enemy when shot(moving)
    */
         constructor(x, y, radius, color, velocity){
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.velocity = velocity
        }
    
        /**
         * spawns(draws) the enemy
         */
        draw(){
            context.beginPath()
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            context.fillStyle = this.color
            context.fill()
            context.closePath()
        }
    
        /**
         * moves the enemy by incrementing the 
         * x and y coordinate with the x and y velocity
         */
        update(){
            this.x += this.velocity.x
            this.y += this.velocity.y
            this.draw()
        }
}