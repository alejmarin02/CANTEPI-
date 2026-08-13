console.log("CANTEPI RPG: game.js conectado correctamente");
const canvas = document.querySelector("#game canvas");
const ctx = canvas.getContext("2d");

const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 32,
    speed: 4
};

const keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
});

function update() {
    if (keys["ArrowUp"] || keys["w"] || keys["W"]) {
        player.y -= player.speed;
    }

    if (keys["ArrowDown"] || keys["s"] || keys["S"]) {
        player.y += player.speed;
    }

    if (keys["ArrowLeft"] || keys["a"] || keys["A"]) {
        player.x -= player.speed;
    }

    if (keys["ArrowRight"] || keys["d"] || keys["D"]) {
        player.x += player.speed;
    }

    player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ffcc00";
    ctx.fillRect(player.x, player.y, player.size, player.size);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
