import kaboom from "kaboom";

export const k = kaboom({
    global: true,
    canvas: document.getElementById("game"),
    background: [25, 25, 25],
})