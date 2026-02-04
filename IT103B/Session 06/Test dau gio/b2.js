let price = [100, 200, 300, 400];
let index = 0;



let result = 0;
for (let index = 0; index < price; index += 2) {
    result += index;
    if(index == price){
        document.writeln(result);
    }
}