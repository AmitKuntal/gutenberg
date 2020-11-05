import React from 'react';
import Book from './book';

export default class Books extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return(
                <div className="books">
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                </div>
            )
    }
}