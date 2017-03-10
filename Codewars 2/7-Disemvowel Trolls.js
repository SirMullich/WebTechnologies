function disemvowel(str) {
	var res = "";
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (i=0; i<=str.length; i++) {
        if (vowels.indexOf(str.charAt(i)) === -1) {
            res = res + str.charAt(i);
        }
    }
  return res;
}