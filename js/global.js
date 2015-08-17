
var config = {
};

var global = {
};

var game = {
};

var image = {
};

// MAP
image[MAP_BASE = 1] = "p/base.png";
image[MAP_DUNGEON = 2] = "p/dungeon.png";
image[MAP_INSIDE = 3] = "p/ins.png";
image[MAP_OUTSIDE = 4] = "p/out.png";
image[MAP_SHIP = 5] = "p/ship.png";
// CHARACTER
image[CHAR_SAFE = 16] = "p/char_main0.png";

var audio = {
};

var font = {
	NORMAL: "DFKai-SB", 
	//NORMAL: "Consolas", 
	
	get_font: function(key, size, extra)
	{
		return size+"px "+font[key];
	}
};

var key = {
	LEFT: 37, 
	UP: 38, 
	RIGHT: 39, 
	DOWN: 40, 
};
