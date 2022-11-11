import React from 'react';
import { Books } from './books';
import axios from "axios";

export class Read extends React.Component{


    
    componentDidMount(){
        //go get address from url
        axios.get('http://localhost:4000/api/books')
        //if you get the url back correctly, then...
        .then(
            (response)=>{
                this.setState({
                    books: response.data.mybooks
                })
            }
        )
        //if you get an error back, then...
        .catch((error)=>{
            console.log(error);
        });
    }
    state ={
        books: [] //array for books that is being created above
}

    render(){
        return(
            <div>
                <h3>Hello from my read component!</h3>
                <Books books ={this.state.books}></Books>
            </div>
        );
    }
}