function myCalculator(num1, num2, myCallBack){
    sum = num1 + num2;
    myCallBack(sum);
}
function myDisplayer(some){
    console.log(some);
}
myCalculator(5,5, myDisplayer);