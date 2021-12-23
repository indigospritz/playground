const insertionSort = array => {
    const arr = array.slice()
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
            } else {
                break
            }
        }
    }
    return arr
}

console.log(insertionSort([1, 4, 7, 31, 786, 2, 78, 100]))