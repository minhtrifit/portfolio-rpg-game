import { dialogContents, MOVESET_KEYS, OBJECT_SPRITES_URL, SPEED, SPRITES_URL } from "./constants";

export const loadPlayer = (k) => {
    k.loadSprite("player_idle", SPRITES_URL.idle, {
        sliceX: 24,
        anims: {
            ["idle-right"]: {
                from: 0,
                to: 5,
                speed: 6,
			    loop: true,
            },
            ["idle-up"]: {
                from: 6,
                to: 11,
                speed: 6,
			    loop: true,
            },
            ["idle-left"]: {
                from: 12,
                to: 17,
                speed: 6,
			    loop: true,
            },
            ["idle-down"]: {
                from: 18,
                to: 23,
                speed: 6,
			    loop: true,
            },
        },
    });

    k.loadSprite("player_run", SPRITES_URL.run, {
        sliceX: 24,
        anims: {
            ["run-right"]: {
                from: 0,
                to: 5,
                speed: 6,
			    loop: true,
            },
            ["run-up"]: {
                from: 6,
                to: 11,
                speed: 6,
			    loop: true,
            },
            ["run-left"]: {
                from: 12,
                to: 17,
                speed: 6,
			    loop: true,
            },
            ["run-down"]: {
                from: 18,
                to: 23,
                speed: 6,
			    loop: true,
            },
        },
    });
};

export const loadObject = (k) => {
    k.loadSprite("floor", OBJECT_SPRITES_URL.floor);
    k.loadSprite("door", OBJECT_SPRITES_URL.door);
    k.loadSprite("wall", OBJECT_SPRITES_URL.wall);
    k.loadSprite("window", OBJECT_SPRITES_URL.window);
    k.loadSprite("shelf_top", OBJECT_SPRITES_URL.shelf_top);
    k.loadSprite("shelf_bottom", OBJECT_SPRITES_URL.shelf_bottom);
    k.loadSprite("computer_top", OBJECT_SPRITES_URL.computer_top);
    k.loadSprite("computer_bottom", OBJECT_SPRITES_URL.computer_bottom);
    k.loadSprite("carpet_top_left", OBJECT_SPRITES_URL.carpet_top_left);
    k.loadSprite("carpet_top_right", OBJECT_SPRITES_URL.carpet_top_right);
    k.loadSprite("carpet_bottom_left", OBJECT_SPRITES_URL.carpet_bottom_left);
    k.loadSprite("carpet_bottom_right", OBJECT_SPRITES_URL.carpet_bottom_right);
    k.loadSprite("bed_top", OBJECT_SPRITES_URL.bed_top);
    k.loadSprite("bed_bottom", OBJECT_SPRITES_URL.bed_bottom);
    k.loadSprite("barrier_top", OBJECT_SPRITES_URL.barrier_top);
    k.loadSprite("barrier_bottom", OBJECT_SPRITES_URL.barrier_bottom);
}

export const playerMove = (player) => {
    MOVESET_KEYS.map((key) => {
        onKeyDown(key.left, () => {
            player.move(-SPEED, 0);

            if (player.curAnim() !== "run-left") {
                player.use(sprite("player_run"));
                player.play("run-left");
            }
        });

        onKeyDown(key.right, () => {
            player.move(SPEED, 0);

            if (player.curAnim() !== "run-right") {
                player.use(sprite("player_run"));
                player.play("run-right");
            }
        });

        onKeyDown(key.up, () => {
            player.move(0, -SPEED);

            if (player.curAnim() !== "run-up") {
                player.use(sprite("player_run"));
                player.play("run-up");
            }
        });

        onKeyDown(key.down, () => {
            player.move(0, SPEED);

            if (player.curAnim() !== "run-down") {
                player.use(sprite("player_run"));
                player.play("run-down");
            }
        });
        
        [key.left, key.right, key.up, key.down].forEach((key) => {
            MOVESET_KEYS.map((k) => {
                onKeyRelease(key, () => {
                    if (!isKeyDown(key.left) && key === k.left) {
                        player.use(sprite("player_idle"));
                        player.play("idle-left");
                    }

                    if (!isKeyDown(key.right) && key === k.right) {
                        player.use(sprite("player_idle"));
                        player.play("idle-right");
                    }

                    if (!isKeyDown(key.up) && key === k.up) {
                        player.use(sprite("player_idle"));
                        player.play("idle-up");
                    }

                    if (!isKeyDown(key.down) && key === k.down) {
                        player.use(sprite("player_idle"));
                        player.play("idle-down");
                    }
                })
            })
        })
    })
}

export const spawnInteractArrow = (k, p) => {
    k.add([
        polygon([
            vec2(-10, -10), // Top left
            vec2(10, -10), // Top right
            vec2(0, 10), // Bottom center
        ]),
        color(255, 0, 0),
        pos(p),
        outline(3, k.Color.BLACK),
        "interact_arrow",
    ]);
}

export const destroyInteractArrow = (k) => {
    const interactArrows = k.get("interact_arrow");
    k.destroy(interactArrows[0]);
}

export const showDialog = (dialogCtn, dialogTag, dialogText) => {
    dialogCtn.style.display = "block";
    const text = dialogContents[dialogTag];
    let index = 0;
    let currentText = "";

    const intervalRef = setInterval(() => {
        if (index < text.length) {
            currentText += text[index];
            dialogText.innerHTML = currentText;
            index++;
            return;
        }

        clearInterval(intervalRef);
    }, 5);
}

export const hideDialog = (dialogCtn, dialogText) => {
    dialogText.innerHTML = "";
    dialogCtn.style.display = "none";
}