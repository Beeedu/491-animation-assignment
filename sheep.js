class Sheep {

    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/sheep_final.png");

        this.x = 475;
        this.y = 375;
        this.speed = 150;
        this.direction = 3;

        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/sheep.png"), 0, 0, 64, 40, 7, 0.08);
        this.animations = [];
        this.loadAnimations();

        console.log(this.animator);
        console.log(this.animations[0]);
    };

    loadAnimations() {
        this.animations[0] = new Animator(this.spritesheet, 0, 0, 64, 41, 7, 0.08);
        this.animations[1] = new Animator(this.spritesheet, 0, 66, 64, 41, 7, 0.08);
        this.animations[2] = new Animator(this.spritesheet, 0, 120, 64, 50, 7, 0.08);
        this.animations[3] = new Animator(this.spritesheet, 0, 181, 64, 50, 7, 0.08);
    }

    update() {
        //this.x += this.speed * this.game.clockTick;
        if (this.game.keys.a) {  // left
            this.x -= this.speed * this.game.clockTick;
            this.direction = 1;
        } else if (this.game.keys.d) { // right
            this.x += this.speed * this.game.clockTick;
            this.direction = 0;
        } else if (this.game.keys.w) { // up
            this.y -= this.speed * this.game.clockTick;
            this.direction = 2;
        } else if (this.game.keys.s) { // down
            this.y += this.speed * this.game.clockTick;
            this.direction = 3;
        }
    };

    draw(ctx) {
        this.animations[this.direction].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1.25);
    };

}