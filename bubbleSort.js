const bubbleSort = arr => {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 1; j < arr.length-i; j++) {
            if (arr[j-1] > arr[j]) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
            }
        }
    }
    return arr
}

console.log(bubbleSort([2, 3, 1, 12, 24, 1, 4, 8]))