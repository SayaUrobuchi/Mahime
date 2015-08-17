
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
		self.adjust_grid_size(16, 16);
		self.adjust_bound(100, 100);
	}
	
	self.adjust_bound = function(r, c)
	{
		self.bound_r = r;
		self.bound_c = c;
		self.adjust_position();
	}
	
	self.adjust_position = function()
	{
		self.x = Math.max(0, Math.min(self.x, self.bound_r-1));
		self.y = Math.max(0, Math.min(self.y, self.bound_c-1));
	}
	
	self.adjust_grid_size = function(w, h)
	{
		self.grid_width = w;
		self.grid_height = h;
		self.w = screen_width / self.grid_width;
		self.h = screen_height / self.grid_height;
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
		self.adjust_position();
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