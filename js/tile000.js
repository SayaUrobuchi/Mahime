
var tile_data = {
};

var TILE_EXPAND_TYPE = {
	RM2K_GROUND: 1, 
};

var TILE_FLOW_TYPE = {
	RM2K_WATER: 1, 
};

var TILE_BASE_TEMPLATE = {
};

var TILE_EXPAND_TEMPLATE = extend(TILE_BASE_TEMPLATE, {
	expand: true, 
	expand_type: TILE_EXPAND_TYPE.RM2K_GROUND, 
});

var TILE_FLOW_TEMPLATE = extend(TILE_BASE_TEMPLATE, {
	flow: true, 
	flow_type: TILE_FLOW_TYPE.RM2K_WATER, 
});

tile_data[TILE_BROWN_DIRT = 16] = extend(TILE_BASE_TEMPLATE, {
	tileset_id: TILESET_DUNGEON, 
	tileset_r: 13, 
	tileset_c: 0, 
});

tile_data[TILE_BROWN_DIRT_GRASS = 17] = extend(TILE_EXPAND_TEMPLATE, {
	tileset_id: TILESET_DUNGEON, 
	tileset_r: 14, 
	tileset_c: 4, 
});

tile_data[TILE_WATER_EDGE_GRASS = 1] = extend(TILE_FLOW_TEMPLATE, {
	tileset_id: TILESET_DUNGEON, 
	tileset_r: 2, 
	tileset_c: 1, 
});

var tile = {
};

function tile_init()
{
	for (var id in tile_data)
	{
		tile[id] = Tile(tile_data[id]);
	}
}
