const fizzBuzz = num => {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log('fizzbuzz')
    } else if (num % 3 == 0) {
        console.log('fizz')
    } else if (num % 5 == 0 ){
        console.log('buzz')
    } else {
        console.log(undefined)
    }
}

const fizzBuzzList = range => {
    for (let i = 0; i < range; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('fizzbuzz')
        } else if (i % 3 == 0) {
            console.log('fizz')
        } else if (i % 5 == 0 ){
            console.log('buzz')
        } else {
            console.log(undefined)
        }
    }
}

fizzBuzz(30)
fizzBuzzList(30)