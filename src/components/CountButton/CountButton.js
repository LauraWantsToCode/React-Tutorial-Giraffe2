import React, {useState} from "react";
import './CountButton.css';

// functions can be written in either way as below: 

// function CountButton(){
// }

// currentCount++ does not work in react! it does increase the number 
// we would see it in the console log! 
// but it is not bringing to our div. 
// we need to tell React that we want to update the user interface. 
// we need to explicitly tell React to update the DOM.
// we do this by using REACT HOOKS
// hooks are ways to tell React what is going on in your app
// or ways to respond to things that are happening in the programme.
// we need to say to React that we updated the current count, now we want 
//React to update it on the browser. 
// we will use the hook "use state"
// we will need to import it, by including it into react import
// we will use it to create our variable! 
// instead of " let currentCount = 0 "
// we have the below
// const [currentCount, setCurrentCount] = useState(0)
// useState(0) is a hook that will allow us to manage the state

// setCurrentCount will be a function where we tell react to update the current count
// we created a current count variable that has a useState instead of just 0
// 0 within useState is our default value

// we are registering current count with react. 
// to update the state, we need to call the setCurrentCount function (instead of doing ++)

// use console.log("component re-rendered") 
// this shows that every time the state updates or call current count, 
// this whole function will be executed again and rerender all the stuff with the new value

const CountButton = (props) => {
// console.log(props.incrementBy)

const [currentCount, setCurrentCount] = useState(0)

const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy)
}

console.log("component re-rendered")

const divStyle = { 
color: 'blue'
}
// the above is an object in JS
// don't use -, we capitalise the second word instead

const buttonStyles = { 
    background: props.buttonColor, 
    border: "1px solid black", 
    borderRadius: "10px", 
    }
// it is better to style using external style sheets 

    return (
         <div style={divStyle}> 
       <button style={buttonStyles} onClick={handleClick}>+{props.incrementBy} </button>
       <div className="count-display">{currentCount}</div>
    </div>
    )
}

// we are adding a function on the button, it is going to be executed when the button is clicked
// we can create a function within the onclick, or we can create a function above the return 
// and add the name of the function in {} within the button

// onClick is called a prop or attribute 

export default CountButton


// to sum up, to use states: 
// import states
// use decomposed array (created a variable and set current count and setCurrent count etc)

// what to do when we want to reuse these components? 
// we would just need to copy the component within the App.js again. 

// props can help you customise your app more
// if we want to amend parts of the component, we can do it with props. 
//this is the value we pass into the component 
// for it, we would add props to the function as below:
// const CountButton = (props) => {
    // props are values we can pass in! 
    // we do so within the App.js when adding the component in!!! 

// also changed below from +1
// setCurrentCount(currentCount + props.incrementBy) 
// now we are using props.incrementBy 

// props are values passed into a component 
// state is a value that is internal to a component. 

// there are many ways to style components
// we can combine this with props

// there are differences when styling in jsx rather than actual html. 
// we need to pass in a style object. 

