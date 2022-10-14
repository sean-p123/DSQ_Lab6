import React from 'react';

//keyword export: allows class to be called from another components
export class Header extends React.Component{
    render(){
        return(
            <div>

          <h1>My header in another component!</h1>

            </div>
        );
    }
}