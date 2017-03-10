function findEvenIndex(arr)
{
    var i=1;
    var res=-1;
    var sum1=0;
    var sum2=0;    

    for(; i<arr.length; i++)
    {
        sum1 = 0;
        sum2 = 0;
        
        var j=0;
        var k=i+1;
        
        while(j<i)
        {
            sum1+=arr[j];
            j++;
        }
        
        while(k<arr.length)
        {
            sum2+=arr[k];
            k++;
        }
        
        if(sum1===sum2)
        {
            res=i;
            break;
        }
    }
    return res;
}