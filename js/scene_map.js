
function MapScene(map_id, x, y)
{
	var self = Scene();
	
	var view_range;
	
	self.init = function()
	{
		if (!is_def(map_id))
		{
			map_id = MAP_OUTSIDE_TOWER;
		}
		if (!is_def(x))
		{
			x = 0;
		}
		if (!is_def(y))
		{
			y = 0;
		}
		view_range = ViewRange(x, y);
		self.map = map[map_id];
		self.map.set_view(view_range);
		self.character = character[CHARACTER_SAFE];
	}
	
	self.update = function ()
	{
		self.map.set_view(view_range);
		self.map.update();
		return self;
	}
	
	self.draw = function (scr)
	{
		self.map.draw(scr);
		self.character.draw_on(scr, 
			view_range.w/2*self.map.grid_width, view_range.h/2*self.map.grid_height, 
			self.map.grid_width, self.map.grid_height);
	}
	
	self.onkeyup = function (event)
	{
	}
	
	self.onkeydown = function (event)
	{
		var code = event.which || event.keyCode;
		
		if (code == key.UP)
		{
			view_range.move_up(1);
		}
		else if (code == key.DOWN)
		{
			view_range.move_down(1);
		}
		else if (code == key.LEFT)
		{
			view_range.move_left(1);
		}
		else if (code == key.RIGHT)
		{
			view_range.move_right(1);
		}
	}
	
	self.init();
	
	return self;
}
