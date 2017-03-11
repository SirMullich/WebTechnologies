function digPow(n, p){
  var numString = n.toString();
  var sum = 0;
  for (var i = 0; i < numString.length; i++) {
  	sum += Math.pow(parseInt(numString[i]), p + i);
  }
  if (sum % n == 0) {
  	return sum / n;
  } else {
  	return -1;
  }
}
