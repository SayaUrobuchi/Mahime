
function TileSet(data)
{
	var self = {};
	
	self.init = function()
	{
		self.width = data.width;
		self.height = data.height;
		self.grid_width = data.grid_width;
		self.grid_height = data.grid_height;
		self.image = image[data.image];
	}
	
	self.init();
	
	return self;
}
