function persistence(num) {
    num = num.toString();
    var total = 0;

    while(num.length !== 1)
    {
        var i = 0;
        var product = 1;
        while(i < num.length)
        {
            product *= parseInt(num[i]);
            i++;
        }
        num=product.toString();
        total++;
    }
    return total;
}