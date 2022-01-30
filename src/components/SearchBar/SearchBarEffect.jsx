import React, { useState } from "react";
import './SearchBar.css'; 

// useEffect
// can be used to upload data when loading the page

// when we use external data that might take 1-2 seconds to load, use effect is helpful 

// import useefect to App.js!!
// we are updating this on the products in App.js
// this is done in the app function, before return! 
// if items would take some time to load, we want to store them in a state. 
// instead of storing the data in the component, we can store them in the app. 
// all on app.js


const SearchBarEffect = (props) => {
    const [searchValue, setSearchValue] = useState('')
      
    const handleInputChange = (event) => {
            setSearchValue(event.target.value); 
    }

const handleClearClick = () => {
    setSearchValue('') 
}


const shouldDisplayButton = searchValue.length > 0 
console.log(shouldDisplayButton) 


const filterProducts =  props.products.filter((product) => {
        return product.includes(searchValue)
    })



    return (
    <div>
        <input type="text" value={searchValue} onChange={handleInputChange} />
        {shouldDisplayButton && <button onClick={handleClearClick} >Clear</button>}

        <ul>
         {filterProducts.map((product) => {
            return <li key={product}>{product}</li>
         })}  
        </ul>
    </div>
    )
}


export default SearchBarEffect

