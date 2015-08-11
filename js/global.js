
var config = {
};

var global = {
};

var game = {
};

var image = {
	M_BASE: "p/base.png", 
	M_DUNGEON: "p/dungeon.png", 
	M_INSIDE: "p/ins.png", 
	M_OUTSIDE: "p/out.png", 
	M_SHIP: "p/ship.png", 
};

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
