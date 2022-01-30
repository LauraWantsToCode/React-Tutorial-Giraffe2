import React, { useState } from "react";
import './SearchBar.css'; 

// we will use the event argument within the handleInputChange to 
// listen to what the new value is that was inputted within the searchbar

// event.target.value - will print out the search value added. 
// this does not remove our standard searchValue that is set
// also, this only prints to console log, not on the screen - 
// screen still only shows our initial value
// need to import state hooks! 
// .target.value - value that the user wants to input



const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('')

    // we can add some text in the () so it will be shown, such as below:
    // const [searchValue, setSearchValue] = useState('Type your text')

    // we have registered searchValue with React, so whenever we want to update it,
    // we need to use setSearchValue. such as in the handleClearClick function
   
    const handleInputChange = (event) => {
        // alert("changed"); 
        // console.log(event.target.value)
        // console.log(event)
        setSearchValue(event.target.value); 
    }

const handleClearClick = () => {
    setSearchValue('') 
}
// we are going to create some logic so that the button is only visible when
// there is text written inside of the search bar
// we will need boolean value. see below const 

const shouldDisplayButton = searchValue.length > 0 
// above checks if there is anything in the search value
// this is a boolean expression 
// this will be either true or false, below console log will show this

console.log(shouldDisplayButton) 

//when the above is working, we need to add JS short circuiting below
// it is in the div, between input and button {} 
// we also moved our button into it! 
// this will make button disappear if there is no text inside the search bar. 

// can google short circuiting ! 
// it is: if the initial thing is true 'shouldDisplayButton', (&&) makes it that 
// -  then we will run the button
// if false -we will not render out what is on the right
// this is conditional rendering

    return (
    <div>
        <input type="text" value={searchValue} onChange={handleInputChange} />

        {shouldDisplayButton && <button onClick={handleClearClick} >Clear</button>}
    </div>
    )
}

// {searchValue} 
// the above can be added within the <div> above and adds what you type as a text below the search bar 

export default SearchBar

// this is how we use user input in react 



// this strategy works for any type of input
// when creating a search bar, number field, check box or text box: 
// you want to:
// 1. store the value inside of the piece of state
// 2. then pass in the value to the input field