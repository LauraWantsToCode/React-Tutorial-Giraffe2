import React, { useState } from "react";
import './SearchBar.css'; 

// we will use the event argument within the handleInputChange to 
// listen to what the new value is that was inputted within the searchbar

// event.target.value - will print out the search value added. 
// this does not remove our standard searchValue that is set
// also, this only prints to console log, not on the screen - 
// screen still only shows our initial value
// need to import state hooks! 



const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('Type your search value')

   
    const handleInputChange = (event) => {
        // alert("changed"); 
        // console.log(event.target.value)
        // console.log(event)
        setSearchValue(event.target.value); 
    }

    return (
    <div>
        <input type="text" value={searchValue} onChange={handleInputChange} />
        <br></br>
        {searchValue} 
        {/* above adds what you type as a text below the search bar */}
    </div>
    )
}

export default SearchBar

// this is how we use user input in react 