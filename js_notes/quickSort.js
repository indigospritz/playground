const quickSort = array => {
    if (array.length <= 1) {
        return array
    }
    const pivot = array[array.length - 1]
    const leftArr = []
    const rightArr = []
    for (const el of array.slice(0, array.length - 1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el)
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const arr = [4, 21, 3, 1, 12, 76, 2]

console.log(quickSort(arr));