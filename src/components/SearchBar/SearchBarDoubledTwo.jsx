import React, { useState } from "react";
import './SearchBar.css'; 

// this file will update SearchBarDoubled 
// it will allow for the file to use props and be able to use any array
// instead of just products that we introduced (the ones that have toothpastes etc)



// we are now adding props to () below 
// we are also changing filteredProducts below

const SearchBarDoubledTwo = (props) => {
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


export default SearchBarDoubledTwo

