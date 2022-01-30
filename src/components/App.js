import React, { useState, useEffect } from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
import SearchBarDoubled from "./SearchBar/SearchBarDoubled"
import SearchBarDoubledTwo from "./SearchBar/SearchBarDoubledTwo"
import CountButtonEffect from "./CountButton/CountButtonEffect"
import SearchBarEffect from "./SearchBar/SearchBarEffect"
import Button from "./Button/Button"
// above imports all react 


// the below arrays are copied from SearchBarDoubledTwo

const products = [
  "mouth wash", 
  "dental floss", 
  "floss harps", 
]

// below we are learning the useEffect by adding const with product state and useEffect.
// previously we created a function and went straight into return 
// we are using -- search bar effect
// product state is going to be an empty array
// we have updated the [] in the search bar effect products = to link with state


const App = () => { 

const [productsState, setProductsState] = useState([])


// below useEffect will execute when component mounts
// to get the external products in, we can set a time out
// we want to make it so that so that products, the product state 
// doesn't load until a couple of seconds after the user is seeing something. 
// setTimeout will need a function and a time in ms (2000 ms = 2s)
// but because we are using React
// we need to use setProductState below, not just productState

// we assume it would take 2s to load data from external source
// after those 2s, we would call the data to be used

// we will add a loading indicator 
// so that the user would know it is loading
// we will add this into the div in return part
// we will use the ternary operator
// it's kind of like an if statement except it is used for values
// for example, you check if a statement is true. if it isn't - it returns that it's false
// if we have an empty array for products, we want to display a loading indicator 
// if the external info didn't load yet. 
// we will create a variable and then work in return bit

// {hasProducts ? <SearchBarEffect products={[productsState]} />} 
// we include the above to return
// it states that if there are products, we will return the searchbar 

// to sum up
//
// we would use this to show we are loading
// while we would load some external data

// we have taken external data from: https://fakestoreapi.com/docs 
// included the below to our useEffect and updated 
// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
// the above is updated when we add it to our function. 
// we have more explanation on API at the bottom of this document

useEffect(() => {

  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(productsArray=> {
      // console.log(json)

      // each products from API have a couple of different fields - category, description, id, etc. 
    // we renamed json to productsArray
    // we will take all the products and will convert them into the products state ABOVE 
    // top of this page in the function 
    // we will only use the title of these items
    // we will take all 20 products and will map them into a state, it will only include the title

    // if struggle to understand below, learn map function more

    const newProductsState = productsArray.map((product) => {
        return product.title
    })
        setProductsState(newProductsState)
  })

  // API code above is using asynchronous JS
  // it uses JS promises API above
  // to learn more - check promises or fetch  


// we can add our items to the setProductState below, or we can use an API 
// the below does not work with API and needs to be commented out.
// as well as const hasProducts as they link up

//   setTimeout(() => {
//      setProductsState ([
//     "Mazda", 
//     "BMW", 
//     "VW Golf", 
//     ])
//   }, 3000)

//do not remove below, it links to useEffect function ! 
}, [])

// we are creating a variable below for ternary operator

const hasProducts = productsState.length > 0 

// the above will be true if products are loaded
// or false otherwise 

    return (
    <div>
        this is any other text
        <CountButton incrementBy={1} buttonColor={"blue"} />
        we have included one of the components above. Now adding more text here. 
        Or could add more components
        <CountButton incrementBy={5} buttonColor={"green"} /> 
        <CountButton incrementBy={7} buttonColor={"red"} />  
        <SearchBar /> 
        <br />
        <SearchBarDoubled />
        <SearchBarDoubledTwo products={products} />
        <SearchBarDoubledTwo products={[
          "Mazda", 
          "BMW", 
          "VW Golf"
        ]} />
        <CountButtonEffect incrementBy={0.5} />
        {hasProducts ? <SearchBarEffect products={productsState} /> : 'Loading...'}
        <Button>Hello World</Button>

    </div>
    )
  }

              //SearchbarDoubledTwo
              // products= match the props.products in the search doubled two file
              // {products} match the array at the top of this page
              // or we can add an array into the above, as the second one with cars

  // above adding incrementBy would allow us to use same components with different values. 

export default App 
  // the above allows for this code to be available to other files in src folder


  
// reusing components, and building components that can be reused. 
// jsx is similar to HTML
// all code goes within the body in html
// now we create documents for each component - count button

// anything we create needs to be imported here!!! to this file.
// it is done by placing the name of the function < xx/> within the function in this file. 
// React imports the document itself

// each new component should be in its own file




// API
// 
// we will load a real product data from API
// can use https://fakestoreapi.com/docs 
// we will get JSON data - javascript object notation data
// we get fake data about products 
// 
// we will get our JavaScript go to the website and get all this json data
// bring it into our app, and display that 

// we are adding the API linking code to useEffect function above


// Parent components
