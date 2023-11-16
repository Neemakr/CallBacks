const anotherFunc = () => {
    console.log( 'I\'m being invoked by the higher-order function!');
}

const higherOrderFunc = param => {
    param();
    console.log(`I just invoked ${param.name} as a callback function!`);
}
    
higherOrderFunc(anotherFunc);

/*In this example, we invoked higherOrderFunc() with an anonymous function (a function without a name) that counts to 10. 
Anonymous functions can be arguments too!*/
higherOrderFunc(() => {
    for (let i = 0; i <= 10; i++){
      console.log(i);
    }
});