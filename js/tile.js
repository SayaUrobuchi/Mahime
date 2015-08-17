
function Tile(data)
{
	var self = {};
	
	self.init = function()
	{
		self.tileset = tileset[data.tileset_id];
		self.image = self.tileset.image;
		self.width = self.tileset.grid_width;
		self.height = self.tileset.grid_height;
		self.pivot_r = data.tileset_r;
		self.pivot_c = data.tileset_c;
		self.r = self.pivot_r;
		self.c = self.pivot_c;
	}
	
	self.update = function()
	{
	}
	
	self.update_on_changed = function(map, x, y)
	{
		return false;
	}
	
	self.draw_on = function(scr, x, y, w, h)
	{
		scr.drawImage(self.image, 
			self.c * self.width, self.r * self.height, self.width, self.height, 
			x, y, w, h);
	}
	
	self.init();
	
	return self;
}
