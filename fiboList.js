const listfibo = (range) => {
    let n1 = 0
    let n2 = 1
    let result = []
    for (let i = 1; i <= range; i++) {
        if (n2 <= range) {
            result.push(n2)
            let nextTerm = n1 + n2
            n1 = n2
            n2 = nextTerm        
        }
    }
    console.log(result)
}
listfibo(20)