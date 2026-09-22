const grass = document.querySelector(".grass");
const flowersContainer = document.getElementById("flowers");


// =========================
// CREATE FLOWER
// =========================

function createFlower(x, y) {

    const flower = document.createElement("div");

    flower.classList.add("flower");


    // Position flower
    flower.style.left = `${x - 45}px`;
    flower.style.top = `${y - 170}px`;


    // =========================
    // PETALS
    // =========================

    for (let i = 1; i <= 8; i++) {

        const petal = document.createElement("div");

        petal.classList.add(
            "petal",
            `p${i}`
        );

        flower.appendChild(petal);
    }


    // =========================
    // CENTER
    // =========================

    const center = document.createElement("div");

    center.classList.add("center");

    flower.appendChild(center);


    // =========================
    // STEM
    // =========================

    const stem = document.createElement("div");

    stem.classList.add("stem");

    flower.appendChild(stem);


    // =========================
    // LEFT LEAF
    // =========================

    const leftLeaf = document.createElement("div");

    leftLeaf.classList.add(
        "leaf",
        "left"
    );

    flower.appendChild(leftLeaf);


    // =========================
    // RIGHT LEAF
    // =========================

    const rightLeaf = document.createElement("div");

    rightLeaf.classList.add(
        "leaf",
        "right"
    );

    flower.appendChild(rightLeaf);


    // Add flower
    flowersContainer.appendChild(flower);
}


// =========================
// TOUCH / CLICK
// =========================

grass.addEventListener("pointerdown", function(event) {

    /*
        pointerdown works with:

        📱 Touchscreen
        🖱️ Mouse
        ✏️ Stylus
    */

    const x = event.clientX;
    const y = event.clientY;

    createFlower(x, y);

});