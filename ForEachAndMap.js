let arr = [1, 2, 3, 4];
arr.forEach(function(value, index, array){
    if(array[index] === 2){
        delete arr[value];
    }
})
console.log(arr);

let arr2 = arr.map(function(value){
    console.log(value * 2);
})

const a = [
    {
        name : "Lime",
        age : 45
    },
    {
        name : "King",
        age : 88
    }

];
const a1 = a.filter(function(e, index, array){
    return e.age > 50  ;
})
console.log(a1)