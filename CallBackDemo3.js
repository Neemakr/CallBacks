let value = 7;
const doSomething = (param) => {
    param();
}
doSomething(() => {
    value = 77;
    console.log(value);
})
console.log(value);