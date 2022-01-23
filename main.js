const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/sheep.png");
ASSET_MANAGER.queueDownload("./sprites/sheep_final.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEngabled = false;

	gameEngine.addEntity(new Sheep(gameEngine));

	gameEngine.init(ctx);
	gameEngine.start();
});
