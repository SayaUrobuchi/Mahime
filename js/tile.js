
var tile = {
	width: 32, 
	height: 32, 
	g_width: 16, 
	g_height: 16, 
	rate: 2, 
};

var TILE_BASE_TEMPLATE = {
	width: 480, 
	height: 256, 
	width_grid: 480/tile.width, 
	height_grid: 256/tile.height, 
	
	get_image: function(tile_data)
	{
		return image[tile_data.image];
	}
};

tile[TILE_BASE = 0] = extend(TILE_BASE_TEMPLATE, {
	image: "M_BASE", 
});

tile[TILE_DUNGEON = 1] = extend(TILE_BASE_TEMPLATE, {
	image: "M_DUNGEON", 
});
