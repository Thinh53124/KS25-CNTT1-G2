/* 

Filter:Lọc
1.ĐẦU VÀO
2.ĐẦU RA
    +trả về mảng mới[]
    
*/
let number = [3,8,4,13,42];
let scores = [
    ["đức","C++",5],
    ["bình","C++",4],
    ["linh","C++",6],
];
let result = scores.filter(function(value){
    return value[2] >=5 
});
console.log("result: "+result);

