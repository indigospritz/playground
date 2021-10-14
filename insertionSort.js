const arr = [1, 4, 7, 31, 786, 2, 78, 100]

const insertionSort = arr => {
    const arrCopy = arr.slice()
    for (let i = 1; i < arrCopy.length; i++) {
        let minIndex = i
        for (let j = i + 1; j > arrCopy.length - i - 1; j++) {
            if (arrCopy[j] < arrCopy[minIndex]) {
                minIndex = j
            }
        }
        [arrCopy[i], arrCopy[minIndex]] = [arrCopy[minIndex], arrCopy[i]]
    }
    return arrCopy
}

console.log(insertionSort(arr))
console.log(arr)