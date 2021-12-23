const series = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]

const longestZeroSeq = arr => {
    let zeroSeq = []
    let tempArr = []
    for (let i = 0; i < arr.length - 1; i++) {
        zeroSeq[i] = arr[i]
    }
    for (let i = 0; i < zeroSeq.length - 1; i++){
        if (zeroSeq[i] == 0) {
            tempArr.push(zeroSeq[i])
        } else {
            zeroSeq.splice(0, i)
        }
        
        // tempArr.indexOf(zeroSeq[i] === -1 ? tempArr.push(zeroSeq[i]) : tempArr.splice(0, i,))
    }
    return tempArr
}

const longestZeroSeq2 = arr => {
    let count = 0
    let result = 0
    let tempArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            count = 0
        } else {
            count++
            result = Math.max(result, count)
        }
    }
    for (let i = 0; i < result; i++) {
        tempArr.push(0)
    }
    return tempArr   
    
}
console.log(longestZeroSeq2(series))
console.log(longestZeroSeq(series))
console.log(series)

