// return the parameters as an array

function toArray (a, b) { 
    const newArr = []
    newArr.splice(0, 0, a, b)
    return newArr
}
console.log(toArray(1, 2)) // [ 'a', 'a' ]
console.log(toArray('b', 'z')) // [ 'b', 'z' ]
