const pythagoreanTriplet = () => {
    for (let a = 1; a <= 1000; a++) {
        for (let b = a + 1; b <= 1000; b++) {
            let cSquared = Math.pow(a, 2) + Math.pow(b, 2)
            let c = Math.sqrt(cSquared)
            if ((a + b + c) == 1000) {
                let product = a * b * c
                console.log('a is ' + a)
                console.log('b is ' + b)
                console.log('c is ' + c)
                return product
            }
        }
    }
}

console.log(pythagoreanTriplet())