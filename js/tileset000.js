
var tileset_data = {
};

var TILESET_BASE_TEMPLATE = {
	width: 480, 
	height: 256,
	grid_width: 16, 
	grid_height: 16, 
};

var TILESET_RM2K_TEMPLATE = extend(TILESET_BASE_TEMPLATE, {
});

tileset_data[TILESET_BASE = 1] = extend(TILESET_RM2K_TEMPLATE, {
	image: MAP_BASE, 
});

tileset_data[TILESET_DUNGEON = 2] = extend(TILESET_RM2K_TEMPLATE, {
	image: MAP_DUNGEON, 
});

var tileset = {
};

function tileset_init()
{
	for (var id in tileset_data)
	{
		tileset[id] = TileSet(tileset_data[id]);
	}
}
