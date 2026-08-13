console.log("CANTEPI RPG: game.js conectado correctamente");

const canvas = document.querySelector("#game canvas");
const ctx = canvas.getContext("2d");

const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 32,
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

    // Cabeza
    ctx.beginPath();
    ctx.arc(
        player.x + 16,
        player.y + 10,
        8,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#f1c27d";
    ctx.fill();

    // Cuerpo
    ctx.fillStyle =
        player.gender === "male"
            ? "#3498db"
            : "#e91e63";

    ctx.fillRect(
        player.x + 8,
        player.y + 18,
        16,
        18
    );

    // Piernas
    ctx.fillStyle = "#333";

    ctx.fillRect(
        player.x + 8,
        player.y + 36,
        6,
        10
    );

    ctx.fillRect(
        player.x + 18,
        player.y + 36,
        6,
        10
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
gameLoop();
