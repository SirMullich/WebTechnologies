function findOdd(A) {
	function sortNumber(a,b) {
		return a - b;
	}
  A.sort(sortNumber);
  var s = "";
  var elem = A[0];
  var oddity = 0;
  for (var i = 0; i < A.length; i++) {
  	if (A[i] == elem) {
  		oddity++;
  	} else {
  		if (oddity % 2 == 1) {
  			return elem;
  		}
  		elem = A[i];
  		oddity = 1;
  	}
  }
  if (oddity % 2 == 1) {
	return elem; 
	}
  return 0;
}
