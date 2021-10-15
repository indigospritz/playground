// let Book = new Object()
// Book.title = "OOP in JavaScript"
// Book.price = 15.99
// Book.author = "Clever Techie"
// Book.getInfo = function() {
//     return Book.title + " - " + Book.author
// }


// construction function
 function Book(title) {
    this.title = title
    this.author = ['Azra Bertnand', 'Seren Bertnand']
    this.description = 'Rediscover the lost ancient mystery teaching of the Cosmic Womb'
    this.price = 21.99

    // method: external function
    this.getInfo = getBookInfo
}

function getBookInfo() {
    return this.title + " - " + "$" + this.price + " US dollars " + "written by " + this.author
}
// let human = {
//     eye: 'blue',
//     hair: 'brown',
//     height: '180cm',
//     name: 'John',
//     lname: 'Doe',
//     fname: function() {
//         return this.name + " " + this.lname
//     }
// }
// human.weight = '200lbs'

// console.log(human.fname())
// console.log(Book.getInfo())