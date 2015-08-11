
function extend(dst, src)
{
	var res = {};
	for (var key in dst)
	{
		res[key] = dst[key];
	}
	for (var key in src)
	{
		res[key] = src[key];
	}
	return res;
}

function is_def(v)
{
	return typeof v !== 'undefined';
}
