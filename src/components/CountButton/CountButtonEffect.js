import React, { useState, useEffect } from "react";
import './CountButton.css';

// will use this to learn useEffect hook 
// use effect is a hook that is going to allow us to respond to different 
// events that happen in the lifecycle of the component. 
// It will allow us to run code whenever a piece of state updates 
// or whenever the component initially loads 

// where we import React and use State, need to add this one



const CountButton = (props) => {

const [currentCount, setCurrentCount] = useState(0)

const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy)
}

// adding below
// below needs two parameters:    useEffect(() => {}, []) 
// 1. callback function (function that is executed when useEffect needs to be executed)
// 2. the second argument is an array ! 
// if you forget to add an array, you might get into an infinite rendering loop 

// it will be called when a component is loaded onto the browser
// but does not update if the component is used (button clicked)
// the array -> in it, we can pass all the pieces of state 
// that we want use effect to respond to. 


// use effect is used for lifecycle hook as a way to determine when it gets updated. 
// can also add multiple use effects 
// why would we want to use it ??? 
//  when we have a current count, we might want to do something 
// for example, if current count gets to 10, we want to alert the user

useEffect(() => {
    console.log("Only called when component mounts")
}, []) 

// IMPORTANT
// DON'T FORGET TO ADD YOUR ARRAY, OTHERWISE IT WILL MESS WITH YOUR PROGRAMME

// when array is empty, we would use this for things like our searchbar! 

useEffect(() => {
    // console.log("Called when component mounts or the currentCount is updated")
    console.log(currentCount)
        if(currentCount === 10){ 
            alert("The count is 10")
            // we can alert as above
            //or we can reset the count
            // setCurrentCount(0)
        }

}, [currentCount])
// current count adds the count for each time the button is clicked 
// makes the function executed each time the button is clicked


// console.log("component re-rendered")

const divStyle = { 
color: 'blue'
}

    return (
         <div style={divStyle}> 
       <button onClick={handleClick}>+{props.incrementBy} </button>
       <div className="count-display">{currentCount}</div>
    </div>
    )
}

export default CountButton

