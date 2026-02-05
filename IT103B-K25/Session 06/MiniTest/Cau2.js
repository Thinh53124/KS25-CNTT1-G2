let moneys = [100,200,300,400]
let sum = 0;

for (let money of moneys) {
    console.log(money);
}

for (index in moneys) {
    console.log(index);
    
}

for (let i = 0; i < moneys.length; i++) {
    if(i%2==0){
        sum+=moneys[i]
    }    
}
console.log(sum);
