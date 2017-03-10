function GetSum( a,b )
{
  var max = Math.max(a, b); 
  var cur = Math.min(a, b);
  var s = 0;
  while (cur <= max) {
    s += cur;
    cur++;
  }
  return a === b ? a : s;
}