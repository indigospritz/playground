
function greet(name, lastName) {
    // console.log('Hello '  + name + ' ' + lastName);

}

function square(number){
    return number * number;
}
// console.log(square(3));

var letters = [];

var word = "merem";

var rword = "";

for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    console.log(word + " is a palindrome");
}
else {
    console.log(word + "  not a palindrome");
}