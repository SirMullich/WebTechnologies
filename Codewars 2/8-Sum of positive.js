function positiveSum(arr) {
	var res = 0;
	for (var i = 0; i < arr.length; i++) {
		res += (arr[i] > 0) ? arr[i] : 0;
	}
	return res;
}

