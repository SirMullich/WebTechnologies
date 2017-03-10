function findOutlier(integers){
  var even = [];
  var odd = [];

  for (var i = 0; i < integers.length; i++) {
  	if (integers[i] % 2 == 0) {
  		even.push(integers[i]);
  	}
  	else {
  		odd.push(integers[i]);
  	}
  }

  if (even.length == 1) return even[0];
  if (odd.length == 1) return odd[0];
}