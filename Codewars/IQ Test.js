	function iqTest(numbers){
	  var even = 0, odd = 0, res = 0;
	  numsArr = numbers.split(" ");
	  var oddity = numsArr[i] % 2;
	  var index = 0;
	  for (var i = 0; i < numsArr.length; i++) {
	  	if (parseInt(numsArr[i]) % 2 == 0) {
	  		even++;
	  	} else {
	  		odd++;
	  	}
	  }

	  if (odd == 1 && even > 1) {
	  	for (var i = 0; i < numsArr.length; i++) {
	  		if (numsArr[i] % 2 == 1) return res = i + 1;
	  	}
	  } 
	  if (even == 1 && odd > 1) {
	  	for (var i = 0; i < numsArr.length; i++) {
	  		if (numsArr[i] % 2 == 0) return res = i + 1;
	  	}
	  }
	  return res;
	}
