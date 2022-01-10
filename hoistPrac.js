//***** 1 ******//
// console.log(hello);
// var hello = 'world';
// output will be undefined


//***** 2 ******//
// var needle = 'haystack';
// test(); // undefined
// function test(){
//     var needle = 'magnet';
//     console.log(needle);// output will be magnet
// }



//***** 3 ******//
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan); //output only okay
// }
// console.log(brendan); // output super cool


//***** 4 ******//
// var food = 'chicken';
// console.log(food); //output chicken
// eat();
// function eat(){
//     food = 'half chicken';
//     console.log(food); //output half chicken
//     var food = 'gone';
// }

//***** 5 ******//
// mean(); // reference error
// console.log(food); // reference error
// var mean = function(){
//     food = "chicken";
//     console.log(food); // output chicken , actually reference error
//     var food = "fish";
//     console.log(food); // output fish
// }
// console.log(food);

//***** 6 ******//
// console.log(genre); // undefined
// var genre = 'disco';
// rewind();
// function rewind(){
//     dojo = "rock";
//     console.log(genre); //output rock
//     var dojo = "rb";
//     console.log(genre);//output rb
// }
// console.log(genre);//error which one?


//***** 7 ******//
// dojo = "san jose";
// console.log(dojo); // output san jose
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo); //output seattle
//     var dojo = "burbank";
//     console.log(dojo); // output burbank
// }
// console.log(dojo); // output san jose


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}