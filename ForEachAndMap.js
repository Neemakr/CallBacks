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