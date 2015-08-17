
var character_data = {
};

var CHARACTER_BASE_TEMPLATE = {
	width: 24, 
	height: 32, 
	image_type: CHARACTER_EXPAND_TYPE.RM, 
};

var CHARACTER_FIXED_PIC_TEMPLATE = extend(CHARACTER_BASE_TEMPLATE, {
	image_type: CHARACTER_EXPAND_TYPE.FIXED, 
});

var character = {
};

function character_init()
{
	for (var id in character_data)
	{
		character[id] = Character(character_data[id]);
	}
}

character_data[CHARACTER_SAFE = 1] = extend(CHARACTER_BASE_TEMPLATE, {
	image: CHAR_SAFE, 
	image_r: 2, 
	image_c: 4, 
});
