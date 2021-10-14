const arr = [1, 4, 6, 2, 3]

const bubbleSort = arr => {
    const arrCopy = arr.slice()
    for (let i = 0; i < arrCopy.length-1; i++) {
        for (let j = 1; j < arrCopy.length-i-1; j++) {
            if (arrCopy[j] > arrCopy[j+1]) {
                [arrCopy[j], arrCopy[j+1]] = [arrCopy[j+1], arrCopy[j]]
            }
        }
    }
    return arrCopy
}

console.log(bubbleSort(arr))
console.log(arr)