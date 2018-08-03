import React , { Component } from 'react';

class Abook extends Component {

    render(){
        const { book , updateBook } = this.props;
        return(
          <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf ? book.shelf : "none"} onChange={ (e)=> {

                                updateBook( { id:book.id} , e.target.value)} 

                              }>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
        )
    }
}

export default Abook;