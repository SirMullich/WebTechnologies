function highAndLow(numbers){
	function sortNumber(a,b) {
    	return a - b;
	}

	nums = numbers.split(" ");
	// for (var i = 0; i < nums.length; i++) {
	// 	console.log(nums[i]);
	// }
	var res = "";
	nums.sort(sortNumber);
	res += nums[nums.length-1];
	res += " " + nums[0];
	return res;
}