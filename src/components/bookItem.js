import React from "react";
import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component{

 

    render(){
        return(
            <div>
                
                <Card style={{ width: '100rem' }}>
     <Card.Header>{this.props.book.title}</Card.Header>
      <Card.Body>
        <blockquote className = "blockquote mb-0">
            <img src = {this.props.book.thumbnailUrl}></img>
            <footer>
                {this.props.book.authors[0]}
            </footer>
        </blockquote>
        <Card.Title>Card Title</Card.Title>
      
       
        
      </Card.Body>
    </Card>



                {/* <h4>{this.props.book.title}</h4>
               
                <img src = {this.props.book.thumbnailUrl}></img>
                <h6>{this.props.book.authors[0]}</h6> */}
            </div>
        )
    }
}