function isValid() {
    let num = 1000
    let arrOfNum = Array.from(String(num), Number)
    let sum = 0
    let isFound = false
    let i = 0
    // while (!isFound) {
        for (i = 0; i < arrOfNum.length; i++) {
            sum += arrOfNum[i]**arrOfNum.length
        }
        if (sum == num) {
            isFound = true
        } else {
            isFound = false
            // num += 1
        }
    // }
    console.log(sum)
    console.log(isFound)
    console.log(num)
}
isValid()

// const numbers = [28, 77, 45, 99, 27];
 
// numbers.forEach(number => {  
//     let sum = number**numbers.length
//   console.log(sum);
// });

// const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

// groceries.forEach(groceryItem => console.log(' - ' + groceryItem));

// const numbers = [1,2,3,4,5];
// const bigNumbers = numbers.map(number => {
//     return number * 10;
// });
// console.log(bigNumbers)
