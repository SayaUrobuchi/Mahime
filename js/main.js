
var fps = 30;
var ms_per_frame = 1000 / fps;
var screen_width = 1024;
var screen_height = 576;
var canvas;
var screen;

window.onload = function()
{
	init();
	setTimeout(main, ms_per_frame);
}

var scene;

var img_preload = 0;
var img_total = 0;

function preload_img_callback()
{
	img_preload++;
}

function preload()
{
	for (var item in image)
	{
		img_total++;
		var path = image[item];
		var i = new Image();
		i.src = path;
		i.onload = preload_img_callback();
		image[item] = i;
	}
}

function init()
{
	preload();

	canvas = document.getElementById("canvas");
	canvas.width = screen_width;
	canvas.height = screen_height;
	screen = canvas.getContext("2d");
	
	scene = LoadScene(MapScene());
	
	document.onkeydown = function(event)
	{
		scene.onkeydown(event);
	}
	
	document.onkeyup = function(event)
	{
		scene.onkeyup(event);
	}
}

function main()
{
	scene = scene.update();
	
	screen.fillStyle = "#000000";
	screen.fillRect(0, 0, screen_width, screen_height);
	scene.draw(screen);
	
	setTimeout(main, ms_per_frame);
}
