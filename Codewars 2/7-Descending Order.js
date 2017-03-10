
	function descendingOrder(n){
	  var nums = n.toString();
	  numsArr = nums.split("");

	  numsArr.sort(function(a, b) {
	  	return parseInt(b) - parseInt(a);
	  });

	  var res = "";
	  for (var i = 0; i < nums.length; i++) {
	  	res += numsArr[i];
	  }
	  
	  return parseInt(res);
	}
