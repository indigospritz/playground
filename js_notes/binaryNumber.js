const binConv = arr => {
    console.log(arr.toString(2).split('0').map(function (el){return el.length}).reduce(function (a, b) {
        return (a > b ? a : b)
    }))
}
binConv(255)