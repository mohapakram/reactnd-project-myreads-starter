import React , { Component } from 'react';
import CurrentlyReading from '../booksShelfs/CurrentlyReading';
import WantToRead from '../booksShelfs/WantToRead';
import Read from '../booksShelfs/Read';

class BooksList extends Component {
   
  
  render(){
          const { books , updateBook } = this.props;
           let currentlyReading = books.filter( book => book.shelf === "currentlyReading");
           let wantToRead = books.filter( book => book.shelf ==="wantToRead");
           let read = books.filter( book => book.shelf === 'read');
      return(
           <div className="list-books">
                <div className="list-books-title">
                        <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                        <div>
                             <CurrentlyReading books={currentlyReading} updateBook={updateBook}/>

                             <WantToRead books={wantToRead} updateBook={updateBook}/>
                             
                             <Read books={read} updateBook={updateBook}/>
                        </div>
                </div>
          </div>
      )
  }

}

export default BooksList;