import React from 'react';

//keyword export: allows class to be called from another components
export class Content extends React.Component{
    render(){
        return(
            <div>

            <h1>Hello World!!!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>


            </div>
        );
    }
}