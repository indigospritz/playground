var isDivisible = function (range) {
    let num = 1;
    let isDivisorValid;
    let increment;
    this.isDivisibleBy = function () {
        for (let i = 1; i <= 10; i++) {
            if (num % i === 0) {
                isDivisorValid = false;
                continue;
            }
            else {
                isDivisorValid = true;
                
            }
            increment = isDivisorValid;
        }
        num += isDivisorValid ? 0 : 1;
        return num;
    }
    
}


var myIsDivisible = new isDivisible();

console.log(myIsDivisible.isDivisibleBy());
// var num;
// var res;

// function test(num) {
//     if (num % 1 === 0) {
//         res = true;
//     }
//     else {
//         res = false;
//     }
//     return res
// }
// console.log(test(2))
