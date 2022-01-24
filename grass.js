class Grass {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.image = ASSET_MANAGER.getAsset("./sprites/grass.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.image, 0, 0, 1024, 768);
    }
}