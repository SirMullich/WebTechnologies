function getMiddle(s)
{
	var len = s.length;
	var res = "";
  if (len % 2 == 0) {
  	res += s[len / 2 - 1] + s[len / 2];
  } else {
  	res += s[(len - 1) / 2];
  }
  return res;
}
