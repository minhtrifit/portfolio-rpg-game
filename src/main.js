import { map, tileHeight, tileWidth } from "./constants";
import { k } from "./kaboomCtx";
import { loadObject, loadPlayer, playerMove } from "./utils";

k.scene("main", () => {
    loadPlayer(k);
    loadObject(k);

    const mapWidth = map[0].length * tileWidth;
    const mapHeight = map.length * tileHeight;

    const offsetX = (k.width() - mapWidth) / 2;
    const offsetY = (k.height() - mapHeight) / 2;

    for (let y = 0; y < map.length; ++y) {
        for (let x = 0; x < map[y].length; ++x) {
            const tile = map[y][x];

            if (tile === "x") {
                k.add([
                    sprite("barrier_top"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area(),
                    anchor("center"),
                    body({ isStatic: true }),
                    "barrier"
                ])
            }
            else if (tile === "y") {
                k.add([
                    sprite("barrier_bottom"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area(),
                    anchor("center"),
                    body({ isStatic: true }),
                    "barrier",
                ]);
            }
            else if (tile === "z") {
                k.add([
                    rect(tileWidth, tileHeight),
                    color(25, 25, 25),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area(),
                    anchor("center"),
                    body({ isStatic: true }),
                    "barrier",
                ]);
            }
            else if (tile === "%") {
                k.add([
                    sprite("wall"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area(),
                    anchor("center"),
                    "wall",
                ]);
            }
            else if (tile === "$") {
                k.add([
                    sprite("door"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area(),
                    anchor("center"),
                    "door",
                ]);
            }
            else if (tile === "#") {
                k.add([
                    sprite("window"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area(),
                    anchor("center"),
                    "window",
                ]);
            }
            else if (tile === ".") {
                k.add([
                    sprite("floor"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area(),
                    anchor("center"),
                    "floor",
                ]);
            }
            else if (tile === "&") {
                k.add([
                    sprite("computer_top"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area({
                        shape: new k.Rect(k.vec2(0, 0), 23, 30), 
                    }),
                    anchor("center"),
                    body({ isStatic: true }),
                    "computer",
                    "computer_trigger"
                ]);
            }
            else if (tile === "@") {
                k.add([
                    sprite("computer_bottom"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area(),
                    anchor("center"),
                    "computer",
                ]);
            }
            else if (tile === "!") {
                k.add([
                    sprite("shelf_top"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area({
                        shape: new k.Rect(k.vec2(0, 0), 23, 30), 
                    }),
                    anchor("center"),
                    body({ isStatic: true }),
                    "shelf",
                    "shelf_trigger"
                ]);
            }
            else if (tile === "*") {
                k.add([
                    sprite("shelf_bottom"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area(),
                    anchor("center"),
                    "shelf",
                ]);
            }
            else if (tile === "1") {
                k.add([
                    sprite("carpet_top_left"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area(),
                    anchor("center"),
                    "carpet",
                ]);
            }
            else if (tile === "2") {
                k.add([
                    sprite("carpet_top_right"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area(),
                    anchor("center"),
                    "carpet",
                ]);
            }
            else if (tile === "3") {
                k.add([
                    sprite("carpet_bottom_left"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area(),
                    anchor("center"),
                    "carpet",
                ]);
            }
            else if (tile === "4") {
                k.add([
                    sprite("carpet_bottom_right"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area(),
                    anchor("center"),
                    "carpet",
                ]);
            }
            else if (tile === "a") {
                k.add([
                    sprite("bed_top"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area(),
                    anchor("center"),
                    "bed",
                ]);
            }
            else if (tile === "b") {
                k.add([
                    sprite("bed_bottom"),
                    scale(4),
                    pos(x * tileWidth + offsetX, y * tileHeight + offsetY),
                    area({
                        shape: new k.Rect(k.vec2(0, 0), 23, 25), 
                    }),
                    anchor("center"),
                    body({ isStatic: true }),
                    "bed",
                    "bed_trigger"
                ]);
            }
        }
    }

    const player = add([
        sprite("player_idle"),
        scale(3),
        pos(
            (map[0].length / 2) * tileWidth + offsetX,
            (map.length / 2) * tileHeight + offsetY,
        ),
        area({
            shape: new k.Rect(k.vec2(0, 3), 10, 30)
        }),
        anchor("center"),
        body(),
        "player",
    ]);

    player.play("idle-down");

    playerMove(player);
});

k.go("main");