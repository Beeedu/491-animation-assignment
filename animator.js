class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, reverse=false) {
        Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration, reverse});

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y, scale, flipX=false, flipY=false) {
        this.elapsedTime += tick;
        if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        const frame = this.currentFrame();

        if (flipX) {
            ctx.scale(1, -1)
            y = -y - this.height;
        }
        if (flipY) {
            ctx.scale(-1, 1);
            x = -x - this.width;
        }

        ctx.drawImage(this.spritesheet,
            this.xStart + (this.width * frame), this.yStart,
            this.width, this.height,
            x, y,
            this.width * scale, this.height * scale);

        ctx.restore();
    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
}