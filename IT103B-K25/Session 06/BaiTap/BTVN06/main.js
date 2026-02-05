let ramdomArray = ["", false, 0, 5, 10, "Hello world!"];
for(let i = ramdomArray.length - 1; i >= 0; i--){
    if(!ramdomArray[i]){
        ramdomArray.splice(i, 1);
    }
}
for(let i = 0; i < ramdomArray.length; i++){
    console.log(`${ramdomArray[i]} `);
}