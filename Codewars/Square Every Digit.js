function squareDigits(num){
	var digits = (num.toString()).split('');
	var squares = [];
	for(i = 0; i < digits.length; i++){
		squares.push(digits[i] * digits[i]);	
	}
	return parseInt(squares.join(''));
}