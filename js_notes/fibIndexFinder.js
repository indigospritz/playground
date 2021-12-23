const findIndex = n => {
    let fibo = 2.078087 * parseFloat(Math.log(n)) + 1.672276
    return Math.round(fibo)
 }
 
 console.log(findIndex(144))