import React , { Component } from 'react';
import CurrentlyReading from '../booksShelfs/CurrentlyReading';
import WantToRead from '../booksShelfs/WantToRead';
import Read from '../booksShelfs/Read';


const BooksList = (props)=>{

          const { books , updateBook } = props;
          let booksShelfs = {
            currentlyReading : books.filter( book => book.shelf === "currentlyReading"),
            wantToRead : books.filter( book => book.shelf ==="wantToRead"),
            read : books.filter( book => book.shelf === 'read')
          }
      return(
           <div className="list-books">
                <div className="list-books-title">
                        <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                        <div>
                             <CurrentlyReading books={booksShelfs.currentlyReading} updateBook={updateBook}/>

                             <WantToRead books={booksShelfs.wantToRead} updateBook={updateBook}/>
                             
                             <Read books={booksShelfs.read} updateBook={updateBook}/>
                        </div>
                </div>
          </div>
      )
}

 
export default BooksList;