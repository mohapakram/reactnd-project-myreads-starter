import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import Abook from '../Abook'
import * as BooksAPI from '../BooksAPI'

class Search extends Component{
    state={
        books:[]
    }

   search = (query)=>{
          if(query.length){
               BooksAPI.search(query).then((books)=>{
                   this.setState({
                       books
                    })
               })
          }else{
              this.setState({ books:[]})
          }
   }

    render(){
        const {  updateBook} = this.props;
        return(
             <div className="search-books">
                    <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(e)=>{
                            this.search(e.target.value , this.props.books)
                        }}/>

                    </div>
                    </div>
                    <div className="search-books-results">
                    <ol className="books-grid">
                     { this.state.books.map( (book) =>
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