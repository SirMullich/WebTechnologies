function nthFibo(n) {
    var fiboNumbers = [];
     for(var i = 0; i < n; i++){
       fiboNumbers.push(fibo(i));
     }

    return fiboNumbers[fiboNumbers.length - 1];
}
  
function fibo(n){
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else
        return fibo(n - 1) + fibo(n - 2);
}