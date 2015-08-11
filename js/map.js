
var map_data = {
};

function Map(id)
{
	var self = {};
	
	var data;
	var view_range;
	
	self.init = function()
	{
		data = map_data[id];
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
				if (r >= 0 && r < data.height && c >= 0 && c < data.width)
				{
					var g = data.grid[r][c];
					var img = tile[g.tid].get_image(tile[g.tid]);
					scr.drawImage(img, g.x*tile.g_width, g.y*tile.g_height, tile.g_width, tile.g_height, 
						j*tile.width, i*tile.height, tile.width, tile.height);
				}
			}
		}
	}
	
	self.set_view = function (view)
	{
		view_range = view;
	}
	
	self.init();
	
	return self;
}

function Grid(tid, x, y)
{
	var self = {};
	
	self.tid = tid;
	self.x = x;
	self.y = y;
	
	return self;
}
