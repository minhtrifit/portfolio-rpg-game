import { MOVESET_KEYS, SPEED, SPRITES_URL } from "./constants";

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