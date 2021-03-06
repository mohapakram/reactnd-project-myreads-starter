import React , { Component } from 'react';
import Abook from '../Abook';

const Read = (props)=>{
      const { books , updateBook } = props;
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


export default Read;