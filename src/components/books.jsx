import React from 'react';
import Book from './book';
import {BASE_URL} from './../config';

export default class Books extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    componentWillMount(){
        fetch(BASE_URL+'books/?topic='+this.props.categoryName)
        .then(res=>res.json())
        .then(response=>{
            this.setState({books:response.results, next: response.next})
        })
        
        document.addEventListener('scroll', this.trackScrolling);
    }

    getBooks(){
        fetch(this.state.next)
        .then(res=>res.json())
        .then(response=>{
            const books = response.results
            const next = response.next
            this.setState({books: [...this.state.books,...books], next: next})
        })
        
        document.addEventListener('scroll', this.trackScrolling);
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }
     
    componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
    }
      
    trackScrolling = () => {
    const wrappedElement = document.getElementById('book');
        if (this.isBottom(wrappedElement)) {
            document.removeEventListener('scroll', this.trackScrolling);
            this.getBooks()
        }
    };

    render(){
        console.log(this.state)
        return(
                <div className="books" id="book">
                   {
                       this.state.books ? this.state.books.map((book, index)=>{
                           return <Book book={book} key={index} />
                       }) :null
                   }
                </div>
            )
    }
}