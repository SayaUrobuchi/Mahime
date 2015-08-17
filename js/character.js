
var CHARACTER_EXPAND_TYPE = {
	FIXED: 1, 
	RM: 2, 
};

function Character(data)
{
	var self = {};
	
	self.init = function()
	{
		self.width = data.width;
		self.height = data.height;
		self.pivot_r = data.image_r;
		self.pivot_c = data.image_c;
		self.r = self.pivot_r;
		self.c = self.pivot_c;
		self.draw_type = data.image_type;
		self.image = image[data.image];
	}
	
	self.draw_on = function(scr, x, y, w, h)
	{
		var fixed_h = self.height * w / self.width;
		var fixed_y = y - (fixed_h - h);
		scr.drawImage(self.image, 
			self.c * self.width, self.r * self.height, self.width, self.height, 
			x, fixed_y, w, fixed_h);
	}
	
	self.init();
	
	return self;
}