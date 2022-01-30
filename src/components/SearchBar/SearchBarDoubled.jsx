import React, { useState } from "react";
import './SearchBar.css'; 

// i am using the doubled version to add further training on the search bar. 
// if we have a list of items we want to display to the user

// we can build a filter search. 
// filter the items that match whats in your user input 

//creating the new const below

const products = [
    "tooth paste", 
    "tooth brush",
    "dental floss", 
]

// how can we render/display all these products in a list? 
// we will render these in our return div [below the clear button]

// map function or functional programming function. 
// it will allow us to take all elements in an array and map them into elements in a different array


const SearchBarDoubled = () => {
    const [searchValue, setSearchValue] = useState('')
      
    const handleInputChange = (event) => {
            setSearchValue(event.target.value); 
    }

const handleClearClick = () => {
    setSearchValue('') 
}

// map function below
// all arrays have map function that they are using
// it will map all products into another array
// below will take all products from our products array
// and will map into another array where they are all upper case
// more info about maps will be in JS tutorials 
// we will map them into JSX tags 


// console.log(
//     products.map((product) => {
//             return product.toUpperCase
//     })
// )

const shouldDisplayButton = searchValue.length > 0 
console.log(shouldDisplayButton) 

// we will use filter
// we will execute each element as true or false
// if true, elements will stay in the array
// false - removed
// below is vanilla JS, not React
// we can add product.includes("mouth"), but better to equal to the value in the search box
// once below is added, underneath, within return, need to update - 
//instead of mapping over the products
// we need to add filterProducts
// filterProducts.map 
// we will filter products based on updated search value
// that's why it all needs to be in the state

const filterProducts =  products.filter((product) => {
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

// above code for products.map shows all products as a list under the search bar
// when we do mapping, we get an error of child in the list needing a key
// give elements a prop which is key.
// we have added product
// key is used internally by react in order to identify an element in the list. 

// combining search value with our list so that 
// only the items that include what user typed would show up on the list below
// we will use a filter function instead of map! 


export default SearchBarDoubled

