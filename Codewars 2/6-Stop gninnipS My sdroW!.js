function spinWords(string){
  var res = '';
  var words = string.split(" ");
  
  for(var i = 0; i < words.length; i ++) {
    res += (words[i].length >= 5) ? words[i].reverse() : words[i];
    res += ' ';
  }
  
  return res.substring(0, res.length - 1);
}

String.prototype.reverse = function () { return this.split("").reverse().join(""); };