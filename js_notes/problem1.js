// let num = 1
// let found = false

// while(!found){
//     for (let i = 1; i <= 10; i++){
//         let isDivisibleAll = true

//         if (!(num % i === 0)){
//             isDivisibleAll = false
//             break
//         }
//         found = isDivisibleAll
//     }
//     num += found ? 0 : 1
// }
// console.log(num)

// check if a number is divisible by 1 - 10

function isDivisibleBy (num, hit) {
    //
    let is 
    if (num % hit === 0){
        isDivisibleBy = true
    }
    else{
        isDivisibleBy = false
    }
    return isDivisibleBy
}

console.log(isDivisibleBy(4, 2))

// isDivisibleBy(3, 3) => true
// isDivisibleBy(3, 4) => false