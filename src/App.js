import React from 'react'
import * as BooksAPI from './BooksAPI'
import Search from './mainComponents/Search';
import BooksList from './mainComponents/BooksList';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[],
    query:'',
    result:[]
  }
    
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  search = (query) => {
  let options = {
    keys:[
      "title",
      "authors"
    ]
  }
  let fuse = new Fuse(this.state.books , options)

  this.setState({
    result: fuse.search(query)
  })
  }
    
 updateBook = (book, shelf) => {
   this.setState( (state)=>({
    books: state.books.map( (b)=>{
       if(b.id === book.id){
          b.shelf = shelf;
       }  
       return b
     } )
     
   }))
   BooksAPI.update(book,shelf);
 }

  render() {
    console.log(this.state.books, "app")
    return (
      <div className="app">
       <Route exact path="/" render={() => (
          <div>
              <BooksList books={this.state.books} updateBook={this.updateBook}/>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
           </div>  
       )}/>
       <Route path="/search" render={ ()=> <Search search={this.search} updateBook={this.updateBook} result={this.state.result}/>}/>   
      </div>
    )
  }
}

export default BooksApp
