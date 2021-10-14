const arr = [5, 4, 2, 8, 345, 123, 43, 32, 5643, 63]

const selectionSort = arr => {
    const arrCopy = arr.slice()
    for (let i = 0; i < arrCopy.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arrCopy.length; j++) {
            if (arrCopy[j] < arrCopy[minIndex]) {
                minIndex = j
            }
        }
        [arrCopy[i], arrCopy[minIndex]] = [arrCopy[minIndex], arrCopy[i]]
    }
    return arrCopy
}

console.log(selectionSort(arr))
console.log(arr)