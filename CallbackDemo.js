/*A higher-order function is a function that either accepts functions as parameters, 
returns a function, or both! We call functions that get passed in as parameters callback functions. 
Callback functions get invoked during the execution of the higher-order function.*/
//Example 1
const cb = name =>{
    console.log("Hi", name);
}
const higherOrderFunction = (cb, name) => {
    cb(name);
}
higherOrderFunction(cb, "Neema");

//Example 2
function greet(callback, name){
    console.log("Hi" + name);
    callback();
}
function callMe(){
    console.log("Hi I'm invoked from callback function");
}
greet(callMe, "Neema");

//Example 3
const higherOrderFunc = param => {
    param();
    console.log(`I just invoked ${param.name} as a callback function!`) 
}
function dora(){
    console.log('Hi') 
}
higherOrderFunc(dora);

//Exampple 4 
function display(name){
    console.log("Hi", name);
}
function Greetings(name, cb){
    cb(name);
}
Greetings("Neema", display);