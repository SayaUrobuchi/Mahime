
function Map(data)
{
	var self = {};
	
	var view_range;
	var grid = [];
	
	self.init = function()
	{
		self.grid_width = data.grid_width;
		self.grid_height = data.grid_height;
		self.width = data.width;
		self.height = data.height;
		for (var i in data.grid)
		{
			var ary = data.grid[i];
			grid[i] = [];
			for (var j in ary)
			{
				grid[i][j] = tile[ary[j]];
			}
		}
	}
	
	self.update = function()
	{
	}
	
	self.draw = function(scr)
	{
		for (var i=0; i<view_range.h; i++)
		{
			for (var j=0; j<view_range.w; j++)
			{
				var r = view_range.y0 + i;
				var c = view_range.x0 + j;
				if (r >= 0 && r < self.height && c >= 0 && c < self.width)
				{
					var g = grid[r][c];
					if (is_def(g))
					{
						grid[r][c].draw_on(scr, j*self.grid_width, i*self.grid_height, self.grid_width, self.grid_height);
						/*var img = tile[g.tid].get_image(tile[g.tid]);
						scr.drawImage(img, g.x*tile.g_width, g.y*tile.g_height, tile.g_width, tile.g_height, 
							j*tile.width, i*tile.height, tile.width, tile.height);*/
					}
				}
			}
		}
	}
	
	self.set_view = function (view)
	{
		view_range = view;
		view_range.adjust_grid_size(self.grid_width, self.grid_height);
		view_range.adjust_bound(self.width, self.height);
	}
	
	self.init();
	
	return self;
}
