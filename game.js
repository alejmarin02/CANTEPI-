console.log("CANTEPI RPG: game.js conectado correctamente");

const canvas = document.querySelector("#game canvas");
const ctx = canvas.getContext("2d");

const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 46,
    speed: 4,
    gender: "male"
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

    player.x = Math.max(
        0,
        Math.min(canvas.width - player.size, player.x)
    );

    player.y = Math.max(
        0,
        Math.min(canvas.height - player.size, player.y)
    );
}

function draw() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    // CABEZA
    ctx.beginPath();

    ctx.arc(
        player.x + 23,
        player.y + 10,
        9,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#f1c27d";
    ctx.fill();

    // CUERPO
    ctx.fillStyle =
        player.gender === "male"
            ? "#3498db"
            : "#e91e63";

    ctx.fillRect(
        player.x + 11,
        player.y + 20,
        24,
        22
    );

    // BRAZO IZQUIERDO
    ctx.fillRect(
        player.x + 5,
        player.y + 21,
        6,
        18
    );

    // BRAZO DERECHO
    ctx.fillRect(
        player.x + 35,
        player.y + 21,
        6,
        18
    );

    // PIERNA IZQUIERDA
    ctx.fillStyle = "#333";

    ctx.fillRect(
        player.x + 11,
        player.y + 42,
        8,
        14
    );

    // PIERNA DERECHA
    ctx.fillRect(
        player.x + 27,
        player.y + 42,
        8,
        14
    );
}

document.querySelectorAll(".gender-button").forEach((button) => {

    button.addEventListener("click", () => {

        player.gender = button.dataset.gender;

        console.log(
            "Personaje seleccionado:",
            player.gender
        );
    });
});

function gameLoop() {

    update();
    draw();

    requestAnimationFrame(gameLoop);
}

gameLoop();
