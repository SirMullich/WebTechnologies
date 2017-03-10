function tribonacci(signature,n){

  // if n is less than three
  if (n < 3) {
    return signature.slice(0,n);
  }
  var res = signature;
  for (var i = 3; i < n; i++) {
    res.push((res[i-1] + res[i-2] + res[i-3]));
  }

  return res;
}