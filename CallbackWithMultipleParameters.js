function display(name, i, habit, living){
    console.log(`Hi ${name}, I'm from ${i}, my habit is ${habit} and I live in ${living}`);
}
function Greetings(cb, name){
    cb("JAk", "Canada", "Badminton", "Vienna");
    console.log(name);
}
Greetings(display, "Hyna");