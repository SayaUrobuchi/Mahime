
function MapScene(map_id, x, y)
{
	var self = Scene();
	
	var map;
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
		map = Map(map_id);
		map.set_view(view_range);
	}
	
	self.update = function ()
	{
		map.set_view(view_range);
		map.update();
		return self;
	}
	
	self.draw = function (scr)
	{
		map.draw(scr);
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
