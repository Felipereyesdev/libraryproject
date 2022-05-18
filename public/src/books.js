function findAuthorById(authors, id) {
  const result = authors.find((author) => author.id === id);
  return result;
}

function findBookById(books, id) {
  const result = books.find((book)=> book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
 let unavailbe = [];
 let avaible = [];
 let borrowedStatus = [];
 for(const book of books){
   const isReturned = book.borrows[0].returned
   if(isReturned === false){
     unavailbe.push(book)
   }
   else{
     avaible.push(book);
   }
   borrowedStatus.push(unavailbe);
   borrowedStatus.push(avaible);
 }
 return borrowedStatus;

}

function getBorrowersForBook(book, accounts) {
  let matchingId = [];
 for(const borrow of book.borrows){
   //const borrow = book.borrows[i]; this was use first with the normal for loop
   let borroerAccount = accounts.find((account)=> borrow.id === account.id);
   borroerAccount.returned= borrow.returned;
   matchingId.push(borroerAccount);
 }
 return matchingId.splice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
