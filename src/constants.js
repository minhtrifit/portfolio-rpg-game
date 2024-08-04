export const SPRITES_URL = {
    idle: "Character/idle.png",
    run: "Character/run.png"
};

export const OBJECT_SPRITES_URL = {
    ["floor"]: "Object/floor.png",
    ["wall"]: "Object/wall.png",
    ["window"]: "Object/window.png",
    ["shelf_top"]: "Object/shelf_top.png",
    ["shelf_bottom"]: "Object/shelf_bottom.png",
    ["door"]: "Object/door.png",
    ["computer_top"]: "Object/computer_top.png",
    ["computer_bottom"]: "Object/computer_bottom.png",
    ["carpet_top_left"]: "Object/carpet_top_left.png",
    ["carpet_top_right"]: "Object/carpet_top_right.png",
    ["carpet_bottom_left"]: "Object/carpet_bottom_left.png",
    ["carpet_bottom_right"]: "Object/carpet_bottom_right.png",
    ["bed_top"]: "Object/bed_top.png",
    ["bed_bottom"]: "Object/bed_bottom.png",
    ["barrier_top"]: "Object/barrier_top.png",
    ["barrier_bottom"]: "Object/barrier_bottom.png",
}

export const SOUNDS_URL = {
    interact: "/Sound/interact.mp3"
}

export const SPEED = 200;

export const MOVESET_KEYS = [
    {
        left: "left",
        right: "right",
        up: "up",
        down: "down"
    },
    {
        left: "a",
        right: "d",
        up: "w",
        down: "s"
    }
];

export const INTERACT_KEY = "f";

export const map = [
    "zxxxxxxz",
    "z&%#$%!z",
    "z@....*z",
    "z..12..z",
    "za.34..z",
    "zb.....z",
    "zyyyyyyz",
];

export const tileWidth = 64;
export const tileHeight = 64;

export const dialogContents = {
    computer: `Hello my name is minhtrifit. Click to see my <a id="link" href="https://github.com/minhtrifit" target="_blank">Github</a> profile & see more my cool projects!`,
    bed: `This is bed`,
    shelf: `Here's my <a id="link" href="/Document/resume.pdf" target="_blank">Portfolio</a> as Software Engineer!`,
}