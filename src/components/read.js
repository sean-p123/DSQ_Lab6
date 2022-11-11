import React from 'react';
import { Books } from './books';
import axios from "axios";

export class Read extends React.Component{

    componentDidMount(){
        //go get address from url
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
        //if you get the url back correctly, then...
        .then(
            (response)=>{
                this.setState({
                    books: response.data
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