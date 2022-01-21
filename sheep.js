class Sheep {
    constructor(game) {
      this.game = game;
      this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/sheep.png"), 0, 0, 64, 40, 7, 0.08);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 5, 5)
    };

}