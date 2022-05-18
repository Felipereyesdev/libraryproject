 _getlength = (args) =>  args.length; 

function getTotalBooksCount(books) {
  return _getlength(books);

}

function getTotalAccountsCount(accounts) {
  return _getlength(accounts);
}

function getBooksBorrowedCount(books) {
  let booksborred = 0;
  for(let i = 0; i< books.length; i++){
    if(books[i].borrows[0].returned === false){
      booksborred ++;
    }
  }
  return booksborred;
}


function getMostCommonGenres(books) {
  // const commonGenre = books.map((book) =>{
  //   return {name: book.genre, count:1}
  // })
  // if(commonGenre.count)
  // commonGenre.count++
  // console.log(commonGenre);
  // return commonGenre;
     const genrecount = books.reduce((acc,book) => {
     const findValue =  acc.find((key) => book.genre === key.name)
     acc.push({name: book.genre, count: 1})
     if(findValue){
     findValue.count++
     }
     const sortedCount = acc.sort((a,b) => a.count < b.count ? 1:-1);

    


     return sortedCount;
     }, [])
     return genrecount.splice(0,5);
}

function getMostPopularBooks(books) {
  const popularityCount = books.map((book) =>{
  return {name:book.title, count:book.borrows.length,};
  
  });
  const sortingBooksCount = popularityCount.sort((a,b) => b.count - a.count);
  return sortingBooksCount.splice(0,5);
}
//get the author and how many times their book was borrow

function getMostPopularAuthors(books, authors) {
 const getAuthorId = books.reduce((acc,book) => {
   const {authorId, borrows} = book; 
   const allAuthors = authors.find((author) => authorId === author.id);
   const name = `${allAuthors.name.first} ${allAuthors.name.last}`
   const count = borrows.length;
   const authorExist = acc.find((author) => author.name === name );
   if(authorExist){
     authorExist.count+= count;
   }
   else{
     const newEntry = {
       name,count
     }
     acc.push(newEntry)
   }
   return acc;

 }, [])
 const sortedAuthors = getAuthorId.sort((a,b) => b.count -a.count);
 const topFive = sortedAuthors.splice(0,5);
 return topFive;
  // const mostpopularBooks = getMostPopularBooks(books).map((book) => {
  //   console.log(book);
  //   return {name: book.title, authorId: book.authorId, count: book.borrows.length}
  // });
  // console.log(mostpopularBooks);
  //  const arrayOfmostpopularauthor = mostpopularBooks.map((book) =>{ 
  //    let foundAuthor = authors.find((author) => book.authorId === author.id)
  //    console.log(foundAuthor)
  //    return {name: `${foundAuthor.name.first} ${foundAuthor.name.last}`, count: book.count};
  //  })
  // //  console.log(arrayOfmostpopularauthor);
  //  return arrayOfmostpopularauthor;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
