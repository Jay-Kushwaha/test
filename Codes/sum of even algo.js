//program to sum of all even number
function sum_of_even(n){
var sum = 0;

for (var i=1;i<=n;i++)
{
    //check even
    if(i%2==0)
    {
    sum=sum+i;
    }
    
}
console.log("Sum is "+sum);
}

sum_of_even(10);