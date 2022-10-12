//function for fizz buzz
/* Question: If number is divisible to 5 and 7 print fizz buzz and
 if number is only divisible to 5 print fizz and if divisible only with 7 then print buzz 
 else print Hurry! */ 
function fizz_buzz(n){
    for (var i=0; i<=n; i++){
    //condtion for fizz buzz
    if(i%5==0 && i%7==0)
    {
    console.log("fizz buzz");
    }
    //condition for fizz
    else if (i%5==0)
    {
        console.log("fizz");
    }
    // condition for buzz
    else if (i%7==0){
        console.log("buzz");
    }
    else{
        console.log("Hurry!")
    }
}
}
fizz_buzz(10);