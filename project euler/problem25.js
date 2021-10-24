const fib = () => {
    const arr = [1, 1]    
    let count = 100
    let indexCounter = 2
    
    while (arr[arr.length-1].toString().split('').length < count) {
        const n1 = arr[arr.length - 1]
        const n2 = arr[arr.length - 2]
        const next = n1 + n2
        arr.push(next)
        indexCounter+=1
    }
    console.log(indexCounter);
    return arr

    // return arr[arr.length-2].toString().split('').length 
}

console.log(fib());