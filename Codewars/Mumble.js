function accum(s) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j <= i; j++) {
      if (j == 0) {
        result += s[i].toUpperCase();
      } else {
        result += s[i].toLowerCase();
      }
    }

    if (i != s.length - 1) 
    {
      result += "-"; 
    }
  } 
  console.log(result);
} 
