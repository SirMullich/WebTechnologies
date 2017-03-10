	function solution(number){
		var sum = 0;
		var cur = 0
		while(cur < number) {
			sum += cur;
			cur += 3;
		}
		cur = 0;
		while (cur < number) {
			if (cur % 3 != 0) {
				sum += cur;
			}
			cur += 5;
		}
		return sum;
	}