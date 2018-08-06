import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import Abook from '../Abook'
import * as BooksAPI from '../BooksAPI'

class Search extends Component{
    state = {
        books:[],
        query:"",
        oldBooks: this.props.books
    }
    
   search = (query)=>{
   if(!query){
       this.setState({books:[]});
   }
    if(query.length){
            this.setState({query:query.trim()});

               BooksAPI.search(query).then((result)=>{
                   
                  result.map((n)=>{
                    
                    this.state.oldBooks.map((o)=>{
                     
                        n.shelf = o.shelf

                    })
                      
                  })

                  this.setState({
                   books:result
                  })
          }
          
               )}
   }
    render(){
        const {  updateBook , books } = this.props;
        return(
             <div className="search-books">
                    <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(e)=>{
                            this.search(e.target.value)
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