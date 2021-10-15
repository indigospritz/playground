//  Object Literal
 const book1 = {
     title: 'Book one',
     author: 'John Doe',
     year: '2013',
     getsummary: function() {
         return `${this.title} was written by ${this.author} in ${this.year}`
     }
 }

 const book2 = {
    title: 'Book two',
    author: 'Jane Doe',
    year: '2016',
    getsummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

//  console.log(book2.getsummary())
// console.log(Object.values(book2))
// console.log(Object.keys(book2))