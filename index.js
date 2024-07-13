let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let h1Tag = document.getElementsByTagName("h1")[0];

let carpmaSayaci = 0;

class Entity {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        this.velocityX = 10;
        this.velocityY = 10;

        this.draw();
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    checkCollisions() {
        if (this.x < 0 || this.x + this.width > canvas.width) {
            return 1;
        }

        if (this.y < 0 || this.y + this.height > canvas.height) {
            return 2;
        }

        return 0;
    }
}

let kare = new Entity(0, 0, 50, 50, "DarkRed");

let animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    kare.x += kare.velocityX;
    kare.y += kare.velocityY;

    let collision = kare.checkCollisions();

    if (collision === 1) {
        kare.velocityX = -kare.velocityX;
        carpmaSayaci ++;
    }
    
    else if (collision === 2) {
        kare.velocityY = -kare.velocityY;
        carpmaSayaci ++;
    }

    kare.draw();
    h1Tag.innerHTML = String(carpmaSayaci);
    requestAnimationFrame(animate);
}

animate();

