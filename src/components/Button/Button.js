import React from "react";
import { Children } from "react/cjs/react.production.min";

const Button = (props) => {

// we might want to allow the user to put any text they want in the button

// we will use children prop
// children prop is a special prop that's going to get passed into a react component
// when it has a closing tag
// we use this in the App.js !! 
// single or closing tag example below: 
// <Button buttonText="button 1" /> 
// children prop would be : 

// <Button>Hello World</Button>

// we can just say children below instead of props.button etc

// whatever is passed in between the tabs on App.js is going to be on the button 


return ( 
    <div> 
        {props.Children}
    </div>
)
}

export default Button