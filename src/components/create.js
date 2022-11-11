import React from 'react';
export class Create extends React.Component{
    
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        // ^^^ this tells the handle submit in render method that it is this instance of handle submit
        this.onChangeBookTitle =this.onChangeBookTitle.bind(this);
        //binds onChangeBookTitle from the div to the onChangeBookTitle method
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);

        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.state = {
            title:'',
            cover:'',
            author:''
        }

        
    }
    // e - event
    handleSubmit(e){ //this instance of method being called
        e.preventDefault();
        console.log(`${this.state.title}`);
       // console.log(${this.state.title});
    }

    onChangeBookTitle(e){ // this method gets called in onChange
        this.setState({
            title:e.target.value
        })
    }

    onChangeBookAuthor(e){ // this method gets called in onChange
        this.setState({
            author:e.target.value
        })
    }

    onChangeBookCover(e){ // this method gets called in onChange
        this.setState({
            cover:e.target.value
        })
    }
    
    
    render(){
        return(
            <div>
                <h3>Hello from create component!</h3>
                <form onSubmit={this.handleSubmit}> 
                 <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeBookTitle}
                    />
                </div>
                <input type="submit" value="Add Book" />

                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.author}
                    onChange={this.onChangeBookAuthor}
                    />
                </div>
                <input type="submit" value="Add Author" />

                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.cover}
                    onChange={this.onChangeBookCover}
                    />
                </div>
                <input type="submit" value="Add Cover" />
                </form>
            </div>
        )
    }
}