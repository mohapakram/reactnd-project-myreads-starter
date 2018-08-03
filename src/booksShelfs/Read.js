import React , { Component } from 'react';
import Abook from '../Abook';

class Read extends Component {
    render(){
      const { books , updateBook } = this.props;
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      
                        {books.map( (book)=>{
                          return (
                            <li key="{book.id}">
                             <Abook book={book} updateBook={updateBook}/>
                            </li>
                          )
                        })}
                     
                    </ol>
                  </div>
                </div>
        )
    }
}

export default Read;