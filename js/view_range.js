
function ViewRange(x, y)
{
	var self = {};
	
	self.LEFT = 0;
	self.UP = 1;
	self.RIGHT = 2;
	self.DOWN = 3;
	
	self.init = function()
	{
		self.x = x;
		self.y = y;
		self.w = screen_width / tile.width;
		self.h = screen_height / tile.height;
		self.adjust_view();
	}
	
	self.adjust_view = function()
	{
		self.x0 = self.x - self.w/2;
		self.x1 = self.x + self.w/2;
		self.y0 = self.y - self.h/2;
		self.y1 = self.y + self.h/2;
	}
	
	self.move = function(dir, dis)
	{
		switch (dir)
		{
		case self.UP:
			self.y -= dis;
			break;
		case self.LEFT:
			self.x -= dis;
			break;
		case self.DOWN:
			self.y += dis;
			break;
		case self.RIGHT:
			self.x += dis;
			break;
		}
		self.adjust_view();
	}
	
	self.move_up = function(dis)
	{
		self.move(self.UP, dis);
	}
	
	self.move_left = function(dis)
	{
		self.move(self.LEFT, dis);
	}
	
	self.move_down = function(dis)
	{
		self.move(self.DOWN, dis);
	}
	
	self.move_right = function(dis)
	{
		self.move(self.RIGHT, dis);
	}
	
	self.init();
	
	return self;
}