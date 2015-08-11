
function LoadScene(next_scene)
{
	var self = Scene();
	
	var progress = 0;
	var display_progress = 0;
	var max_speed = 64;
	var spd = 0;
	var accu = 1.6;
	var state = 0;
	var timer = 0;
	var load_text = "百鬼侵攻中";
	var width = screen_width*0.8;
	var height = 40;
	
	self.init = function()
	{
		state = 1;
		timer = fps*0.4;
	}
	
	self.update = function()
	{
		progress = img_preload / img_total;
		spd = Math.max(0.01, Math.min(spd*accu, max_speed/width, progress-display_progress));
		display_progress += spd;
		timer++;
		if (state == 0 && timer > fps*1)
		{
			timer = 0;
			state = 1;
		}
		else if (state == 1 && timer > fps*0.6)
		{
			timer = 0;
			state = 0;
		}
		if (display_progress >= 1)
		{
			return next_scene;
		}
		return self;
	}
	
	self.draw = function(scr)
	{
		scr.lineWidth = 3;
		scr.strokeStyle = "#0000FF";
		scr.fillStyle = "#FF0000";
		var x = screen_width/2 - width/2;
		var y = screen_height/2;
		scr.fillRect(x, y, (width)*display_progress, height);
		scr.strokeRect(x, y, width, height);
		
		var w;
		
		if (state == 0)
		{
			scr.font = font.get_font("NORMAL", 64);
			scr.fillStyle = "#FF0000";
			w = scr.measureText(load_text).width;
			scr.fillText(load_text, screen_width/2-w/2, y-25);
		}
		
		scr.font = font.get_font("NORMAL", 28);
		scr.fillStyle = "#0000FF";
		var text = ""+Math.floor(display_progress*100)+" %";
		w = scr.measureText(text).width;
		scr.fillText(text, screen_width/2-w/2, y+28);
	}
	
	self.init();
	
	return self;
}