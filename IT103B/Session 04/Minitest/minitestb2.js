let n ;
let sum = 0;
for (n = 1; n<=50; n++){
    if (n%3==0&&n%5==0){
        console.log("FizzBuzz");
        continue;
    }else if(n%3==0){
        console.log("Fizz");
        sum+=n
    }else if(n%5==0){
        console.log("Buzz");
    }else{
        console.log(n);   
    }
}
console.log(sum);