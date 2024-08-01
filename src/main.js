import { k } from "./kaboomCtx";
import { loadPlayer, playerMove } from "./utils";

k.scene("main", () => {
    loadPlayer(k);

    const player = add([
        sprite("player_idle"),
        scale(3),
        pos(100, 200),
        area(),
        body(),
        "player",
    ]);

    player.play("idle-down");

    playerMove(player);
});

k.go("main");