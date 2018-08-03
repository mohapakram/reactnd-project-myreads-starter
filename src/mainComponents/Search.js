import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import Abook from '../Abook'

class Search extends Component{
    render(){
        const { search , result , updateBook} = this.props;
        return(
             <div className="search-books">
                    <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(e)=>{
                            search(e.target.value)
                        }}/>

                    </div>
                    </div>
                    <div className="search-books-results">
                    <ol className="books-grid">
                     { result.map( (book) =>
                         {
                             return(
                                 <li>
                                    <Abook book={book} updateBook={updateBook}/>
                                 </li>
                             )
                         }
                     )
                     }

                    </ol>
                    </div>
          </div>
        )
    }
}

export default Search;