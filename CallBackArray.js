const Numbers = [1, -2, 3, -4, 5, -6];
const posNumbers = greet(Numbers, (n) => n >= 0); 
function greet(n, callback){
    const myArr = [];
    for(const n of Numbers){
        if(callback(n)){
            myArr.push(n);
        }
    }
    return myArr;
}
console.log(posNumbers);