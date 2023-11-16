const Numbers = [1, -2, 3, -4, 5, -6];
const posNumbers = greet(Numbers, (n) => n >= 0); 
function greet(num, callback){
    const myArr = [];
    for(num of Numbers){
        if(callback(num)){
            myArr.push(num);
        }
    }
    return myArr;
}
console.log(posNumbers);