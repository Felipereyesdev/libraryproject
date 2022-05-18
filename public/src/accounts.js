function findAccountById(accounts, id) {
  const result = accounts.find((account) => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  let accountsSorted = accounts.sort((lastNameA, lastNameB) => lastNameA.name.last > lastNameB.name.last ? 1:-1 );
  return accountsSorted;
 
}

function getTotalNumberOfBorrows(account, books) {
 let borrowBooks = 0;
 for(let i = 0; i<books.length; i++){
   for(let j = 0; j<books[i].borrows.length; j++){
     if(books[i].borrows[j].id === account.id){
       borrowBooks++
     }
   }
 }
 return borrowBooks;

}
//loop inside the books array
//check if the book its out
//check if the id of the book matches the id of the account
//if the id matches put the authors info inside  
function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows[0].id === account.id && book.borrows[0].returned === false)
  .map((book) => {
    book.author = authors.find((author) => author.id === book.authorId)
    return book;
  })
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
